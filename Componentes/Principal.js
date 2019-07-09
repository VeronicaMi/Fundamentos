import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Encabezado } from '../Secciones/Encabezado';
import { Hero } from '../Secciones/Hero.js';
import { Menu } from '../Secciones/Menu.js';

export class Principal extends React.Component {
  render(){
    return (
      <View style={styles.container}> 
        <Encabezado message = 'Presiona el login' />
        <Hero />
        <Menu />       
      </View>
    );
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});