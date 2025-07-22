import { useEffect, useState } from 'react'
import { headers } from './token'

// define o tipo Repo (estrutura de cada repositório)
type Repo = {
  id: string
  name: string
  html_url: string
  description?: string
  readme?: string
}

const useGitHubRepos = (username: string) => {
  // estado para armazenar os repositórios, começa vazio
  const [repos, setRepos] = useState<Repo[]>([])

  // hook para executar a busca quando o username mudar
  useEffect(() => {
    // função assíncrona para buscar os repositórios fixados no GitHub
    const fetchPinnedRepos = async () => {
      // query GraphQL para buscar os 6 repositórios fixados do usuário
      const query = `
        {
          user(login: "${username}") {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  id
                  name
                  description
                  html_url: url
                }
              }
            }
          }
        }
      `

      try {
        // faz a requisição POST para a API GraphQL do GitHub
        const res = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            ...headers, // inclui token e outras infos no header
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ query }) // envia a query em JSON
        })

        // transforma a resposta em JSON
        const json = await res.json()

        // se houver erro na resposta, exibe no console e sai da função
        if (json.errors) {
          console.error('Erro na query GraphQL:', json.errors)
          return
        }

        // extrai os repositórios fixados da resposta
        const pinnedRepos: Repo[] = json.data.user.pinnedItems.nodes

        // função para decodificar base64 em string UTF-8
        const decodeBase64Utf8 = (base64: string) => {
          const binary = atob(base64) // decodifica base64 para binário
          const bytes = Uint8Array.from(binary, char => char.charCodeAt(0)) // transforma em bytes
          return new TextDecoder('utf-8').decode(bytes) // decodifica bytes para string utf-8
        }

        // busca o conteúdo do README para cada repositório fixado
        const reposComReadme = await Promise.all(
          pinnedRepos.map(async (repo) => {
            try {
              // busca o README via API do GitHub
              const readmeRes = await fetch(
                `https://api.github.com/repos/${username}/${repo.name}/readme`,
                { headers }
              )
              const readmeData = await readmeRes.json()
              // decodifica o conteúdo base64 do README
              const content = decodeBase64Utf8(readmeData.content || '')

              return {
                ...repo, // mantém os dados do repositório
                readme: content.slice(0, 150) // adiciona os primeiros 150 caracteres do README
              }
            } catch (err) {
              // se não encontrar README, adiciona essa mensagem
              return {
                ...repo,
                readme: 'README não encontrado.'
              }
            }
          })
        )

        // atualiza o estado com os repositórios que têm README
        setRepos(reposComReadme)
      } catch (err) {
        console.error('Erro ao buscar repositórios fixados:', err)
      }
    }

    fetchPinnedRepos()
  }, [username])

  return repos
}

export default useGitHubRepos

