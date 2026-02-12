import express from 'express';
import {
  createArtifacts
  // getArtifacts,
} from "../controllers/artifact.controller.js";
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from "../middlewares/role.middleware.js";
import { apiLimiter } from '../middlewares/rateLimiter.middleware.js';
// import { createArtifact, getArtifacts } from '../controllers/artifact.controller.js';
// import { authrizeRoles } from '../middlewares/role.middleware.js';

const router = express.Router();

router.post('/', authMiddleware, authorizeRoles("ADMIN", "EDITOR", "VIEWER"), createArtifacts);
// router.get('/', apiLimiter, authMiddleware, authorizeRoles('ADMIN'), getArtifacts);

export default router;
