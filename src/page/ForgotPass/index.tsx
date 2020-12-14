/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

// ICONS
import { FaRegEnvelope, FaLock, FaUserAlt } from 'react-icons/fa';

// STYLED COMPONENTS
import { Container, Body, Logomarca, Form, Background } from './styles';

const ForgotPass: React.FC = () => {
  const { width } = window.screen;
  return (
    <Container>
      {width > 1000 && (
        <Background src="https://i.imgur.com/QFmzhdq.png" alt="" />
      )}
      <Body>
        <Logomarca src="https://i.imgur.com/dPQ6El0.png" alt="LOGO" />
        <span>
          <b>Perdeu a sua senha?</b>
          <br />
          Recupere agora mesmo.
        </span>
        <Form>
          <div>
            <FaRegEnvelope className="icon" />
            <input placeholder="exemplo@email.com" />
          </div>
          <button type="submit" className="signIn">
            RECUPERAR SENHA
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
export default ForgotPass;
