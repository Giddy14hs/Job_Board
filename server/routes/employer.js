import express from 'express';
import employerController from '../controllers/employer.js';

const router = express.Router();

router.post('/', employerController.createEmployer);
router.get('/', employerController.getAllEmployers);
router.get('/:id', employerController.getEmployerById);
router.put('/:id', employerController.updateEmployer);
router.delete('/:id', employerController.deleteEmployer);

export default router;