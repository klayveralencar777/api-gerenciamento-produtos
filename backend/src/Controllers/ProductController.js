import { ProductService } from "../Services/ProductService.js";

export class ProductController {
    constructor() {
        this.productService = new ProductService()
    }

    async findAll(req, res) {
        try {
            const products = await this.productService.findAllProducts()
            return res.status(200).json(products)
            
        } catch (error) {
            return res.status(500).json({error: error.message})
            
        }
        
    }
    async findById(req, res) {
        const {id} = req.params
        try {
            const product = await this.productService.findProductById(id)
            return res.status(200).json(product)
            
        } catch (error) {
            return res.status(404).json({error: error.message})
            
        }
    } 
    async findByName(req,res) {
        const {name} = req.params
        try {
            const product = await this.productService.findProductByName(name)
            return res.status(200).json(product)
            
        } catch (error) {
            return res.status(400).json({error: error.message})
            
        }   

    }
    async create(req, res) {
        const user  = req.user
        const product = req.body
        try {
            const newProduct = await this.productService.createProduct(user, product)
            return res.status(201).json(newProduct)

            
        } catch (error) {
            return res.status(403).json({error: error.message})
            
        }

    }
    async update(req, res) {
        const user = req.user
        const {id} = req.params
        const product = req.body
        try {
            const productUpdated = await this.productService.updateProduct(user, Number(id), product)
            return res.status(200).json(productUpdated)
            
        } catch (error) {
            return res.status(403).json({error: error.message})
            
        }
    }
    async delete(req, res){
        const {id} = req.params
        const user = req.user

        try {
            await this.productService.deleteProduct(user, Number(id))
            return res.status(204).send()
            
        } catch (error) {
            return res.status(403).json({error: error.message})          
        }
    }
}