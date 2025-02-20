# 📝 Gerenciador de tarefas - ToDo
Este é o backend de uma plataforma web de gerenciamento de tarefas, acompanhado por uma suíte de testes que verifica o correto funcionamento da API. Os testes simulam interações com os endpoints, garantindo que todas as operações sejam executadas como esperado e assegurando a estabilidade do sistema.

## 💻 Tecnologias utilizadas

- Node.js
- Express
- MySQL
- Prisma
- Jest
- Supertest
- MySQL

---

## 🏠 Como rodar o projeto localmente

### Requisitos mínimos:
- Node.js (versão 14 ou superior)
- MySQL
- Gerenciador de pacotes (pnpm, npm, ou yarn)

### Execução:

1. **Clone o repositório:**
   
   ```bash
   git clone https://github.com/luyz-gusta/todo-backend
   ```
   
2. **Navegue até o diretório do projeto:**
   
   ```bash
   cd todo-backend
   ```
   
3. **Instale as dependências:**
 
   ```bash
   npm install
   ```

4. **Crie um arquivo .env na raiz do projeto e defina a variável DATABASE_URL com a URL de conexão do seu banco de dados MySQL:**

   ```env
   DATABASE_URL=mysql://usuario:senha@localhost:3306/nome_do_banco
   ```

5. **Rode as migrações do Prisma:**

   ```bash
   npx prisma migrate dev
   ```

6. **Inicie o servidor:**

   ```bash
   npm start
   ```

A API estará disponível em http://localhost:8000.

Com o servidor em execução, use alguma ferramenta de execução de testes de endpoint como o Postman para enviar requisições às rotas da API e verificar se estão funcionando corretamente.



## 🔗 Endpoints
Esta API disponibiliza os seguintes endpoints para gerenciamento de tarefas:

### GET /tasks: Lista todas as tarefas cadastradas.

### GET /tasks/:id: Busca uma tarefa específica pelo ID.

### POST /tasks: Adiciona uma nova tarefa ao sistema.

### PUT /tasks/:id: Modifica os dados de uma tarefa existente.

### DELETE /tasks/:id: Exclui uma tarefa utilizando o ID como parâmetro de busca.

Caso queria saber mais ou testar elas utilizando o postman, vou deixar abaixo a collection de testes para os endpoitns:

[⬇️ Baixe a Collection do Postman](./toDo.postman_collection.json)

## 🧪 Como rodar as cases de teste
* Para executar os testes, utilize o seguinte comando:

  ```bash
  npm test
  ```
  
Esse comando executará todos os testes e exibirá os resultados diretamente no terminal.

## 🛠️ Decisões Técnicas

- **📁 Arquitetura MVC:**  
  Foi adotado o padrão **Model-View-Controller** para separar a lógica de negócios (**Model**), o controle das requisições (**Controller**) e a gestão das rotas (**View**), promovendo uma estrutura mais limpa e escalável.

- **🗄️ Prisma como ORM:**  
  O **Prisma** foi utilizado para interagir com o banco de dados **MySQL**, proporcionando uma forma mais simples de realizar operações **CRUD**, abstração de queries e um gerenciamento eficaz de migrações.

- **🧪 Testes Automatizados:**  
  Foram implementados testes unitários com **Jest** e testes de integração para as rotas com **Supertest**, garantindo a robustez e o bom funcionamento da API.

- **🚀 Implantação no Railway:**  
  O backend foi hospedado na plataforma **Railway**, garantindo uma configuração simplificada e escalável, com o deploy tanto do backend quanto do frontend e banco de dados.

## 🚀 Possíveis melhorias futuras

* **Documentação com Swagger:**  
  Implementar documentação de API interativa utilizando **Swagger** com as dependências **swagger-ui-express** e **swagger-jsdoc**. Isso permitirá a geração automática da documentação da API diretamente a partir dos comentários no código, tornando o uso da API mais intuitivo e acessível. Desenvolvedores poderão testar os endpoints diretamente pela interface gerada.


* **Autenticação e Autorização (JWT):**  
  Implementar autenticação de usuários via **JWT** (JSON Web Tokens) para garantir que apenas usuários autenticados possam realizar operações como criar, editar ou excluir tarefas, aumentando a segurança da aplicação.

* **Paginação de resultados:**  
  Adicionar a funcionalidade de **paginação** à lista de tarefas, o que será especialmente útil caso o número de tarefas cresça de forma significativa, melhorando a performance da aplicação e proporcionando uma experiência mais fluida para o usuário.

* **Utilização de TypeScript:**  
  **TypeScript** seria adotado para adicionar tipagem estática ao projeto, o que permitirá detectar erros em tempo de desenvolvimento, melhorar a auto-completação nos editores de código e facilitar a manutenção e escalabilidade do sistema a longo prazo.



## 🌐 Deploy

A API já está em produção. Você pode acessá-la [aqui]().
