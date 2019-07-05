import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Encabezado } from '../Secciones/Encabezado';

export class Principal extends React.Component {
  render(){
    return (
      <View style={styles.container}> 
         <Encabezado message = 'Presiona el login' />
        <Text style={{flex:8}}>Open up App.js to start working on your app!</Text>
        <Text style={{flex:6}}>Segunda prueba de texto</Text>
       
      </View>
    );
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});