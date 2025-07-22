import styled from 'styled-components'

export const Titulo = styled.h3<{ fontSize?: number }>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
