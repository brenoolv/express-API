import createResourceController from "../controller/resourceController.js";
import asyncRouter from './asyncRouter.js';
import { users } from '../repository/index.js';
import express from 'express'

const controller = createResourceController(users)
const router = express.Router();

router.get('/', asyncRouter(controller.list));
router.get('/:id', asyncRouter(controller.get));
router.patch('/:id', asyncRouter(controller.update));
router.delete('/:id', asyncRouter(controller.remove));

export default router;