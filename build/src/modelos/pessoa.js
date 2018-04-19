"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.PessoaSchema = new mongoose_1.Schema({
    nome: { type: String, required: [true, 'Nome é obrigatório.'] },
    dataCriacao: { type: Date, default: Date.now },
    dataNascimento: { type: Date, required: [true, 'Data de Nascimento é obrigatória.'] },
    telefone: { type: Number, required: [true, 'Número de telefone é obrigatório.'] },
    nif: { type: Number, required: [true, 'Número no NIF obrigatório.'] },
    usuario: { type: mongoose_1.Schema.Types.ObjectId, required: [true, 'ID de usuário obrigatório.'] }
});
exports.PessoaModel = mongoose_1.model('Pessoa', exports.PessoaSchema);
