import React, { Component } from 'react'
import CardNota from '../CardNota/CardNota'
import './estilo.css';

export class ListaDeNotas extends Component {
	render() {
		return(
			<ul className="lista-notas">
				{this.props.notas.map((nota, index) => {
					if (!nota.data) {
						return;
					}
					// this.props.notas.forEach(nota => {
					// 	console.log(nota.data);
					// });
					return(
						<li className="lista-notas_item" key={index}>
							<CardNota titulo={nota.titulo} texto={nota.texto} data={nota.data}></CardNota>
						</li>
					)
				})}
			</ul>
		);
	}
}

export default ListaDeNotas;