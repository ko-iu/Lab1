import express from 'express';
import AnnouncementController from '../controllers/announcements.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.get('/', AnnouncementController.getAll);
router.get('/:id', AnnouncementController.getById);
router.post('/', upload.single('image'), AnnouncementController.create);
router.put('/:id', upload.single('image'), AnnouncementController.update);
router.delete('/:id', AnnouncementController.delete);

export default router;