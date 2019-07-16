import React from 'react';
import {
    StyleSheet, 
    Text,
    View, 
    FlatList, 
    TouchableHighlight
} from 'react-native';
import { Cuestionario } from '../data/Cuestionario.js';
import { Preguntas } from '../Secciones/Preguntas.js';

export class Quiz extends React.Component {
    static navigationOptions = {
        Encabezado: null
    };

    constructor(props){
        super(props);
            this.state = {
                preCargada: false,
                puntajeTotal: 100,
                cuestiCompleto: false
            };
        }
    }
}