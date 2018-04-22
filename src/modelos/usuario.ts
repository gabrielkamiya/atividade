import { Schema, Document, model } from 'mongoose';

export interface IUsuarioModel extends Document {
  email: string;
  senha: string;
  dataCriacao?: Date;
}

export const UsuarioSchema = new Schema({
  email: { type: String, required: [true, 'E-mail é obrigatório.'] },
  senha: { type: String, required: [true, 'Senha é obrigatória.'] },
  dataCriacao: { type: Date, default: Date.now }
});

export const UsuarioModel = model<IUsuarioModel>('Usuario', UsuarioSchema);