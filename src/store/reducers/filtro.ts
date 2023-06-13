import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contato'

type FiltroState = {
  textoProcura?: string
  grupos: 'trabalho' | 'faculdade' | 'familia' | 'outros' | 'todos'
  valor?: enums.Grupo
}

const initialState: FiltroState = {
  textoProcura: '',
  grupos: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTextoProcura: (state, action: PayloadAction<string>) => {
      state.textoProcura = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.grupos = action.payload.grupos
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTextoProcura, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
