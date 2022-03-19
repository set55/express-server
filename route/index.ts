import { Router } from 'express'
import Greeter from "../app/models/Greeter";
import DemoController from "../app/controllers/DemoController";

const router = Router()
const demoController = new DemoController()

router.get('/', demoController.index)

export default router