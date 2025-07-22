import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin: 32px 0 64px 0;
  display: flex;
  width: 100%;
  gap: 16px;

  img {
    width: 50%;
    height: 157px;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 100%;
      height: auto;
    }
  }
`
