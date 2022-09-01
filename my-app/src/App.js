import React, { Component } from 'react';
import {FormularioCadastro} from './components/FormularioCadastro/FormularioCadastro';
import {ListaDeNotas} from './components/ListaDeNotas/ListaDeNotas'
import './assets/App.css';
import './assets/index.css';

class App extends Component {

  constructor() {
    super();
    this.state = {notas: []};
  }

  criarNota(titulo, texto, data) {
    const novaNota = {titulo, texto, data};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado);
  }

  render() {
    document.title = 'Timeline';
    console.log("render");
    //
    var list, i, switching, b, shouldSwitch;
    list = document.querySelector(".lista-notas");
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("LI");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }

}

export default App;
