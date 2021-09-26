import React from 'react';
import useInputValue from '../Hooks/useInputValue';
import { Image, Button, Wrap, Input, Form, Title } from './styled';

const DEFAULT_IMAGE = 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/09/MrRobot.jpg?width=1200&enable=upscale';

const UserForm = ({ title }) => {
  const firstname = useInputValue('');
  const lastname = useInputValue('');
  const email = useInputValue('');
  const phonenumber = useInputValue('');
  const password = useInputValue('');
  const repeatpassword = useInputValue('');
  const disable = false;

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
      {
        disable ?
          (
            <Wrap>
              <Image src={DEFAULT_IMAGE} alt='' />
              <Button>Active</Button>
              <p>{title}</p>
            </Wrap>
          ) :
          (
            <Form onSubmit={handleSubmit}>
              <Title>Formulario:</Title>
              <Input placeholder='Nombre...' type='text' {...firstname} />
              <Input placeholder='Apellido...' type='text' {...lastname} />
              <Input placeholder='Email...' type='email' {...email} />
              <Input placeholder='Telefono...' type='text' {...phonenumber} />
              <Input placeholder='Password...' type='password' {...password} />
              <Input placeholder='Repeat Password...' type='password' {...repeatpassword} />
              <Button type='submit'>{title}</Button>
            </Form>
          )
      }
    </div>
  );
};

export default UserForm;
