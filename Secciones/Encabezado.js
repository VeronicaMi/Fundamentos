import React from 'react';
import {
    StyleSheet,
    Text, 
    View,
    Image,
    AsyncStorage,
    Alert
} from 'react-native';

export class Encabezado extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            loggedUser: false
        };
    }

    toggleUser = ()=>{
        if (this.state.isLoggedIn){
            AsyncStorage.setItem('UsuarioLogeado', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                });
                Alert.alert('Usuario deslogeado');
            })
        }
        else{
            this.props.navigate('LoginRT')
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('UsuarioLogeado', (err, result) =>{
            if(result === 'none'){
                console.log('NONE');
            }
            else if (result === null){
                AsyncStorage.setItem('UsuarioLogeado', 'none', (err, result) =>{
                    console.log('Set user to NONE');
                })
            }
            else{
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                });
            }
            
        })
    }

    render(){
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message;
        return(
            <View style = {styles.headStyle} >
                <Image
                    style={styles.logoStyle}
                    source={require('./img/ipn.png')}
                />
            <Text style={styles.headText} 
                    onPress={this.toggleUser}> {display} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headText:{
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 1
    },

    headStyle:{
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: '#35605a',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000'
    },

    logoStyle:{
        flex: 1,
        width: 50,
        height: 50,
    }
})