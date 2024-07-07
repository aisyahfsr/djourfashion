import { pool } from "../config/db.js";

// Untuk daftar akun atau registrasi
export const registerAccount = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, password]
    );
    res.status(201).json({ msg: "Pendaftaran berhasil", data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untk mendapatkan semua data user
export const getAllUser = async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
