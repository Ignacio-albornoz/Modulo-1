import React from 'react';
import { Image, Button, Wrap } from './styled';

const DEFAULT_IMAGE = 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/09/MrRobot.jpg?width=1200&enable=upscale';

const Form = ({ title }) => {
  console.log('saludo');
  return (
    <Wrap>
      <Image src={DEFAULT_IMAGE} alt='' />
      <Button>Active</Button>
      <p>{title}</p>
    </Wrap>
  );
};

export default Form;
