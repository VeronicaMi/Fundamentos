import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export class Finish extends React.Component {
    static navigationOptions = {
        Encabezado: null
    };

    exitQuiz = ()=> {
        this.props.navigation.navigate('HomeRT');
    }

    render() {
        let userScore = this.props.navigation.getParam('score', 'Error - Sin puntaje');
        let questionMissed = this.props.navigation.getParam('Perdida', 'Error - Ninguna pregunta perdida');
        let totalPreguntas = this.props.navigation.getParam('Preguntas', 'Error - Ninguna pregunta');

        return(
            <View style={styles.container}>
                <Text>El puntaje de tu cuestionario fue {userScore}</Text>
                <Text>Te equivocaste en {questionMissed} de {totalPreguntas} preguntas</Text>

                <TouchableHighlight onPress={this.exitQuiz} style={styles.button}>
                    <Text>Terminaste el cuestionario</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%'
    },
});