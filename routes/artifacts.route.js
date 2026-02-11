import express from 'express';
import {
  createArtifacts,
//   getArtifacts,
} from "../controllers/artifact.controller.js";
import { authMiddleware } from '../middlewares/auth.middleware.js';
// import { authrizeRoles } from '../middlewares/role.middleware.js';

const router = express.Router();

router.post('/', authMiddleware, createArtifacts);
// router.get('/', authenticate, authrizeRoles('ADMIN'), getArtifacts);

export default router;