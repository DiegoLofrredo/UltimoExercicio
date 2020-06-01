import * as FileSystem from 'expo-file-system';
import { inserirUsuario, buscarUsuarios } from '../helpers/db';

export const ADD_USUARIO = 'ADD_USUARIO';
export const LISTA_USUARIOS = "LISTA_USUARIOS";

export const buscarUsuario = () => {
    return async dispatch => {
        try{
            const resultadoDB = await buscarUsuarios();
            dispatch({type: LISTA_USUARIOS, usuarios: resultadoDB.rows._array})
        }catch(err){
            console.log(err);
            throw err;
        }
    }
}

export const addUsuario = (nome, telefone, imagemURI, latitude, longitude) => {
    return async dispatch => {
        const nomeArquivo = imagemURI.split("/").pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        try{
            await FileSystem.moveAsync({
                from:imagemURI,
                to: novoPath
            })
            const resultadoDB = await inserirUsuario(
                nome,
                telefone,
                novoPath,
                latitude,
                longitude
            )
            console.log("Aqui")
            console.log(resultadoDB);
            dispatch({type: ADD_USUARIO, dadosUsuario: {id: resultadoDB.insertId, nome: nome, telefone: telefone, imagemURI: novoPath, latitude: latitude, longitude: longitude}})
        }catch(err){
            console.log(err);
            throw err;
        }
    }
}

//type: ADD_USUARIO, dadosUsuario: {nome: nome, telefone: telefone, imagemURI: imagemURI} 