const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 message VARCHAR (225), username VARCHAR (225), date DATE
);

INSERT INTO messages (message, username, date)
VALUES ('Hi there!', 'Amado', date '2024-07-22');

INSERT INTO messages (message, username, date)
VALUES ('Hello world!', 'Charles', date '2024-07-21');

`;

async function main() {
  console.log(process.env.CONNECTION_URI);
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_URI,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
