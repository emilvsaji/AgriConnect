require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const TEST_DIR = path.resolve(__dirname, '..', '..', 'test');
const FILE_TO_COLLECTION = {
  users: 'users',
  products: 'products',
  orders: 'orders',
  tools: 'tools',
  stories: 'stories'
};

function convertValue(key, value) {
  if (typeof value === 'string') {
    if ((key === '_id' || key.endsWith('Id') || key.endsWith('ID')) && mongoose.Types.ObjectId.isValid(value)) {
      return new mongoose.Types.ObjectId(value);
    }

    const isIsoDate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/.test(value);
    if (isIsoDate && (key.toLowerCase().includes('date') || key.toLowerCase().includes('time') || key.toLowerCase().includes('at'))) {
      return new Date(value);
    }
  }

  if (Array.isArray(value)) {
    return value.map((item) => convertValue(key, item));
  }

  if (value && typeof value === 'object') {
    return normalizeDocument(value);
  }

  return value;
}

function normalizeDocument(doc) {
  const normalized = {};
  for (const [key, value] of Object.entries(doc)) {
    normalized[key] = convertValue(key, value);
  }
  return normalized;
}

function readJsonArray(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error(`${path.basename(filePath)} must contain a JSON array`);
  }
  return parsed.map(normalizeDocument);
}

async function seedCollection(fileKey, collectionName) {
  const filePath = path.join(TEST_DIR, `${fileKey}.json`);
  if (!fs.existsSync(filePath)) {
    console.warn(`Skipping ${collectionName}: ${fileKey}.json not found`);
    return { collectionName, count: 0, skipped: true };
  }

  const documents = readJsonArray(filePath);
  const collection = mongoose.connection.collection(collectionName);

  await collection.deleteMany({});
  if (documents.length > 0) {
    await collection.insertMany(documents, { ordered: false });
  }

  return { collectionName, count: documents.length, skipped: false };
}

async function run() {
  const mongoUri = process.env.MONGO_URI?.trim();
  if (!mongoUri) {
    throw new Error('MONGO_URI is missing in backend/.env');
  }

  await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 15000 });
  console.log(`Connected to MongoDB database: ${mongoose.connection.name}`);

  const summary = [];
  for (const [fileKey, collectionName] of Object.entries(FILE_TO_COLLECTION)) {
    const result = await seedCollection(fileKey, collectionName);
    summary.push(result);
  }

  console.log('\nSeed summary:');
  for (const item of summary) {
    if (item.skipped) {
      console.log(`- ${item.collectionName}: skipped`);
    } else {
      console.log(`- ${item.collectionName}: ${item.count} document(s)`);
    }
  }
}

run()
  .then(async () => {
    await mongoose.disconnect();
    console.log('\nSeeding completed successfully.');
  })
  .catch(async (error) => {
    console.error('\nSeeding failed:', error.message);
    await mongoose.disconnect().catch(() => {});
    process.exit(1);
  });
