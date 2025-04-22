import express from "express";
const app = express();
app.use(express.json());

const PORT = 8000;

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get("/", (req, res) => {
  res.send("Welcome to Homepage :)");
});

app.listen(PORT,'0.0.0.0', () => {
  console.log(`The server is Running on Port ${PORT} 🚀`);
});
