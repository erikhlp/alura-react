import React, { Component } from 'react';
import './estilo.css';

export class FormularioCadastro extends Component {
	constructor(props) {
		super(props);
		this.titulo = '';
		this.texto= '';
		this.data= '';
	}

	_handleMudancaTitulo(evento) {
		this.titulo = evento.target.value;
		evento.stopPropagation();
	}

	_handleMudancaTexto(evento) {
		this.texto = evento.target.value;
		evento.stopPropagation();
	}

	_handleMudancaData(evento) {
		this.data = evento.target.value;
		evento.stopPropagation();
	}

	_criarNota(evento) {
		evento.preventDefault();
		evento.stopPropagation();
		this.props.criarNota(this.titulo, this.texto, this.data);
	}

	render() {
		return (
			<form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
				<input type="text" placeholder="Título" className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)}/>
				<input type="date" placeholder="Data" className="form-cadastro_input" onChange={this._handleMudancaData.bind(this)}/>
				<textarea rows={15} placeholder="Escreva sua nota..." className="form-cadastro_input" onChange={this._handleMudancaTexto.bind(this)}/>
				<button 
				className="form-cadastro_input form-cadastro_submit">
					Criar nota
				</button>
			</form>
		);
	}
}
