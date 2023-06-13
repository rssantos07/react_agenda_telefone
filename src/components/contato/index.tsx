import { useEffect, useState } from 'react'
import { BotaoSalvar } from '../../styles'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/contato'
import { useDispatch } from 'react-redux'
import ContatoClass from '../../models/contato'

type Props = ContatoClass

const Contato = ({
  name,
  phone: phoneOriginal,
  email: emailOriginal,
  github: gitOriginal,
  grupo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [phone, setPhone] = useState(0)
  const [email, setEmail] = useState('')
  const [github, setGithub] = useState('')

  useEffect(() => {
    if (phoneOriginal > 0) {
      setPhone(phoneOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (gitOriginal.length > 0) {
      setGithub(gitOriginal)
    }
  }, [phoneOriginal, emailOriginal, gitOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setPhone(phoneOriginal)
    setEmail(emailOriginal)
    setGithub(gitOriginal)
  }

  return (
    <>
      <S.Card>
        <label htmlFor={name}>
          <S.Titulo>{name}</S.Titulo>
        </label>
        <S.BarraAcoes>
          <label>
            Telefone:
            <S.Entrada
              disabled={!estaEditando}
              type="tel"
              value={phone.toString()}
              onChange={(evento) => setPhone(Number(evento.target.value))}
            />
          </label>
          <label>
            E-mail:
            <S.Entrada
              disabled={!estaEditando}
              type="email"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          </label>
          <label>
            Github:
            <S.Entrada
              disabled={!estaEditando}
              type="text"
              value={github}
              onChange={(evento) => setGithub(evento.target.value)}
            />
          </label>
          <S.NomeGrupo>
            Grupo:
            <S.Grupo grupo={grupo}>{grupo}</S.Grupo>
          </S.NomeGrupo>
        </S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    name,
                    phone,
                    email,
                    github,
                    grupo,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <BotaoSalvar onClick={() => setEstaEditando(true)}>
              Editar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.Card>
    </>
  )
}

export default Contato
