import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');

class BarraNavegacao extends Component {
  render() {
    if (this.props.voltar) {
      return (
        <View style={[Estilos.barraTitulo, {backgroundColor: this.props.cor}]}>
          <TouchableHighlight
            underlayColor={this.props.cor}
            activeOpacity={0.3}
            onPress={() => {
              this.props.navigator.pop();
            }}>
            <Image source={btnVoltar} />
          </TouchableHighlight>
          <Text style={Estilos.titulo}>ATM Consultoria</Text>
        </View>
      );
    } else {
      return (
        <View style={Estilos.barraTitulo}>
          <Text style={Estilos.titulo}>ATM Consultoria</Text>
        </View>
      );
    }
  }
}

const Estilos = {
  barraTitulo: {
    backgroundColor: '#ccc',
    padding: 10,
    height: 60,
    flexDirection: 'row',
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
  },
};

export default BarraNavegacao;
