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

  public cadastrar(req: Express.Request, res: Express.Response): void {
    const LABEL: string = 'Pessoa';
    const body: any = req.body;
    
    PessoaModel.create(body)
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


