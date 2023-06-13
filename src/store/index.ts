import { configureStore } from '@reduxjs/toolkit'
import ContatoReducer from './reducers/contato'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    contatos: ContatoReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
