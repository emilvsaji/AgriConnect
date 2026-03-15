const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");

const MONGO_URI =
  "mongodb+srv://zeliska50_db_user:EqXFSfCeUyb7wAHW@cluster0.nt1vyxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const DUMP_DIR = path.join(__dirname, "db_dump");

async function main() {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    console.log("Connected to MongoDB cluster.\n");

    // List all databases (skip system dbs)
    const { databases } = await client.db().admin().listDatabases();
    const skipDbs = ["admin", "local", "config"];
    const userDbs = databases.filter((db) => !skipDbs.includes(db.name));

    console.log(
      "Databases found:",
      userDbs.map((d) => `${d.name} (${d.sizeOnDisk} bytes)`)
    );

    // Create dump directory
    if (!fs.existsSync(DUMP_DIR)) {
      fs.mkdirSync(DUMP_DIR, { recursive: true });
    }

    let totalCollections = 0;
    let totalDocuments = 0;

    for (const dbInfo of userDbs) {
      const db = client.db(dbInfo.name);
      const collections = await db.listCollections().toArray();

      if (collections.length === 0) {
        console.log(`\n[${dbInfo.name}] No collections, skipping.`);
        continue;
      }

      // Create a folder per database
      const dbDir = path.join(DUMP_DIR, dbInfo.name);
      if (!fs.existsSync(dbDir)) {
        fs.mkdirSync(dbDir, { recursive: true });
      }

      console.log(
        `\n[${dbInfo.name}] ${collections.length} collection(s) found.`
      );

      for (const colInfo of collections) {
        const colName = colInfo.name;
        const collection = db.collection(colName);
        const docs = await collection.find({}).toArray();

        const filePath = path.join(dbDir, `${colName}.json`);
        fs.writeFileSync(filePath, JSON.stringify(docs, null, 2), "utf-8");

        console.log(`  -> ${colName}: ${docs.length} documents exported`);
        totalCollections++;
        totalDocuments += docs.length;
      }

      // Also save indexes for each collection
      const indexFile = path.join(dbDir, "_indexes.json");
      const indexData = {};
      for (const colInfo of collections) {
        const indexes = await db.collection(colInfo.name).indexes();
        indexData[colInfo.name] = indexes;
      }
      fs.writeFileSync(indexFile, JSON.stringify(indexData, null, 2), "utf-8");
      console.log(`  -> Indexes saved to _indexes.json`);
    }

    console.log(`\n--- DUMP COMPLETE ---`);
    console.log(`Total: ${totalCollections} collections, ${totalDocuments} documents`);
    console.log(`Dump location: ${DUMP_DIR}`);
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
    console.log("\nConnection closed.");
  }
}

main();
