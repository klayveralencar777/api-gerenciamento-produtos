import { UserService } from "../Services/UserService.js";

export class UserController {

    constructor() {
        this.userService = new UserService()
    }

    async findAll(req, res) {
        try {
            const users = await this.userService.findAll()
            return res.status(200).json(users)
            
        } catch (error) {
            return res.status(400).json({error: error.message})          
        }
    }

    async create(req, res) {
        const{name, password, email, role} = req.body
        try {
            const user = await this.userService.create({
                name,
                password,
                email,
                role,
            })
            return res.status(200).json(user)

        } catch (error) {
            return res.status(400).json({error: error.message})
            
        }

    }
    async findById(req, res) {
        const {id} = req.params
        try {
            const user = await this.userService.findUserById(Number(id))
            return res.status(200).json(user)
            
        } catch (error) {
            return res.status(404).json({error: error.message})
            
        }
    }

    async findByEmail(req, res) {
        const {email} = req.params
        try {
            const user = await this.userService.findUserByEmail(email)
            return res.status(200).json(user)
            
        } catch (error) {
            return res.status(404).json({error: error.message})
            
        }
    }

    async update(req, res) {
        const {id} = req.params
        const userUpdated = req.body
        try {
            await this.userService.updateUser(Number(id), userUpdated)
            return res.status(200).json(userUpdated)

            
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    async deleteById(req, res) {
        const {id} = req.params
        try {
            const userDeleted = await this.userService.deleteById(Number(id))
            return res.status(204).json(userDeleted)
            
        } catch (error) {
            return res.status(400).json({error: error.message})
            
        }

    }
    
    async deleteByEmail(req, res) {
        const {email} = req.params
        try {
            const userDeleted = await this.userService.deleteByEmail(email)
            return res.status(204).json(userDeleted)
            
        } catch (error) {
            return res.status(400).json({error: error.message})
            
        }         
        }

}
