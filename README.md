    # API de Gerenciamento de Produtos

API RESTful construída com Node.js, Express e Prisma, permitindo o gerenciamento de usuários e produtos com autenticação via JWT. A aplicação possui CRUD completo de usuários e produtos, suporte a diferentes papéis (ADMIN e CLIENT), e autenticação segura.

## Funcionalidades

- **Usuários**: CRUD completo, busca por ID, email ou CPF, definição de papéis (ADMIN/CLIENT).  
- **Autenticação**: login via email e senha, geração de token JWT, middleware para validar token e papel do usuário.  
- **Produtos**: CRUD completo (apenas admins podem criar, atualizar e deletar), consulta por ID ou nome, cada produto vinculado ao usuário que o criou.

## Tecnologias

- Node.js + Express  
- Prisma ORM com PostgreSQL  
- Bcrypt para hash de senhas  
- JSON Web Token (JWT) para autenticação  

## Como usar

1. Clone o repositório.  
2. Configure o arquivo `.env` com `DATABASE_URL` e `JWT_SECRET`.  
3. Rode `npm install` para instalar as dependências.  
4. Execute `npx prisma migrate dev` para criar o banco de dados.  
5. Inicie a API com `npm run dev`.  
6. Use ferramentas como Postman ou Insomnia para testar as rotas de login e produtos.

## Observações

- Rotas de login e cadastro de usuários são públicas.  
- Rotas de produtos são protegidas e requerem token JWT válido.  
- Apenas usuários com papel ADMIN podem criar, atualizar ou deletar produtos.
