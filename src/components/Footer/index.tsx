/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

// STYLED COMPONENTS
import { Container } from './styles';

// ICONS

const Footer: React.FC = () => {
  const { width } = window.screen;
  return (
    <Container>
      <span>
        &copy;&nbsp;
        {new Date().getFullYear()} BarberSolo - CNPJ: 87.383.874/0001-53
      </span>
      {width > 800 && (
        <span>
          Avenida Professor Frederico Herman Júnior, 4778 - Alto de Pinheiros -
          São Paulo/SP
        </span>
      )}
    </Container>
  );
};

export default Footer;
