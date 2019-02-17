/** Database client. */

const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql:///dmi_strings',
});

client.connect();

module.exports = client;
