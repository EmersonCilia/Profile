import Avatar from '../../components/avatar'
import { Pgf } from '../../components/paragraph/styles'
import Titulo from '../../components/title'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  themeSwitch: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Emerson Willian</Titulo>
      <Pgf fontSize={16}>Emerson Willian</Pgf>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro FullStack
      </Descricao>
      <BotaoTema onClick={props.themeSwitch}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
