import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert
} from 'react-native';
import { Encabezado} from '../Secciones/Encabezado.js';
import { StackNavigator} from 'react-navigation';

export class Contacto extends React.Component {
    static navigationOptions = {
        Encabezado: null
    };

    constructor (props) {
        super(props);
        this.state = { 
            msg: 'Entrada de Mensaje',
            nombre: 'Inserta el nombre',
            email: 'Ingresa tu email'
        }
    }

    clearFields = ()=> this.setState({nombre: '', msg: '', email: '' });

    sendMessage = ()=> {
        Alert.alert(this.state.nombre, this.state.msg);
        this.props.navigation.goBack();
    }

    render(){
        return (
            <View style={styles.container}>
                <Encabezado message = 'Presionaste el login' />
                <Text style={styles.heading}>Contactame</Text>
                
                <TextInput 
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({nombre: text})}
                    value={this.state.nombre}
                />

                <TextInput
                    style={styles.multiInput}
                    onChangeText={(text) => this.setState({msg: text})}
                    value={this.state.msg}
                    multiline = {true}
                    numberOfLines = {4}
                />

                <TextInput 
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                />

                <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Presionaste para enviar
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Borrar forma
                    </Text>
                </TouchableHighlight>


            </View> 
        );
    }
}; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%'
    },

    heading:{
        fontSize: 16,
        flex: 1
    },

    inputs:{
        flex:1,
        width: '80%',
        padding: 10
    },

    multiInput:{
        flex: 2,
        width: '90%',
        paddingTop: 20
    },

    buttons:{
        marginTop: 15,
        fontSize: 16
    }
});