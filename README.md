# Pstore-API

Uma aplicação feita em NodeJS + Express.js para armazenar projetos e suas tarefas

### Rotas

- `POST /projects`: Rota que cadastrar um novo projeto no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`;

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: Rota que altera apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota receber um campo `title` e armazena uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;


### Middlewares

- checkProjectExists - Verifica se o projeto com certo ID existe. 

- Middleware global que conta todas as requisições.

