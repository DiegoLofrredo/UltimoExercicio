import React, {useState} from 'react';
import {View, Text, Button, ActivityIndicator, Alert, StyleSheet} from 'react-native';
import Cores from '../cores/cores';
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import PreviewDoMapa from '../components/PreviewDoMapa'

const CapturarLocalizacao = (props) => {

    const [estaCapturando, setEstaCapturando] = useState(false);
    const [localizacaoSelecionada, setLocalizacaoSelecionada] = useState();


    const verificarPermissoes = async () => {
        const resultado = await Permissions.askAsync(Permissions.LOCATION);
        if(resultado.status !== "granted"){
            Alert.alert(
                "Sem permissão para uso da localização",
                "É necessário liberar o acesso da localização",
                [{text: "OK"}]
            )
            return false;
        }
        return true;
    }

    const capturarLocalizacao = async () => {
        const temPermissao = await verificarPermissoes();
        if(temPermissao){
            setEstaCapturando(true);
            try{
                const localizacao = await Location.getCurrentPositionAsync({
                    timeout: 8000
                })
                setLocalizacaoSelecionada({
                    lat: localizacao.coords.latitude,
                    lng: localizacao.coords.longitude
                })
                props.onCapturaLatLng(localizacao.coords.latitude, localizacao.coords.longitude)
            }catch(err){
                console.log(err)
                Alert.alert(
                    "Erro na localização",
                    "Tente novamente mais tarde",
                    [{text: "OK"}]
                )
            }
            setEstaCapturando(false);
        }
    }

    return (
        <View style={estilos.capturarLocalizacao}>
            <PreviewDoMapa 
                style={estilos.previewDoMapa}
                localizacao={localizacaoSelecionada}
            >
                {
                    estaCapturando ?
                    <ActivityIndicator
                        size="large"
                        color={Cores.primary}
                    />
                    :
                    <Text> Nenhuma localizacao </Text>
                }
            </PreviewDoMapa>
            <Button 
                title="Obter Localizacao"
                color={Cores.primary}
                onPress={capturarLocalizacao}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    capturarLocalizacao: {
        marginBottom: 15,
    },
    previewDoMapa: {
        marginBottom: 10,
        width: '100%',
        height: 100,
        borderColor: '#DDD',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CapturarLocalizacao;