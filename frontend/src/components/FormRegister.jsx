export default function FormRegister() {
    return (

        <div className="flex min-h-full flex-col justify-center px-6 py-30 lg:px-8">
            <div
                style={{
                    padding: '30px',
                    borderRadius: '12px',
                }}
                className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg"
            >
                <form action="#" method="POST" className="space-y-6">
                    {/* Nome */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black">
                            Nome
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
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
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 
                                -outline-offset-1 outline-gray-300 focus:outline-2 
                                focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            >
                                <option value="">Selecione...</option>
                                <option value="admin">Administrador</option>
                                <option value="client">Cliente</option>
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