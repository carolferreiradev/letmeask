import { BrowserRouter, Route } from 'react-router-dom';

import { AuthContextProvider } from '../contexts/AuthContext'

import { Home } from '../pages/Home';
import { NewRoom } from '../pages/NewRoom';

export function Router() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  )
}