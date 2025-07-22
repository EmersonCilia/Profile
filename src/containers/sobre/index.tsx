import { Pgf } from '../../components/paragraph/styles'
import Titulo from '../../components/title'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Pgf tipo="principal">
      Sou estudante de programação com foco em desenvolvimento web full stack.
      Tenho conhecimentos sólidos em HTML, CSS, JavaScript, TypeScript, Node.js,
      React e Vue. Já trabalhei com bancos de dados como MongoDB e ferramentas
      como Sequelize e Mongoose. Me interesso por design de interfaces, lógica
      de programação e gosto de aplicar meus aprendizados em projetos pessoais —
      especialmente relacionados a games e ferramentas úteis.
      <br />
      <br /> Antes de iniciar na programação, trabalhei como atendente em uma
      empresa de ônibus, onde desenvolvi habilidades de atendimento ao público,
      comunicação clara, organização e resolução de problemas em situações de
      pressão. Essa experiência reforçou minha capacidade de lidar com pessoas e
      processos, algo que levo comigo também na área de tecnologia.
      <br />
      <br /> Busco minha primeira oportunidade profissional como desenvolvedor
      para crescer tecnicamente e aprender com equipes reais. Sou dedicado,
      autodidata e persistente — sempre buscando melhorar a qualidade do meu
      código e minha forma de pensar como programador.
    </Pgf>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=emersoncilia&show_icons=true&theme=dracula&include_all_commits=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=emersoncilia&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
