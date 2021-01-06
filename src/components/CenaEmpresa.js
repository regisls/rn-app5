import React, {Component} from 'react';
import {View, StatusBar, Image, StyleSheet, Text} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

class CenaEmpresa extends Component {
  render() {
    return (
      <View style={Estilos.cenaBackground}>
        <StatusBar backgroundColor="#ec7148" />
        <BarraNavegacao voltar navigator={this.props.navigator} cor="#ec7148" />
        <View style={Estilos.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={Estilos.txtTitulo}>A empresa</Text>
        </View>
        <View style={Estilos.detalheContatos}>
          <Text style={Estilos.txtEmpresa}>Bla bla bla Wiskas sache</Text>
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
    color: '#ec7148',
    marginLeft: 10,
    marginTop: 25,
  },
  detalheContatos: {
    marginTop: 20,
    padding: 20,
  },
  txtContato: {
    fontSize: 18,
  },
  cenaBackground: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CenaEmpresa;
