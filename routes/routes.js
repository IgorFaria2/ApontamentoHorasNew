import  express  from "express";
import { main } from "../src/controllers/main.js";
const router = express.Router()

router.get("/",main)


export { router }