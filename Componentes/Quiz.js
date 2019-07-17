import React from 'react';
import {
    StyleSheet, 
    Text,
    View, 
    FlatList, 
    TouchableHighlight
} from 'react-native';
import { Cuestionario, QuizData } from '../data/Cuestionario.js';
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

    componentDidMount(){
        let numPreguntas = Array.from(QuizData.preguntas).length
        this.setState({
            listaPreguntas: Array.from(QuizData.preguntas),
            pregunCargadas: true,
            numDePreguntas: numPreguntas,
            incorrect: 0,
            pregunRespuestas: 0
        });
    }

    updateScore =(penalty)=>{
        let tempScore = this.state.puntajeTotal;
        let missed = this.state.incorrect;
        let preguTotal = this.state.numDePreguntas;
        let preguDone = this.state.pregunRespuestas;

        let newScore = tempScore - penalty;
        let totalRespuesta = preguDone + 1;
        let totalMissed = penalty ? missed + 1 : missed;

        this.setState({
            puntajeTotal: newScore,
            incorrect: totalMissed,
            pregunRespuestas: totalRespuesta
        })

        if (totalRespuesta === preguTotal){
            this.setState({
                completeQuiz: true
            })
        }
    }

    finishQuiz=()=>{
        this.props.navigation.navigate(
            'FinishRT', {
                score: this.state.totalRespuesta,
                missed: this.state.incorrect,
                preguntas: this.state.numDePreguntas
            }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                { this.state.questLoaded && (
                    <FlatList
                        data = {this.state.questList}
                        renderItem = {({item}) =>
                            <Question 
                                question = {item.question}
                                answer1 = {item.answer1}
                                answer2 = {item.answer2}
                                answer3 = {item.answer3}
                                answer4 = {item.answer4}
                                correctAnswer = {item.correctAnswer}
                                scoreUpdate = {this.updateScore}
                            />   
                        }
                    />
                )}

                { !this.state.completeQuiz && (
                    <TouchableHighlight style={styles.disabled}> 
                        <Text> Respondiste todas las preguntas </Text>
                    </TouchableHighlight>
                )}
                
                { !this.state.completeQuiz && (
                    <TouchableHighlight onPress={this.finishQuiz} style={styles.enabled}> 
                        <Text> Terminado </Text>
                    </TouchableHighlight>
                )}

                { !this.state.questLoaded && (
                    <Text>CARGANDO</Text>
                )}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },

    disabled: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3d3d3',
        height: '10%'
    },

    enabled: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#90ee90',
        height: '10%'
    },
});
