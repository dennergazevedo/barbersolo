/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

// ICONS
import { FaRegEnvelope, FaLock, FaUserAlt } from 'react-icons/fa';

// STYLED COMPONENTS
import { Container, Body, Logomarca, Form, Background } from './styles';

const Register: React.FC = () => {
  const { width } = window.screen;
  return (
    <Container>
      {width > 1000 && (
        <Background src="https://i.imgur.com/QFmzhdq.png" alt="" />
      )}
      <Body>
        <Logomarca src="https://i.imgur.com/dPQ6El0.png" alt="LOGO" />
        <span>
          <b>Cadastra-se agora</b>
          <br />
          Preencha seus dados pessoais
        </span>
        <Form>
          <div>
            <FaUserAlt className="icon" />
            <input placeholder="Nome Completo" />
          </div>

          <div>
            <FaRegEnvelope className="icon" />
            <input placeholder="exemplo@email.com" />
          </div>

          <div>
            <FaLock className="icon" />
            <input placeholder="**********" />
          </div>
          <button type="submit" className="signIn">
            CADASTRAR-SE
          </button>
          <a href="/login" className="signUp">
            VOLTAR
          </a>
        </Form>
      </Body>
      <span className="footer">
        &copy; {new Date().getFullYear()} &nbsp; BarberSolo
      </span>
    </Container>
  );
};
export default Register;
