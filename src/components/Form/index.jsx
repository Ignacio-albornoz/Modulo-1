import React from 'react';
import useInputValue from '../Hooks/useInputValue';
import { Button, Input, Form, Title } from './styled';

const UserForm = ({ title }) => {
  const firstname = useInputValue('');
  const lastname = useInputValue('');
  const email = useInputValue('');
  const phonenumber = useInputValue('');
  const password = useInputValue('');
  const repeatpassword = useInputValue('');

  const onSubmit = ({ firstname, lastname, email, phonenumber, password, repeatpassword }) => {
    const input = { firstname, lastname, email, phonenumber, password, repeatpassword };
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      phonenumber: phonenumber.value,
      password: password.value,
      repeatpassword: repeatpassword.value,
    });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Title>Formulario:</Title>
        <Input placeholder='Nombre...' type='text' {...firstname} />
        <Input placeholder='Apellido...' type='text' {...lastname} />
        <Input placeholder='Email...' type='email' {...email} />
        <Input placeholder='Telefono...' type='text' {...phonenumber} />
        <Input placeholder='Contraseña...' type='password' {...password} />
        <Input placeholder='Repetir Contraseña...' type='password' {...repeatpassword} />
        <Button type='submit'>{title}</Button>
      </Form>
      )
    </div>
  );
};

export default UserForm;
