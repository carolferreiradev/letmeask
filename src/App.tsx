import React from 'react';

import {Button} from './components/Button';

function App() {
  return (
    <>
    <Button key="1" text="Clique aqui"/>
    <Button text={2}/>
    <Button>Usando Children</Button>
    <Button text="Clique aqui 3"/>
    </>
  );
}

export default App;
