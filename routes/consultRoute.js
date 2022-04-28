import { createConsult } from "../controllers/consultController.js";
import express from 'express'
const router = express.Router()

router.route('/api/consult').post(createConsult)

export default router;