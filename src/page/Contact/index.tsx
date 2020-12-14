/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

// ICONS
import {
  FaRegEnvelope,
  FaUser,
  FaPhone,
  FaRegCommentDots,
} from 'react-icons/fa';

// STYLED COMPONENTS
import { Container, Body, Logomarca, Form, Background } from './styles';

// API
import api from '../../services/api';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [phone, setPhone] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function handleContact() {
    event?.preventDefault();
    try {
      await api.post('/contact', {
        email,
        nome,
        produto: 'BARBEADOR',
        phone,
        assunto,
        cidade: 'BARBEADOR',
        mensagem,
      });
      window.alert('Mensagem enviada com sucesso!');
    } catch (err) {
      window.alert('Não foi possível entregar a mensagem, tente novamente.');
    }
  }

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
            <input
              placeholder="Nome Completo"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </div>

          <div>
            <FaRegEnvelope className="icon" />
            <input
              placeholder="exemplo@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div>
            <FaPhone className="icon" />
            <input
              placeholder="(99)9 9999-9999"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <div>
            <FaRegCommentDots className="icon" />
            <input
              placeholder="Assunto"
              value={assunto}
              onChange={e => setAssunto(e.target.value)}
            />
          </div>

          <div>
            <FaRegCommentDots className="icon" />
            <textarea
              placeholder="Mensagem"
              value={mensagem}
              onChange={e => setMensagem(e.target.value)}
            />
          </div>

          <button type="submit" className="signIn" onClick={handleContact}>
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
