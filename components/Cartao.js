import React from 'react';
import {View, StyleSheet} from 'react-native';
import Cores from '../cores/cores'

const Cartao = (props) => {
    return (
        <View style={{...estilos.cartao, ...props.estilos}}>
            {props.children}
        </View>
    )

};

const estilos = StyleSheet.create({
    cartao: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.32,
        backgroundColor: 'white',
        elevation: 8,
        padding: 12,
        borderRadius: 12,
        alignItems: 'center'
    }
});

export default Cartao;