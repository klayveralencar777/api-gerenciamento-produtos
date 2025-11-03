export default function FormLogin() {
    return(
         <div class="flex min-h-full flex-col justify-center px-6 py-30 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
               <div className="flex items-center justify-center text-black px-4 py-2">
                    
                    <i style = {{
                        fontSize: '30px',
                        color: '#0F172A'

                    }}className="fas fa-user text-center"></i>
               </div>
               
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" class="space-y-6">
                    <div>
                        <label for="email" class="block text-sm/6 font-medium text-gray-900">Endereço de email</label>
                        <div class="mt-2">
                            <input id="email" 
                            type="email" name="email" required autocomplete="email" 
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 
                            outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 
                            focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm/6 font-medium text-gray-900">Senha</label>
                            <div class="text-sm">
                                <a href="#" style={{color: '#0F172A'}} class="font-semibold text-indigo-600 hover:text-indigo-500">Esqueceu a senha?</a>
                            </div>
                        </div>

                        <div class="mt-2">
                            <input id="password" type="password" name="password" 
                            required autocomplete="current-password" 
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 
                            placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>

                    </div>

                    <div>
                        <button style={{backgroundColor: '#0F172A'}} type="submit" 
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3
                         py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500
                          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >Sign in</button>

                    </div>
                </form>

                <p class="mt-10 text-center text-sm/6 text-gray-500">
                    Não possui cadastro? 
                    <a href="/register" style={{color: '#0F172A'}} class="font-semibold text-indigo-600 hover:text-indigo-500">Crie aqui!</a>
                </p>
            </div>
        </div>

        
    )
}