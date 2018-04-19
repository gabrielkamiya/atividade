"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.UsuarioSchema = new mongoose_1.Schema({
    email: { type: String, required: [true, 'E-mail é obrigatório.'] },
    senha: { type: String, required: [true, 'Senha é obrigatória.'] },
    dataCriacao: { type: Date, default: Date.now }
});
exports.UsuarioModel = mongoose_1.model('Usuario', exports.UsuarioSchema);
