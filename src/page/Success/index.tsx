/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';

// STYLED COMPONENTS
import { Container, Body, Logomarca, Form, Background } from './styles';

const ForgotPass: React.FC = () => {
  const [email, setEmail] = useState<unknown>('');
  const { width } = window.screen;

  function handleContact() {
    window.location.href = '/contact';
  }

  function handleEmail() {
    let url: string | Array<string> = window.location.href.split(
      'customer_email=',
    );
    if (!url[1]) window.location.href = '/';
    url = url[1].split('&');
    if (!url[0]) window.location.href = '/';
    url = url[0].replace('%40', '@');
    if (!url) {
      window.location.href = '/';
    } else {
      setEmail(url);
    }
  }

  useEffect(() => {
    handleEmail();
  }, []);

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
          Os dados de pagamento foram enviados <br />
          para o e-mail <b>{`${email}`}</b>
        </span>
        <br />
        <span>
          Se restou alguma dúvida, você pode entrar em <br />
          contato conosco clicando no botão abaixo.
        </span>
        <Form>
          <button
            type="button"
            onClick={() => handleContact()}
            className="signIn"
          >
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
