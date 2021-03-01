import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Érikh", 11233112);
const cliente2 = new Cliente("Joca", 321321321);
const contaCorrente1 = new ContaCorrente(cliente1, 101);
const contaCorrente2 = new ContaCorrente(cliente2, 102);

contaCorrente1.depositar(100);
contaCorrente1.sacar(10); 

contaCorrente2.depositar(100);
contaCorrente2.transferir(60, contaCorrente1);

//Console para testes
console.log(ContaCorrente.numeroDeContas);
console.log(cliente2);