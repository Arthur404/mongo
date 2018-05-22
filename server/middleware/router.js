import express from 'express';
import serverRenderer from './renderer';

const router = express.Router();

router.get('/', serverRenderer);

export default router;