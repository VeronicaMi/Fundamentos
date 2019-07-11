import React from 'react-native';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage
} from 'react-native';

export class Login extends React.Component {
    static navigationOptions = {
        Encabezado: null
    };

    constructor(props) {
        super(props);
        this.state = {
            NombreUsuario: '',
            Password: ''
        };
    }; 

    cancelLogin = ()=>{
        Alert.alert('Login cancelado');
        this.props.navigation.navigate('PrincipalRT');
    };

    loginUser = ()=>{
        if( !this.state.NombreUsuario){
            Alert.alert('Porfavor ingresa un nombre de usuario')
        }
        else if( !this.state.Password){
            Alert.alert('Porfavor ingresa una contraseña')
        }
        else {
            AsyncStorage.getItem('UsuarioLoggeado', (err, result) =>{
                if (result !== 'none'){
                    Alert.alert('Alguien ya esta loggeado');
                    this.props.navigation.navigate('PrincipalRT');
                }
                else{
                    AsyncStorage.getItem(this.state.NombreUsuario, (err, result) =>{
                        if (result !== null){
                            if(result !== this.state.Password){
                                Alert.alert('Contraseña incorrecta')
                            }
                            else {
                                AsyncStorage.setItem('UsuarioLoggeado', this.state.NombreUsuario, (err, result) =>{
                                    Alert.alert(`${this.state.NombreUsuario} Loggeado`);
                                    this.props.navigation.navigate('PrincipalRT');
                                });
                            }
                        }
                        else{
                            Alert.alert(`Ninguna cuenta para ${this.state.NombreUsuario}`);
                        }
                    })
                }
            })
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>

                <TextInput 
                    style = {styles.inputs}
                    onChangeText = {(text) => this.setState({NombreUsuario: text})}
                    value = {this.state.NombreUsuario}
                />

                <Text style={styles.label}>Enter NombreUsuario</Text>

                <TextInput 
                    style = {styles.inputs}
                    onChangeText = {(text) => this.setState({Password: text})}
                    value = {this.state.Password}
                    secureTextEntry = {true}
                />

                <Text style={styles.label}>Enter Password</Text>

                <TouchableHighlight onPress = {this.loginUser} underlayColor = '#007D2D'>
                    <Text style = {styles.buttons}>
                        Login
                    </Text>    
                </TouchableHighlight>

                <TouchableHighlight onPress = {this.cancelLogin} underlayColor = '#007D2D'>
                    <Text style = {styles.buttons}>
                        cancelado
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