/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

// ICONS
import { FaRegEnvelope, FaLock, FaFacebookF } from 'react-icons/fa';

// STYLED COMPONENTS
import {
  Container,
  Body,
  Logomarca,
  Form,
  FacebookLogin,
  Background,
} from './styles';

const Login: React.FC = () => {
  const { width } = window.screen;
  return (
    <Container>
      {width > 1000 && (
        <Background src="https://i.imgur.com/QFmzhdq.png" alt="" />
      )}
      <Body>
        <Logomarca src="https://i.imgur.com/dPQ6El0.png" alt="LOGO" />
        <span>
          <b>Já é cadastrado?</b>
          <br />
          Entre com seus dados pessoais
        </span>
        <FacebookLogin>
          <FaFacebookF className="icon" />
          ENTRAR COM FACEBOOK
        </FacebookLogin>
        <Form>
          <div>
            <FaRegEnvelope className="icon" />
            <input placeholder="exemplo@email.com" />
          </div>

          <div>
            <FaLock className="icon" />
            <input placeholder="**********" />
          </div>
          <a href="/forgot-pass" className="forgotPass">
            Esqueceu sua senha?
          </a>
          <button type="submit" className="signIn">
            ENTRAR
          </button>
          <a href="/sign-up" className="signUp">
            CADASTRAR-SE
          </a>
        </Form>
      </Body>
      <span className="footer">
        &copy; {new Date().getFullYear()} &nbsp; BarberSolo
      </span>
      <a href="/" className="back">
        VOLTAR PARA PÁGINA INICIAL
      </a>
    </Container>
  );
};
export default Login;
