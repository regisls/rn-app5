import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

class CenaPrincipal extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#ccc" />
        <BarraNavegacao />
        <View style={Estilos.logo}>
          <Image source={logo} />
        </View>
        <View style={Estilos.menu}>
          <View style={Estilos.menuGrupo}>
            <TouchableHighlight
              underlayColor={'#b9c941'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({id: 'clientes'});
              }}>
              <Image style={Estilos.imgMenu} source={menuCliente} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'#61bd8c'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({id: 'contatos'});
              }}>
              <Image style={Estilos.imgMenu} source={menuContato} />
            </TouchableHighlight>
          </View>
          <View style={Estilos.menuGrupo}>
            <TouchableHighlight
              underlayColor={'#ec7148'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({id: 'empresa'});
              }}>
              <Image style={Estilos.imgMenu} source={menuEmpresa} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'#19d1c8'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({id: 'servicos'});
              }}>
              <Image style={Estilos.imgMenu} source={menuServico} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const Estilos = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  menu: {
    alignItems: 'center',
  },
  menuGrupo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imgMenu: {
    margin: 15,
  },
});

export default CenaPrincipal;
