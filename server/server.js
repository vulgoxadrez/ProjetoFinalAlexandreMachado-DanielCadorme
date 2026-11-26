import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Lê o caderno UMA vez, quando o server arranca
let filmes = JSON.parse(fs.readFileSync("./filmes.json", "utf-8"));

// Grava a lista atual no caderno
function save() {
  fs.writeFileSync("./filmes.json", JSON.stringify(filmes, null, 2));
}

// Quando alguém pede /api/filmes, responde com a lista
app.get("/api/filmes", (req, res) => {
  res.json(filmes);
});

// Liga a cozinha
app.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});