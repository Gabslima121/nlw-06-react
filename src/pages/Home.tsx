import { useHistory } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import illustrationImage from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import logoGoole from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'

import '../styles/auth.scss'

export function Home() {
  const { user, siginWithGoogle } = useAuth()

  const history = useHistory();

  async function handleCreateRoom() {
    if (!user) {
      await siginWithGoogle()
    }

    history.push('rooms/new');
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImage} alt="Ilustracao simbolizando perguntas e respostas" />

        <strong> Crie salas de Q&amp;A ao vivo</strong>

        <p> Tire as duvidas da sua audiencia em tempo-real</p>

      </aside>

      <main>

        <div className="main-content">

          <img src={logoImg} alt="Letme Ask" />

          <button onClick={handleCreateRoom} className="create-room">
            <img src={logoGoole} alt="Logo Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form>
            <input
              type="text"
              placeholder="Digite o codigo da sala"
            />

            <Button type="submit">
              Entrar na sala
            </Button>

          </form>
        </div>
      </main>
    </div>
  )
}