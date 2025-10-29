import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export class UserRepository {
    constructor() {}
    
    async create(data) {
        return await prisma.user.create({data})
    }

    async findAll() {
        return await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true
            }
        })
    }
    async findById(id) {
        return await prisma.user.findUnique({ 
            where: {id},
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
            }
        
        })
    }
    async findByEmail(email) {
        return await prisma.user.findUnique({
            where: {email},
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
                password: true,
            }
        })
        
    }

    async update(id, data) {
        return await prisma.user.update({
            where: {id},
            data
        })
    }

    async delete(id) {
        return await prisma.user.delete({
            where: {id}
        })
    }

    async deleteByEmail(email) {
        return await prisma.user.delete({
            where: {email}
        })
    }

}