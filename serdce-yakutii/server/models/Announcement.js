import pool from '../config/db.js';

class Announcement {
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM announcements ORDER BY created_at DESC');
    return rows;
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM announcements WHERE id = $1', [id]);
    return rows[0];
  }

  static async create({ 
    image, 
    name, 
    age, 
    breed, 
    gender, 
    description, 
    contacts, 
    color 
  }) {
    const { rows } = await pool.query(
      `INSERT INTO announcements (
        image, name, age, breed, gender, description, contacts, color
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [image, name, age, breed, gender, description, contacts, color]
    );
    return rows[0];
  }

  static async update(id, { 
    image, 
    name, 
    age, 
    breed, 
    gender, 
    description, 
    contacts, 
    color 
  }) {
    const { rows } = await pool.query(
      `UPDATE announcements SET 
        image = COALESCE($1, image), 
        name = $2, 
        age = $3, 
        breed = $4, 
        gender = $5, 
        description = $6, 
        contacts = $7, 
        color = $8 
      WHERE id = $9 RETURNING *`,
      [image, name, age, breed, gender, description, contacts, color, id]
    );
    return rows[0];
  }

  static async delete(id) {
    const { rows } = await pool.query('DELETE FROM announcements WHERE id = $1 RETURNING *', [id]);
    return rows[0];
  }
}

export default Announcement;