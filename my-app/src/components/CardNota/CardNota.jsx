import React, { Component } from 'react';
import './estilo.css';

class CardNota extends Component {
	render() { 
		return ( 
			<section className="card-nota">
				<header className="card-nota_cabecalho">
				<p className="card-nota_data" id={this.props.data}>{this.props.data}</p>
				<h3 className="card-nota_titulo">{this.props.titulo}</h3>
				<p className="card-nota_texto">{this.props.texto}</p>
				</header>
			</section>
		);
	}
}
 
export default CardNota;