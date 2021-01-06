import React, {Component} from 'react';
import {View, StatusBar, Image, StyleSheet, Text} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente2.png');
const cliente2 = require('../imgs/cliente1.png');

class CenaClientes extends Component {
  render() {
    return (
      <View style={Estilos.cenaBackground}>
        <StatusBar backgroundColor="#b9c941" />
        <BarraNavegacao voltar navigator={this.props.navigator} cor="#b9c941" />
        <View style={Estilos.cabecalho}>
          <Image source={detalheClientes} />
          <Text style={Estilos.txtTitulo}>Nossos clientes</Text>
        </View>
        <View style={Estilos.detalheClientes}>
          <Image source={cliente1} />
          <Text style={Estilos.txtDetalheCliente}>Um adf adf adf </Text>
        </View>
        <View style={Estilos.detalheClientes}>
          <Image source={cliente2} />
          <Text style={Estilos.txtDetalheCliente}>Outro adf adf adf adf</Text>
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
    color: '#b9c941',
    marginLeft: 10,
    marginTop: 25,
  },
  detalheClientes: {
    marginTop: 20,
    padding: 20,
  },
  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20,
  },
  cenaBackground: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CenaClientes;
