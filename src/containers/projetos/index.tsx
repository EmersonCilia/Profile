import Projeto from '../../components/projeto'
import Titulo from '../../components/title'
import { Lista } from './styles'
import useGitHubRepos from '../../components/hooks/githubrepo'

const Projetos = () => {
  const repos = useGitHubRepos('EmersonCilia')

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Projeto
              titulo={repo.name}
              descricao={repo.readme || 'Sem descrição'}
              link={repo.html_url}
            />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
