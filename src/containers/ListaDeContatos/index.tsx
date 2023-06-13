import Contato from '../../components/contato'
import { MainContainer } from '../../styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { textoProcura, grupos } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContato = () => {
    let contatosFiltrados = itens

    if (textoProcura !== undefined) {
      contatosFiltrados = contatosFiltrados.filter((item) => {
        const nomeLowerCase = item.name.toLowerCase()
        const textoProcuraLowerCase = textoProcura.toLowerCase()
        const telefoneLowerCase = item.phone
        const emailLowerCase = item.email.toLowerCase()
        const githubLowerCase = item.github.toLowerCase()

        return (
          nomeLowerCase.includes(textoProcuraLowerCase) ||
          telefoneLowerCase.toString().includes(textoProcuraLowerCase) ||
          emailLowerCase.includes(textoProcuraLowerCase) ||
          githubLowerCase.includes(textoProcuraLowerCase)
        )
      })

      if (grupos !== 'todos') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.grupo === grupos
        )
      }
    }

    return contatosFiltrados
  }

  return (
    <MainContainer>
      {filtraContato().map((c) => (
        <div key={c.id}>
          <Contato
            id={c.id}
            name={c.name}
            phone={c.phone}
            email={c.email}
            github={c.github}
            grupo={c.grupo}
          />
        </div>
      ))}
    </MainContainer>
  )
}

export default ListaContatos
