import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk';
import UsuariosNavegacao from './navegacao/UsuariosNavegacao';
import usuariosReducer from './store/usuarios-reducer'
import {init} from './helpers/db'

init()
  .then(() => {
    console.log("Base criada ou já existente!");
  })
  .catch((err) => {
    console.log("Erro ao criar o banco!");
    console.log(err);
  })

const rootReducer = combineReducers({
  usuarios: usuariosReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return <Provider store={store}>
        <UsuariosNavegacao />
        </Provider>
}
