import * as Server from "./config/servidor";
import * as Database from "./config/database";
import { getConfiguracaoServidor } from './config/config';
import * as App from "./src";

//Comentario de teste

console.log(`Running enviroment ${process.env.NODE_ENV || "dev"}`);

//Starting Application Server
const server = Server.init();

//Teste2 Repositorio

server.listen(getConfiguracaoServidor().porta, function () {
  Database.init();
  App.init(server);
});