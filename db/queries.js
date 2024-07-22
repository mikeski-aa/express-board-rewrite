const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

// posting query
async function postMessage(input) {
  const myquery = {
    text: "INSERT INTO messages (message, username, date) VALUES ($1, $2, $3)",
    values: [input.text, input.user, input.date],
  };

  await pool.query(myquery);
}

module.exports = {
  getAllMessages,
  postMessage,
};
