import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage
} from 'react-native';

export class Registro extends React.Component {
    
    static navigationOptions = {
        Encabezado: null
    };

    constructor(props) {
        super(props);
        this.state = {
            NombreUsuario: '',
            Password: '',
            ConfirmacionPassword: ''
        };
    };

    cancelRegister = () =>{
        Alert.alert('Registro cancelado');
        this.props.navigation.navigate('PrincipalRT');
    };

    registerAccount = () =>{
        if( !this.state.NombreUsuario){
            Alert.alert('Ingresa tu usuario')
        }
        else if(this.state.Password !== this.state.ConfirmacionPassword){
            Alert.alert('No coinciden las contraseas')
        }
        else{
            AsyncStorage.getItem(this.state.NombreUsuario, (err, result) => {
                if (result !== null){
                    Alert.alert(`${this.state.NombreUsuario} Ya existe `);
                }
                else{
                    AsyncStorage.setItem(this.state.NombreUsuario, this.state.Password, (err, result) =>{
                        Alert.alert(`${this.state.NombreUsuario} Cuenta creada`);
                        this.props.navigation.navigate('PrincipalRT');
                    });
                }
            });
        }
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.heading}>Cuenta Registrada</Text>

                <TextInput 
                    style = {styles.inputs}
                    onChangeText = {(text) => this.setState({NombreUsuario: text})}
                    value = {this.state.NombreUsuario}
                />

                <Text style = {styles.label}>Ingresa tu nombre de usuario</Text>

                <TextInput 
                    style = {styles.inputs}
                    onChangeText = {(text) => this.setState({Password: text})}
                    value = {this.state.Password}
                    secureTextEntry = {true}
                />

                <Text style = {styles.label}>Ingresa tu contraseña</Text>

                <TextInput 
                    style = {styles.inputs}
                    onChangeText = {(text) => this.setState({ConfirmacionPassword: text})}
                    value = {this.state.ConfirmacionPassword}
                    secureTextEntry = {true}
                />

                <Text style = {styles.label}>Confirma tu contraseña</Text>

                <TouchableHighlight onPress = {this.registerAccount} underlayColor = '#26D9E0'>
                    <Text style = {styles.buttons}>
                        Registrar
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress = {this.cancelRegister} underlayColor = '#26D9E0'>
                    <Text style = {styles.buttons}>
                        Cancelar
                    </Text>
                </TouchableHighlight>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },

    heading:{
        fontSize: 16,
        flex: 1
    },

    inputs: {
        flex: 1,
        width: '80%',
        padding: 10
    },

    buttons:{
        marginTop: 15,
        fontSize: 16
    },

    labels: {
        paddingBottom: 10
    }
});