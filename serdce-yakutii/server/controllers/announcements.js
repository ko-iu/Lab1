import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import Announcement from '../models/Announcement.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Настройка Multer для загрузки изображений
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Неверный тип файла. Разрешены только изображения.'), false);
  }
};

const upload = multer({ 
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

class AnnouncementController {
  static async getAll(req, res) {
    try {
      const announcements = await Announcement.getAll();
      res.json(announcements);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const announcement = await Announcement.getById(req.params.id);
      if (!announcement) {
        return res.status(404).json({ error: 'Объявление не найдено' });
      }
      res.json(announcement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const imagePath = req.file ? `/uploads/${req.file.filename}` : null;
      
      const newAnnouncement = await Announcement.create({
        image: imagePath,
        name: req.body.name,
        age: req.body.age,
        breed: req.body.breed,
        gender: req.body.gender || 'unknown',
        description: req.body.description,
        contacts: req.body.contacts,
        color: req.body.color || '#FFC248'
      });
      
      res.status(201).json(newAnnouncement);
    } catch (error) {
      console.error('Error in create:', error);
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const imagePath = req.file ? `/uploads/${req.file.filename}` : undefined;
      
      const updatedAnnouncement = await Announcement.update(req.params.id, {
        image: imagePath,
        name: req.body.name,
        age: req.body.age,
        breed: req.body.breed,
        gender: req.body.gender,
        description: req.body.description,
        contacts: req.body.contacts,
        color: req.body.color
      });
      
      if (!updatedAnnouncement) {
        return res.status(404).json({ error: 'Объявление не найдено' });
      }
      
      res.json(updatedAnnouncement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const deletedAnnouncement = await Announcement.delete(req.params.id);
      if (!deletedAnnouncement) {
        return res.status(404).json({ error: 'Объявление не найдено' });
      }
      res.json(deletedAnnouncement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default AnnouncementController;
export const uploadMiddleware = upload.single('image');