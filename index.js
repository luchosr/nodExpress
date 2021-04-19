const http = require("http");

let notes = [
  {
    id: 1,
    content: "hola soy una nota muy copada",
    date: "lunes, 19 de abril de 2021",
    important: true,
  },
  {
    id: 2,
    content: "hola soy una nota frivola",
    date: "lunes, 19 de abril de 2021",
    important: true,
  },
  {
    id: 3,
    content: "hola soy una nota",
    date: "lunes, 19 de abril de 2021",
    important: true,
  },
  {
    id: 4,
    content: "hola soy una nota",
    date: "lunes, 19 de abril de 2021",
    important: true,
  },
];

const app = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(notes));
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
