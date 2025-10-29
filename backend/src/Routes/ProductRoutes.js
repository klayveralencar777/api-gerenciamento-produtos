import {Router} from 'express'
import {ProductController} from '../Controllers/ProductController.js'
import { authMiddleware } from '../Middlewares/AuthMiddleware.js'

const router = Router()
const controller = new ProductController()
router.use(authMiddleware)

router.get('/', controller.findAll.bind(controller))
router.get('/:id', controller.findById.bind(controller))
router.get('/name/:name', controller.findByName.bind(controller))
router.post('/', controller.create.bind(controller))
router.put('/:id', controller.update.bind(controller))
router.delete('/:id', controller.delete.bind(controller))

export default router
