import { ADD_USUARIO, LISTA_USUARIOS } from "./usuarios-actions";
import Usuario from "../model/Usuario";


const estadoInicial = {
    usuarios: []
    
};

export default(estado = estadoInicial, action) => {
    switch(action.type)
    {
        case LISTA_USUARIOS:
            return {
                usuarios: action.usuarios.map(u => new Usuario(u.id.toString(), u.nome, u.telefone, u.imagemURI, u))
            }
        case ADD_USUARIO:
            const u = new Usuario(action.dadosUsuario.id.toString(), 
                                  action.dadosUsuario.nome, action.dadosUsuario.telefone, 
                                  action.dadosUsuario.imagemURI, action.dadosUsuario.latitude,
                                  action.dadosUsuario.longitude);
            return {
                usuarios: estado.usuarios.concat(u)
            }
            default:
                return estado;
    }
}