import React from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';

export class Hero extends React.Component{
    render(){
        return (
            <Image 
                style ={styles.heroImagen}
                source = {require('./img/GatitoChupon.jpg')}    
            />
        );
    }
}

const styles = StyleSheet.create({
    heroImagen:{
        width: undefined,
        height: undefined,
        flex:8,
    }
});