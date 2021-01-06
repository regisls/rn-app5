import React, {Component} from 'react';
import {View, StatusBar, Image, StyleSheet, Text} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheServicos = require('../imgs/detalhe_servico.png');

class CenaServicos extends Component {
  render() {
    return (
      <View style={Estilos.cenaBackground}>
        <StatusBar backgroundColor="#19d1c8" />
        <BarraNavegacao voltar navigator={this.props.navigator} cor="#19d1c8" />
        <View style={Estilos.cabecalho}>
          <Image source={detalheServicos} />
          <Text style={Estilos.txtTitulo}>Serviços</Text>
        </View>
        <View style={Estilos.detalheServicos}>
          <Text style={Estilos.txtServico}>- Item 1</Text>
          <Text style={Estilos.txtServico}>- Item 2</Text>
          <Text style={Estilos.txtServico}>- Item 3</Text>
        </View>
      </View>
    );
  }
}

const Estilos = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20,
  },
  txtTitulo: {
    fontSize: 30,
    color: '#19d1c8',
    marginLeft: 10,
    marginTop: 25,
  },
  detalheServicos: {
    marginTop: 20,
    padding: 20,
  },
  txtServico: {
    fontSize: 18,
  },
  cenaBackground: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CenaServicos;
