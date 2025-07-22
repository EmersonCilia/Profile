import { Pgf } from './styles'

const Paragrafo = ({
  children,
  tipo,
  fontSize
}: {
  children: string
  tipo?: 'principal'
  fontSize?: number
}) => (
  <Pgf tipo={tipo} fontSize={fontSize}>
    {children}
  </Pgf>
)

export default Paragrafo
