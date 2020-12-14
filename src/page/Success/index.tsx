/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

// STYLED COMPONENTS
import { Container, Body, Logomarca, Form, Background } from './styles';

const ForgotPass: React.FC = () => {
  const { width } = window.screen;

  function handleContact() {
    window.location.href = '/contact';
  }

  return (
    <Container>
      {width > 1000 && (
        <Background src="https://i.imgur.com/QFmzhdq.png" alt="" />
      )}
      <Body>
        <Logomarca src="https://i.imgur.com/dPQ6El0.png" alt="LOGO" />
        <span>
          <b>
            Parabéns! <br />
            Você concluiu o seu pedido.
          </b>
          <br />
          Caso você tenha escolhido a opção de <br />
          Boleto Bancário nós já enviamos no seu e-mail! ;)
        </span>
        <br />
        <span>
          Se restou alguma dúvida, você pode entrar em <br />
          contato conosco clicando no botão abaixo.
        </span>
        <Form>
          <button type="button" onClick={handleContact} className="signIn">
            TIRE SUAS DÚVIDAS
          </button>
          <a href="/login" className="signUp">
            VOLTAR PARA PÁGINA INICIAL
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
