import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList, Keyboard, Platform} from 'react-native';
import UsuarioInput from '../components/UsuarioInput';
import UsuarioItem from '../components/UsuarioItem';
import * as usuariosActions from '../store/usuarios-actions'
import {useSelector, useDispatch} from 'react-redux'

const TelaCadastro = (props) => {

    const usuarios = useSelector(estado => estado.usuarios.usuarios);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(usuariosActions.buscarUsuario())
    }, [dispatch]);

    return (
        <View style={estilos.tela}>
            <UsuarioInput/>
            <FlatList
            data={usuarios}
            keyExtractor={usuario=>usuario.id}
            renderItem={
                usuario => (
                <UsuarioItem
                    nome={usuario.item.nome}
                    telefone={usuario.item.telefone}
                    
                    onSelect={
                        () => {props.navigation.navigate("DetalheDoUsuario", 
                            {
                                nome: usuario.item.nome, 
                                telefone: usuario.item.telefone,
                                imagem: usuario.item.imagemURI,
                                latitude: usuario.item.latitude,
                                longitude: usuario.item.longitude
                            })}
                    }
                    imagem={null}
                />
                )          
            }
            />
        </View>
    );
}

TelaCadastro.navigationOptions = dadosNav => {
    return {
        headerTitle: "Cadastro Usuario"
    }
}

const estilos = StyleSheet.create({
    tela: {
        padding: 25,
    }
})

export default TelaCadastro;