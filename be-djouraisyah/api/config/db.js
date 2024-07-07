import "dotenv/config";
import mariadb from "mariadb";

export const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool
  .getConnection()
  .then(() => {
    console.log("Berhasil terhubung ke basis data.");
  })
  .catch((err) => {
    console.error("Gagal terhubung ke basis data:", err);
  });
