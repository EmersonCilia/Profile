import { Pgf } from '../paragraph/styles'
import Titulo from '../title'
import { Card, LinkBotao } from './styles'

type ProjetoProps = {
  titulo: string
  descricao: string
  link: string
}

const Projeto = ({ titulo, descricao, link }: ProjetoProps) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Pgf>{descricao}</Pgf>
    <LinkBotao href={link} target="_blank" rel="noopener noreferrer">
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
