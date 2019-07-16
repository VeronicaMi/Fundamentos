import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export class Preguntas extends React.Component{
    static navigationOptions = {
        Encabezado: null
    };

    constructor(props){
        super(props);
        this.state = {
            seleccionado: false,
            correcto: false
        }
    }

    eligePregunta = (ans) =>{
        let worth = 20;
        if(ans === this.props.eligePregunta){
            this.setState({
                seleccionado: true,
                correcto: true
            });
            this.props.puntajeActualizado(0);
        }
        else{
            this.setState({
                seleccionado: true
            });
            this.props.puntajeActualizado(worth);
        }
    }

    render() {
        return(
            <View style={styles.container}>
                {!this.state.seleccionado &&(
                    <View style={styles.container}>
                        <Text style={styles.preguntasText}>{this.props.pregunta} </Text>
                        
                        <TouchableHighlight underlayColor='#d3d3d3' onPress={() => this.eligeRespuesta('respuesta1')}>
                            <Text style ={styles.respuestaText}>{this.props.respuesta1} </Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor='#d3d3d3' onPress={() => this.eligeRespuesta('respuesta2')}>
                            <Text style ={styles.respuestaText}>{this.props.respuesta2} </Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor='#d3d3d3' onPress={() => this.eligeRespuesta('respuesta3')}>
                            <Text style ={styles.respuestaText}>{this.props.respuesta3} </Text>
                        </TouchableHighlight>
                        
                        <TouchableHighlight underlayColor='#d3d3d3' onPress={() => this.eligeRespuesta('respuesta4')}>
                            <Text style ={styles.respuestaText}>{this.props.respuesta4} </Text>
                        </TouchableHighlight>

                    </View>
                )}
                { this.state.seleccionado && this.state.correcto && (
                    <View style = {styles.correctContainer}>
                        <Text style={styles.preguntasText}>{this.props.pregunta}</Text>
                        <Text style={styles.respuestaText}>{this.props.respuesta1}</Text>
                        <Text style={styles.respuestaText}>{this.props.respuesta2}</Text>
                        <Text style={styles.respuestaText}>{this.props.respuesta3}</Text>
                        <Text style={styles.respuestaText}>{this.props.respuesta4}</Text>
                        <Text style={styles.respuestaText}>CORRECTO</Text>
                    </View>   
                )}
                { this.state.seleccionado && !this.state.correcto && (
                    <View style = {styles.wrongContainer}>
                        <Text style={styles.preguntasText}>{this.props.pregunta}</Text>
                        <Text style={styles.respuestaText}>{this.props.respuesta1}</Text>
                        <Text style={styles.respuestaText}>{this.props.respuesta2}</Text>
                        <Text style={styles.respuestaText}>{this.props.respuesta3}</Text>
                        <Text style={styles.respuestaText}>{this.props.respuesta4}</Text>
                        <Text style={styles.respuestaText}>INCORRECTO</Text>
                    </View>   
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    correctContainer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#008000'
    },
    wrongContainer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#ff0000'
    },
    preguntasText: {
        flex: 2,
        padding: 15,
        fontSize: 20
    },
    respuestaText: {
        flex: 2,
        padding: 15,
        fontSize: 20,
        textAlign: 'center'
    },
});