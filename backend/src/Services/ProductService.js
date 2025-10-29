import { ProductRepository } from "../Repositories/ProductRepository.js";

export class ProductService {
    constructor() {
        this.productRepository = new ProductRepository()
    }
    async findAllProducts() {
        return await this.productRepository.findAll()
    }

    async findProductById(id) {
        const productId = await this.productRepository.findById(id)
        if(!productId){
            throw new Error(`Produto não encontrado com o Id "${id}"`)
        }
        return productId
    }
    async findProductByName(name) {
        const productName = await this.productRepository.findByName(name)
        if(!productName) {
            throw new Error(`Produto não encontrado com o nome "${name}"`)
        }
        return productName
    }

    async createProduct(user, product) {
        this.checkRole(user)
        return await this.productRepository.create({
            ...product,
            userId: user.id,
        })
    }
    async updateProduct(user, id, product) {
        this.checkRole(user)
        await this.findProductById(id)
        return await this.productRepository.update(id, product)
    
    }
    async deleteProduct(user, id) {
        this.checkRole(user)
        await this.findProductById(id)
        return await this.productRepository.deleteById(id)
    }

    checkRole(user) {
        if(user.role !== "ADMIN") {
            throw new Error("Apenas admins podem criar, atualizar ou deletar produtos.")
        }   
    }







}