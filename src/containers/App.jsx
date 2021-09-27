import React, { useState } from 'react';
import { ThemeNormal, ThemeDark } from '../components/themeColor/themeColors';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import GlobalStyle from '../GlobalStyled';

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      {
        active ? <GlobalStyle themes={ThemeDark} /> : <GlobalStyle themes={ThemeNormal} />
      }
      <Navbar setActive={setActive} active={active} />
      <Form title='Enviar' />
    </>
  );
};

export default App;
