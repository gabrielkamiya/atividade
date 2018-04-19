import { Schema, Document, model } from 'mongoose';

export interface IPessoaModel extends Document {
  nome: string;
  dataCriacao: Date;
  dataNascimento: Date;
  telefone: number;
  nif: number;
  usuario: Schema.Types.ObjectId;
}

export const PessoaSchema = new Schema({
  nome: { type: String, required: [true, 'Nome é obrigatório.'] },
  dataCriacao: { type: Date, default: Date.now },
  dataNascimento: { type: Date, required: [true, 'Data de Nascimento é obrigatória.']},
  telefone: { type: Number, required: [true, 'Número de telefone é obrigatório.']},
  nif: { type: Number, required: [true, 'Número no NIF obrigatório.']},
  usuario: { type: Schema.Types.ObjectId, required: [true, 'ID de usuário obrigatório.']}
});

export const PessoaModel = model<IPessoaModel>('Pessoa', PessoaSchema);