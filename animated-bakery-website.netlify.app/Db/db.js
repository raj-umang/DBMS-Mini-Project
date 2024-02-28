import pkg from "pg";

const pool = new pkg.Pool({
  host: "localhost",
  user: "postgres",
  password: "<PASSWORD>",
  port: 5432,
  database: "animated_bakery",
});

export default pool;
