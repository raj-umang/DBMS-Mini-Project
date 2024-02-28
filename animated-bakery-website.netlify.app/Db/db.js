const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "umang",
  password: "root@1234",
  port: 5432,
  database: "bakery",
});

client.connect();

client.query(`Select * from users`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});

// export default pool;
