import express, { Request, RequestHandler } from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

morgan.token("body", (req) => {
  const request = req as Request;
  return JSON.stringify(request.body);
});

app.use(express.json());
app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body"),
);

interface Person {
  id: string;
  name: string;
  number: string;
}

let persons: Person[] = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const generateId = () => {
  const maxId =
    persons.length > 0 ? Math.max(...persons.map((n) => Number(n.id))) : 0;
  return String(maxId + 1);
};

const postPersonHandler: RequestHandler<{}, {}, Person> = (
  request,
  response,
) => {
  const body = request.body;
  const exists = persons.find((person) => person.name === body.name);

  if (!body.name || !body.number) {
    response.status(400).json({ error: "Information missing" });
    return;
  } else if (exists) {
    response.status(400).json({ error: "Name must be unique" });
    return;
  } else {
    const person: Person = {
      id: generateId(),
      name: body.name,
      number: body.number,
    };

    persons = persons.concat(person);

    response.json(person);
  }
};

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.get("/info", (request, response) => {
  response.send(`<p>Phonebook has info for ${persons.length} people</p>
<p>${Date()}</p>`);
});

app.post("/api/persons", postPersonHandler);

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
