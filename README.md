Conceitos do NodeJS

Crie uma aplicação do zero utilizando Express.

Essa aplicação será utilizada para armazenar projetos e suas tarefas.

Rotas

POST /projects: A rota deve receber id e title dentro corpo de cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] };

GET /projects: Rota que lista todos projetos e suas tarefas;

PUT /projects/🆔 A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;

DELETE /projects/🆔 A rota deve deletar o projeto com o id presente nos parâmetros da rota;

POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;
