import { verificarConexao } from "./infrastructure/mysql";
import { port } from './config/env.js'
import app from "./app.js";

verificarConexao()
    .then(() => app.listen(port, () => console.log(`GT Store API disponivel em: https://localhost:${port}`)))
    .catch((error) => {
        console.log(`Não foi possivel iniciar a API`, error);
        process.exitCode = 1;
    });