export default function FormRegister() {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-30 lg:px-8">
            <div
                style={{
                    backgroundColor: '#101828',
                    padding: '30px',
                    borderRadius: '12px',
                }}
                className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg"
            >
                <form action="#" method="POST" className="space-y-6">
                    <div className="flex items-center justify-center text-white px-4 py-2">
                        <i
                            style={{ fontSize: '28px' }}
                            className="fas fa-user-plus text-center"
                        ></i>
                    </div>

                    {/* Nome */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white">
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

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">
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
                                placeholder="exemplo@email.com"
                            />
                        </div>
                    </div>

                    {/* Senha */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white">
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

                    {/* Tipo de Usuário */}
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-white">
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

                    {/* Botão */}
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3
                            py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Já possui uma conta?{" "}
                    <a href="/login" className="font-semibold text-white hover:text-indigo-400">
                        Faça login
                    </a>
                </p>
            </div>
        </div>
    )
}