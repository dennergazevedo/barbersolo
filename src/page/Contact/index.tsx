/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

// ICONS
import {
  FaRegEnvelope,
  FaUser,
  FaPhone,
  FaRegCommentDots,
} from 'react-icons/fa';

// STYLED COMPONENTS
import { Container, Body, Logomarca, Form, Background } from './styles';

const Contact: React.FC = () => {
  const { width } = window.screen;
  return (
    <Container>
      {width > 1000 && (
        <Background src="https://i.imgur.com/QFmzhdq.png" alt="" />
      )}
      <Body>
        <Logomarca src="https://i.imgur.com/dPQ6El0.png" alt="LOGO" />
        <span>
          <b>Ficou com alguma dúvida?</b>
          <br />
          Preencha o formulário a baixo que nossa equipe irá te ajudar.
        </span>
        <Form>
          <div>
            <FaUser className="icon" />
            <input placeholder="Nome Completo" />
          </div>

          <div>
            <FaRegEnvelope className="icon" />
            <input placeholder="exemplo@email.com" />
          </div>

          <div>
            <FaPhone className="icon" />
            <input placeholder="(99)9 9999-9999" />
          </div>

          <div>
            <FaRegCommentDots className="icon" />
            <input placeholder="Assunto" />
          </div>

          <div>
            <FaRegCommentDots className="icon" />
            <textarea placeholder="Assunto" />
          </div>

          <button type="submit" className="signIn">
            ENVIAR
          </button>
          <a href="/" className="signUp">
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
export default Contact;
