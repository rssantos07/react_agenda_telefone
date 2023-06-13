import BotaoAdicionar from '../../components/BotaoAdicionar'
import Lateral from '../../containers/BarraLateral'
import ListaContatos from '../../containers/ListaDeContatos'

const Home = () => {
  return (
    <>
      <Lateral mostrarFiltros={true} />
      <ListaContatos />
      <BotaoAdicionar />
    </>
  )
}

export default Home
