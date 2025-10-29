import {Router} from 'express'
import { AuthController } from '../Auth/Controllers/AuthController.js'

const router = Router()
const authController = new AuthController()
router.post('/login', authController.login.bind(authController))

export default router