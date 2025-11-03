
import React from 'react';
import CardHome from '../components/CardHome';
import Feature from '../components/Feature';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="container mx-auto px-4 py-10 flex flex-col gap-12">

            <div className="text-center">
                <h1 class="text-5xl font-semibold tracking-tight text-balance text-black sm:text-7xl">Gerencie seus produtos de forma fácil e eficiente.</h1>
                <p className="mt-8 text-lg font-semibold text-pretty text-black sm:text-xl/8">Faça login ou crie uma conta para começar.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-16">
                <CardHome
                    title="Login"
                    description="Já possui uma conta? Faça login aqui."
                    buttonText="Ir para Login"
                    onClick={() => navigate('/login')}
                />
                <CardHome
                    title="Cadastro"
                    description="Novo aqui? Cadastre-se para começar."
                    buttonText="Ir para Cadastro"
                    onClick={() => navigate('/register')}
                />
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <Feature
                    icon="fas fa-cogs"
                    title="Gerenciamento Completo"
                    description="Crie, edite e exclua produtos facilmente"
                />
                <Feature
                    icon="fas fa-user-shield"
                    title="Controle de Acesso"
                    description="Diferentes permissões para admin e clientes"
                />
                <Feature
                    icon="fas fa-desktop"
                    title="Interface Moderna"
                    description="Design responsivo e fácil de usar"
                />
            </div>
        </div>

    )

}
