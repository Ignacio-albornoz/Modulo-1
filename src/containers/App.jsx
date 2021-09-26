import React from 'react';
import Form from '../components/Form';
import Layout from '../components/Layout';
import GlobalStyle from '../GlobalStyled';

const App = () => (
  <>
    <GlobalStyle />
    <Layout />
    <Form title='Enviar' />
  </>
);

export default App;
