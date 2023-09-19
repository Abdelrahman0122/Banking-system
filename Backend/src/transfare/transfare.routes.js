import express  from "express"
import { transfare, viewAllTransfers } from "./transfare.controller.js"

const router = express.Router();

router.post('/',transfare);
router.get('/viewAllTransfers',viewAllTransfers);

export default router;