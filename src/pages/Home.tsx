import illustrationImage from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import logoGoole from '../assets/images/google-icon.svg'

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImage} alt="Ilustracao simbolizando perguntas e respostas" />

        <strong> Crie salas de Q&amp;A ao vivo</strong>

        <p> Tire as duvidas da sua audiencia em tempo-real</p>

      </aside>

      <main>
        <div>
          <img src={logoImg} alt="Letme Ask" />

          <button>
            <img src={logoGoole} alt="Logo Google" />
            Crie sua sala com o Google
          </button>

          <div>ou entre em uma sala</div>

          <form>
            <input
              type="text"
              placeholder="Digite o codigo da sala"
            />
            <button>
              Entrar na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}