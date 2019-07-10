import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity, 
    Text, 
    Alert
} from 'react-native';
import { Contacto } from '../Componentes/Contacto.js';

export class Menu extends React.Component{
    onPress = ()=>{
        Alert.alert('Tocaste el botón');
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>LECCIONES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>REGISTRO</Text>
                    </TouchableOpacity>
                </View>
                   
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>BLOG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('ContactoRT')}>
                        <Text style={styles.buttonText}>CONTACTO</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 6,
        backgroundColor: '#35605a',
    },

    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1
    },

    buttonStyles:{
        backgroundColor: '#35605a',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText:{
        color: '#ffffff',
        fontSize: 18
    },
});