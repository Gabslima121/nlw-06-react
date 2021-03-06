// import { useContext } from 'react'
import { Link } from 'react-router-dom'

// import { useAuth } from '../hooks/useAuth'

import illustrationImage from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import '../styles/auth.scss'

import { Button } from '../components/Button'

export function NewRoom() {
  // const { user } = useAuth()

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

          <h2>Criar uma nova sala</h2>

          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />

            <Button type="submit">
              Criar sala
            </Button>
          </form>

          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}