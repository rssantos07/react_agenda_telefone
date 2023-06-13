import { useDispatch, useSelector } from 'react-redux'
import FiltroContato from '../../components/FiltroContato'
import { useNavigate } from 'react-router-dom'
import { Botao, Campo } from '../../styles'
import * as enums from '../../utils/enums/Contato'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTextoProcura } from '../../store/reducers/filtro'

type Props = {
  mostrarFiltros: boolean
}

const Lateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { textoProcura } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              placeholder="Buscar"
              value={textoProcura}
              onChange={(evento) =>
                dispatch(alteraTextoProcura(evento.target.value))
              }
            />
            <S.Filtros>
              <FiltroContato legenda="familia" grupos={enums.Grupo.FAMILIA} />
              <FiltroContato legenda="trabalho" grupos={enums.Grupo.TRABALHO} />
              <FiltroContato
                legenda="faculdade"
                grupos={enums.Grupo.FACULDADE}
              />
              <FiltroContato legenda="outros" grupos={enums.Grupo.OUTROS} />
              <FiltroContato legenda="todos" grupos="todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao type="button" onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default Lateral
