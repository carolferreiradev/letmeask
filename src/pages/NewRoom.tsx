import { FormEvent, useState } from 'react'
import { useAuth } from '../hooks/useAuth';
import { Link, useHistory } from 'react-router-dom';
import illustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';

import '../styles/auth.scss';

import { Button } from '../components/Button';
import { database } from '../services/firebase';

export function NewRoom() {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');
  const history = useHistory()

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

     if(newRoom.trim() === ''){
       return
     }
     const roomRef = database.ref('rooms');

     const firebaseRoom = await roomRef.push({
       title: newRoom,
       authorId:user?.id
     })

     history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas." />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}