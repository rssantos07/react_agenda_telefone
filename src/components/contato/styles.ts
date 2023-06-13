import styled from 'styled-components'
import { Botao } from '../../styles'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'

export type GrupoProps = {
  grupo: enums.Grupo
}
function retornaCordeFundo(props: GrupoProps): string {
  if ('grupo' in props) {
    if (props.grupo === enums.Grupo.FACULDADE) return variaveis.amarelo
    if (props.grupo === enums.Grupo.TRABALHO) return variaveis.amarelo2
    if (props.grupo === enums.Grupo.FAMILIA) return variaveis.cinza
    if (props.grupo === enums.Grupo.OUTROS) return variaveis.azulEscuro
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #95add0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin: 32px 0;
  border-radius: 16px;

  input {
    margin-right: 8px;
  }
  label {
    display: flex;
    align-itens: center;
    margin-bottom: 16px;
    font-weight: bold;
    white-space: nowrap;
  }
`
export const NomeGrupo = styled.h3`
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  align-itens: center;
`

export const Entrada = styled.input`
  margin-right: 14px;
  max-width: 100%;
  width: 100%;
`

export const Grupo = styled.span<GrupoProps>`
  padding: 4px 8px;
  font-size: 10px;
  color: #fff;
  font-weigth: bold;
  background-color: ${(props) => retornaCordeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  margin-left: 8px;
  display: inline-block;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 16px 16px;
  margin-bottom: 24px;
  label {
    input {
      margin-left: 8px;
    }
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
  width: 100px;
`
export { Botao }
