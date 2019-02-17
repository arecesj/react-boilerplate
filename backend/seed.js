const db = require('./db');

const DDL = `
CREATE TABLE strings (
  id SERIAL NOT NULL,
  string TEXT NOT NULL,
  PRIMARY KEY (id)
  );`;

async function createTable() {
  try {
    await db.query(DDL);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

createTable().then(() => {
  process.exit();
});
