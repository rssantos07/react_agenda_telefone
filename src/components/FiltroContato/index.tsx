import { RootReducer } from '../../store'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'

export type Props = {
  legenda: string
  grupos: 'trabalho' | 'faculdade' | 'familia' | 'outros' | 'todos'
}

const FiltroContato = ({ legenda, grupos }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const contarGrupos = () => {
    if (grupos === 'todos') return contatos.itens.length
    if (grupos === 'trabalho') {
      return contatos.itens.filter((item) => item.grupo === grupos).length
    }
    if (grupos === 'faculdade') {
      return contatos.itens.filter((item) => item.grupo === grupos).length
    }
    if (grupos === 'familia') {
      return contatos.itens.filter((item) => item.grupo === grupos).length
    }
    if (grupos === 'outros') {
      return contatos.itens.filter((item) => item.grupo === grupos).length
    }
  }

  const verificaAtivo = () => {
    const mesmoGrupo = filtro.grupos === grupos
    return mesmoGrupo
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        grupos
      })
    )
  }
  const ativo = verificaAtivo()
  const contador = contarGrupos()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroContato
