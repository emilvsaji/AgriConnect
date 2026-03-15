const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");

// ============================================================
// REPLACE THIS WITH YOUR NEW CLUSTER'S CONNECTION STRING
const NEW_MONGO_URI = "YOUR_NEW_MONGO_URI_HERE";
// ============================================================

const DUMP_DIR = path.join(__dirname, "db_dump");

async function main() {
  if (NEW_MONGO_URI === "YOUR_NEW_MONGO_URI_HERE") {
    console.error("ERROR: Please set your new MongoDB URI in this file first!");
    console.error('Open restore_db.js and replace "YOUR_NEW_MONGO_URI_HERE" with your new cluster URI.');
    process.exit(1);
  }

  const client = new MongoClient(NEW_MONGO_URI);

  try {
    await client.connect();
    console.log("Connected to NEW MongoDB cluster.\n");

    // Read all database folders from dump
    const dbFolders = fs
      .readdirSync(DUMP_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    let totalCollections = 0;
    let totalDocuments = 0;

    for (const dbName of dbFolders) {
      const dbDir = path.join(DUMP_DIR, dbName);
      const db = client.db(dbName);

      const files = fs
        .readdirSync(dbDir)
        .filter((f) => f.endsWith(".json") && f !== "_indexes.json");

      console.log(`[${dbName}] Restoring ${files.length} collection(s)...`);

      for (const file of files) {
        const colName = path.basename(file, ".json");
        const filePath = path.join(dbDir, file);
        const docs = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        if (docs.length === 0) {
          console.log(`  -> ${colName}: 0 documents, skipping.`);
          continue;
        }

        const collection = db.collection(colName);
        await collection.insertMany(docs);

        console.log(`  -> ${colName}: ${docs.length} documents restored`);
        totalCollections++;
        totalDocuments += docs.length;
      }

      // Restore indexes
      const indexFile = path.join(dbDir, "_indexes.json");
      if (fs.existsSync(indexFile)) {
        const indexData = JSON.parse(fs.readFileSync(indexFile, "utf-8"));
        for (const [colName, indexes] of Object.entries(indexData)) {
          for (const idx of indexes) {
            if (idx.name === "_id_") continue; // default index, already exists
            try {
              await db.collection(colName).createIndex(idx.key, {
                name: idx.name,
                unique: idx.unique || false,
                sparse: idx.sparse || false,
              });
            } catch (e) {
              console.log(`  -> Index "${idx.name}" on ${colName}: ${e.message}`);
            }
          }
        }
        console.log(`  -> Indexes restored for ${dbName}`);
      }
    }

    console.log(`\n--- RESTORE COMPLETE ---`);
    console.log(`Total: ${totalCollections} collections, ${totalDocuments} documents`);
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
    console.log("\nConnection closed.");
  }
}

main();
