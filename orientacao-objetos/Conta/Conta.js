//Classe Abstrata
export class Conta {
	constructor(tipo, saldoInicial, cliente, agencia) {
		if(this.constructor == Conta) {
			throw new Error("Não instanciar um objeto do tipo conta");
		}
		this._saldo = saldoInicial;
		this._cliente = cliente;
		this._agencia = agencia;
		this._tipo = tipo;
	}

	sacar(valor) {
		throw new Error("O método Sacar da conta é abstrato");
	}

	_sacar() { 
		const valorSacado = taxa * valor;
		if(this._saldo >= valorSacado) {
			this._saldo -= valorSacado;
			return valorSacado;
		}

		return 0;
	}

	depositar(valor) {
		if(valor <= 0) return;
		this._saldo += valor;
	}

	transferir(valor, conta) {
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}

}