import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export async function createUser(data) {
    try {
        const response = await api.post('/users', data)
        return response.data
        
    } catch (error) {
        throw new Error({error: error.message})
        
    }
}