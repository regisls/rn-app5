import React, {Component} from 'react';
import {View, StatusBar, Image, StyleSheet, Text} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');

class CenaContatos extends Component {
  render() {
    return (
      <View style={Estilos.cenaBackground}>
        <StatusBar backgroundColor="#61bd8c" />
        <BarraNavegacao voltar navigator={this.props.navigator} cor="#61bd8c" />
        <View style={Estilos.cabecalho}>
          <Image source={detalheContatos} />
          <Text style={Estilos.txtTitulo}>Contatos</Text>
        </View>
        <View style={Estilos.detalheContatos}>
          <Text style={Estilos.txtContato}>Tel: (51) 9 9659-5215</Text>
          <Text>E-mail: regisls@regisls.net</Text>
          <Text>Site: regisls.net</Text>
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
    color: '#61bd8c',
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

export default CenaContatos;
