import * as Express from "express";
import UsuarioControlador from '../controladores/pessoa';

export default function (server: Express.Application) {
  const usuarioControlador = new UsuarioControlador();
  server.get('/usuarios', usuarioControlador.buscarTodos);
  server.post('/salvarusuarios', usuarioControlador.cadastrar);
}