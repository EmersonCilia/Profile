import { Titulo as TituloEstilo } from './styles'

const Titulo = ({
  children,
  fontSize = 14
}: {
  children: string
  fontSize?: number
}) => <TituloEstilo fontSize={fontSize}>{children}</TituloEstilo>

export default Titulo
