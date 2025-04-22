import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8081;

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get("/", (req, res) => {
  res.send("Welcome to Homepage :)");
});

app.listen(PORT, () => {
  console.log(`The server is Running on Port ${PORT} 🚀`);
});
