import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export class ProductRepository {
    constructor() {}

    async create(data) {
        return await prisma.product.create({data})
    }
    async findAll() {
        return await prisma.product.findMany()
    }
    async findById(id) {
        return await prisma.product.findUnique({
            where: {id}
        })
    }
    async findByName(name) {
        return await prisma.product.findFirst({
            where: {name}
        })

    }
    async update(id, data) {
        return await prisma.product.update({
            where: {id},
            data
        })
    }

    async deleteById(id) {
        return await prisma.product.delete({
            where: {id}
        })
    }   
    
}