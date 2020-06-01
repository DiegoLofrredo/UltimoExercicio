import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Cores from '../cores/cores'

const Cabecalho = (props) => {
    return (
        <View style={estilos.cabecalho} backgroundColor={Cores.primary}>
            <Text 
                color={Cores.black}
                style={estilos.titulo}
            >{props.titulo}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    cabecalho: {
        width: '100%',
        height: 95,
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 22
    }
});

export default Cabecalho;