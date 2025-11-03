import React from 'react'
import { useState } from "react"
import { data, useNavigate } from 'react-router-dom'
import { createUser } from '../services/UserRegister'

export default function FormRegister() {
    const navigate = useNavigate()

    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setDataForm((prev) => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await createUser(dataForm)
            alert("Usuário cadastrado com sucesso!")
            navigate("/login")

        } catch (error) {
            alert("Falha ao cadastrar usuário")
            console.error(error)
        }

    }


    return (

        <div className="flex min-h-full flex-col justify-center px-6 py-30 lg:px-8">
            <div
                style={{
                    padding: '30px',
                    borderRadius: '12px',
                }}
                className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg"
            >

                <p style={{ marginBottom: '30px' }} 
                className="mt-8 text-lg font-semibold text-pretty text-center text-gray-500 sm:text-xl/8">Cadastro</p>

                <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black">
                            Nome
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={dataForm.name}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 
                                -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 
                                focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                placeholder="Seu nome completo"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black">
                            Endereço de email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={dataForm.email}
                                onChange={handleChange}
                                autoComplete="email"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 
                                -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 
                                focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                placeholder="Digite seu email"
                            />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-black">
                            Senha
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={dataForm.password}
                                onChange={handleChange}
                                autoComplete="new-password"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 
                                -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 
                                focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                placeholder="Digite sua senha"
                            />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-black">
                            Tipo de usuário
                        </label>
                        <div className="mt-2">
                            <select
                                id="role"
                                name="role"
                                required
                                value={dataForm.role}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 
                                -outline-offset-1 outline-gray-300 focus:outline-2 
                                focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            >
                                <option value="">Selecione...</option>
                                <option value="ADMIN">Administrador</option>
                                <option value="CLIENT">Cliente</option>
                            </select>
                        </div>
                    </div>


                    <div>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: '#101828',
                            }}
                            className="flex w-full justify-center rounded-md px-3
                            py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Já possui uma conta?{" "}
                    <a href="/login" className="font-semibold text-black">
                        Faça login
                    </a>
                </p>
            </div>
        </div>
    )
}