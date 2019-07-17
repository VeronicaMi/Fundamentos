import React from 'react';
import { Principal } from './Componentes/Principal.js';
import { Contacto } from './Componentes/Contacto.js';
import { StackNavigator } from 'react-navigation';

import { Registro } from './Componentes/Registro.js';
import { Login } from './Componentes/Login.js';
import { Quiz } from './Componentes/Quiz.js';
import { Finish } from './Componentes/QuizFinish.js';

const Rutas = StackNavigator({
  PrincipalRT: {
    screen: Principal
  },

  ContactoRT:{
    screen: Contacto
  },
  RegistroRT:{
    screen: Registro
  },
  LoginRT:{
    screen : Login
  },
  QuizRT:{
    screen: Quiz
  },
  FinishRT:{
    screen: Finish
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

