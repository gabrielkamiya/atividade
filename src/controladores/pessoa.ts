import * as Express from 'express';
import { PessoaModel, IPessoaModel, UsuarioModel, IUsuarioModel } from '../modelos';

export default class Pessoa {
  constructor() {}

  public buscarTodos(req: Express.Request, res: Express.Response) {
    UsuarioModel.find()
      .then(usuarios => {
        res.send(usuarios);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
      });
  }
}
