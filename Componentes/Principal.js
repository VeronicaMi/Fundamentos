import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Encabezado } from '../Secciones/Encabezado';
import { Hero } from '../Secciones/Hero.js';
import { Menu } from '../Secciones/Menu.js';
import { StackNavigator } from 'react-navigation';

export class Principal extends React.Component {

  static navigationOptions = {
    Encabezado: null
  };

  render(){
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}> 
        <Encabezado navigate = {navigate} message = 'Presiona el login' />
        <Hero />
        <Menu navigate = {navigate} />       
      </View>
    );
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});