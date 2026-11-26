# Coleção de filmes

Projeto final de Redes de Comunicação (Módulo 5).
Tema: os filmes mais bem avaliados.
Alunos: Alexandre Machado e Daniel Cadorme.

## API

Item de exemplo:

```json
{ "id": 1, "name": "The Shawshank Redemption", "genre": "Drama", "rating": 9.3 }
```

| Método | Rota | Recebe | Responde |
|--------|------|--------|----------|
| GET | /api/filmes | nada | 200 + array de filmes |
| POST | /api/filmes | `{ name, genre, rating }` | 201 + o filme criado (com `id`) |
| POST | /api/filmes | dados inválidos | 400 + `{ "error": "mensagem" }` |
| DELETE | /api/filmes/:id | nada (o id vai no URL) | 204 sem corpo |
| DELETE | /api/filmes/:id | id que não existe | 404 + `{ "error": "mensagem" }` |

Regras de validação do POST: `name` e `genre` obrigatórios; `rating` é um número ≥ 0.
Os `id` são gerados pelo server (maior id existente + 1).