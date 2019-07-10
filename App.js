import React from 'react';
import { Principal } from './Componentes/Principal.js';
import { Contacto } from './Componentes/Contacto.js';
import { StackNavigator } from 'react-navigation';

const Rutas = StackNavigator({
  PrincipalRT: {
    screen: Principal
  },

  ContactoRT:{
    screen: Contacto
  },
},
  {
    initialRouteName: 'PrincipalRT'
  }
);

export default class App extends React.Component {
  render(){
      return (
        <Rutas />
    );
  }
}

