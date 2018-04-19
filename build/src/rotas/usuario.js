"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("../controladores/pessoa");
function default_1(server) {
    const usuarioControlador = new pessoa_1.default();
    server.get('/usuarios', usuarioControlador.buscarTodos);
    server.post('/salvarusuarios', usuarioControlador.cadastrar);
}
exports.default = default_1;
