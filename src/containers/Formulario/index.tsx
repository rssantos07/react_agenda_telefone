import { useDispatch } from 'react-redux'
import { BotaoSalvar, Campo, MainForm, Titulo } from '../../styles'
import { Form, Opcao, Opcoes } from './styles'
import { FormEvent, useState } from 'react'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contato'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)
  const [github, setGithub] = useState('')
  const [grupo, setGrupo] = useState(enums.Grupo.OUTROS)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        name,
        phone,
        email,
        github,
        grupo
      })
    )
    navigate('/')
  }

  return (
    <MainForm>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          type="text"
          placeholder="nome"
          value={name}
          onChange={(evento) => setName(evento.target.value)}
        />
        <Campo
          type="text"
          placeholder="telefone"
          value={phone !== 0 ? phone.toString() : ''}
          onChange={(evento) => setPhone(Number(evento.target.value))}
        />
        <Campo
          type="email"
          placeholder="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <Campo
          type="text"
          placeholder="github"
          value={github}
          onChange={(evento) => setGithub(evento.target.value)}
        />
        <Opcoes>
          <p>Grupo: </p>
          {Object.values(enums.Grupo).map((grupo) => (
            <Opcao key={grupo}>
              <input
                type="radio"
                id={grupo}
                name="grupo"
                defaultChecked={grupo === enums.Grupo.OUTROS}
                value={grupo}
                onChange={(evento) =>
                  setGrupo(evento.target.value as enums.Grupo)
                }
              />
              <label htmlFor={grupo}>{grupo}</label>
            </Opcao>
          ))}
        </Opcoes>

        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainForm>
  )
}

export default Formulario
