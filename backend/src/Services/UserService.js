import { UserRepository } from "../Repositories/UserRepository.js";
import validator from 'validator'
import bcrypt from 'bcryptjs'

export class UserService {

    constructor() {
        this.userRepository = new UserRepository()
    }

    async create({name, email, password, role}) {
        const emailIsValid = this.validateEmail(email)
        const userExist = await this.userRepository.findByEmail(email)
        if(userExist) {
            throw new Error(`Já existe um usuário com o email ${email}`)
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const user = await this.userRepository.create({
            name,
            email: emailIsValid,
            password: hashPassword,
            role,
         })

         const{password_, ...userNoPassword} = user
         return userNoPassword       
    }

    async findAll() {
        return await this.userRepository.findAll()
    }

    async findUserById(id) {
        const userId = await this.userRepository.findById(id)
        if(!userId) {
            throw new Error(`Usuário com o ID ${id} não encontrado`)
        }
        return userId
    }

    async findUserByEmail(email) {
        const userEmail = await this.userRepository.findByEmail(email)
        if(!userEmail) {
            throw new Error(`Usuário com o email ${email} não encontrado`)
        }
        return userEmail
    }

    async deleteById(id) {
        await this.findUserById(id)
        return await this.userRepository.delete(id)
    }

    async deleteByEmail(email) {
        await this.findUserByEmail(email)
        return await this.userRepository.deleteByEmail(email)
        
    }
    
    async updateUser(id, data) {
        await this.findUserById(id)
        if(data.password) {
            data.password = await  bcrypt.hash(data.password, 10)
        }
        if(data.email) {
            const emailIsValid = await this.validateEmail(data.email)
            data.email = await emailIsValid
        }

        const updatedUser = await this.userRepository.update(id, data)
        const{password:_, ...userNoPassword} = updatedUser
        return userNoPassword

    }
    validateEmail(email) {
        if (!email || !validator.isEmail(email)) {
            throw new Error('Email inválido')
            }
  
         return validator.normalizeEmail(email) 
    }
    

}