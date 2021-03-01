import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 123345678);
diretor.cadastrarSenha("123")
const gerente = new Gerente("Ricardo", 50000, 123123123);

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123");

const cliente = new Cliente("Lais", 123123123, "456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(clienteEstaLogado);