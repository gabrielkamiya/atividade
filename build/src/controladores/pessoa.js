"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modelos_1 = require("../modelos");
class Pessoa {
    constructor() { }
    buscarTodos(req, res) {
        modelos_1.UsuarioModel.find()
            .then(usuarios => {
            res.send(usuarios);
        })
            .catch(error => {
            console.log(`Error: ${error}`);
            res.sendStatus(500);
        });
    }
    cadastrar(req, res) {
        const LABEL = 'Pessoa';
        const body = req.body;
        modelos_1.PessoaModel.create(body)
            .then((result) => {
            res.send(result);
            console.log("sucesso");
        })
            .catch(() => {
            res.sendStatus(500);
            console.log("erro");
        });
    }
}
exports.default = Pessoa;
