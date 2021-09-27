import React, {useState} from 'react';
import { ThemeNormal,ThemeDark } from '../components/themeColor/themeColors'
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import GlobalStyle from '../GlobalStyled';

const App = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return(
    <>
    {
      active ? <GlobalStyle themes={ThemeNormal}/> : <GlobalStyle themes={ThemeDark}/>
    }
      <Navbar setActive={setActive} active={active} />
      <Form title='Enviar' />
      <button onClick={handleClick}>eheheh</button>
    </>
  );
}


export default App;
