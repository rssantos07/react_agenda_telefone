import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contato'
import * as enums from '../../utils/enums/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      name: 'Rodrigo',
      phone: 11987654321,
      email: 'email1@example.com',
      github: 'github1',
      grupo: enums.Grupo.FACULDADE,
      id: 1
    },
    {
      name: 'Ana',
      phone: 18976543210,
      email: 'email2@example.com',
      github: 'github2',
      grupo: enums.Grupo.TRABALHO,
      id: 2
    },
    {
      name: 'João',
      phone: 21987654321,
      email: 'email3@example.com',
      github: 'github3',
      grupo: enums.Grupo.TRABALHO,
      id: 3
    },
    {
      name: 'Maria',
      phone: 13987654321,
      email: 'email4@example.com',
      github: 'github4',
      grupo: enums.Grupo.OUTROS,
      id: 4
    },
    {
      name: 'Pedro',
      phone: 11876543210,
      email: 'email5@example.com',
      github: 'github5',
      grupo: enums.Grupo.FAMILIA,
      id: 5
    }
  ]
}

const contatoSlice = createSlice({
  name: 'agenda',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
      const nomes = action.payload

      if (state.itens.find((contato) => contato.id === nomes.id)) {
        alert('item ja adicionado')
      } else {
        state.itens.push(nomes)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...(state.itens = state.itens.filter(
          (contato) => contato.id !== action.payload
        ))
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexData = state.itens.findIndex((c) => c.id === action.payload.id)
      if (indexData >= 0) {
        state.itens[indexData] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (contatoExiste) {
        alert('Contato já cadastrado')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, adicionar, editar, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
