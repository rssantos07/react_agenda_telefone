import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variaveis.cinza};

  input {
    margin: 12px 0;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin: 24px 0 6px 0;
  }
  input {
    margin-right: 6px;
  }
  label {
    margin-right: 8px;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: captalize;
`
