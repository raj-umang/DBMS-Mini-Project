const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "root@123",
  port: 5432,
  database: "bakery",
});

client.connect();

client.query(`Select * from item`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});

export default Client;
