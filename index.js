const express = require("express");

const server = express();

server.use(express.json());

/**
 * Utilizamos a variável `numberOfRequests` como
 * `let` porque vai sofrer mutação. A variável
 * `projects` pode ser `const` porque um `array`
 * pode receber adições ou exclusões mesmo sendo
 * uma constante.
 */

const projects = [];
let numberOfRequests = 0;

/**
 * Middleware global que dá log no número de requisições
 */

server.use((req, res, next) => {
  numberOfRequests++;
  console.log("Número de requisições: ", numberOfRequests);
  return next();
});

/**
 * Middleware utilizando `function` que checa se o projeto existe
 */
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: "Project not found" });
  }

  return next();
}

/**
 * Projects
 */
server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    task: []
  };

  projects.push(project);

  return res.json(projects);
});

server.put("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

/**
 * Tasks
 */

server.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.task.push(title);

  return res.json(project);
});

server.listen(3000);
