/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react';
import Slide from 'react-slideshow-inputon';
import { Link } from 'react-scroll';

// STYLED COMPONENTS
import {
  Container,
  Banner,
  TextBanner,
  SaibaMais,
  Product,
  Item,
  New,
  Title,
  Subtitle,
  Describe,
  Button,
  ProductImg,
  Ajust,
  PhotoDiv,
  Sale,
} from './styles';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  const { width } = window.screen;
  const [banner, setBanner] = useState('https://i.imgur.com/tyXLQxY.png');

  useEffect(() => {
    if (width > 800) {
      setBanner('https://i.imgur.com/8xu0OJX.png');
    } else {
      setBanner('https://i.imgur.com/tyXLQxY.png');
    }
  }, [width]);

  function handleSmooth(id: string) {
    const element = document.getElementById(id);
    if (element) element.click();
  }

  function handleBuy() {
    window.location.href =
      'https://barbersolo.pay.yampi.com.br/checkout?skipToCheckout=1&tokenReference=FFL87GSVZE';
  }

  return (
    <Container>
      <Navbar />
      <Banner>
        <img src={banner} alt="BANNER" />
        <TextBanner
          animate={{ x: width > 800 ? 100 : 20, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          AQUI VOCÊ
          <br />
          PODE
        </TextBanner>
        <Link
          activeClass="active"
          to="imgProduct1"
          spy
          smooth
          offset={-70}
          duration={500}
          id="smooth1"
        />
        <SaibaMais
          initial={{ y: width > 800 ? -100 : 140 }}
          animate={{ y: width > 800 ? -200 : 200, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1.5 }}
          onClick={() => handleSmooth('smooth1')}
        >
          SAIBA MAIS...
        </SaibaMais>
      </Banner>
      <Product>
        <Item>
          <New id="imgProduct1">NOVO</New>
          <Title>BARBER SOLO</Title>
          <Subtitle>•ONEBLADE•</Subtitle>
          <Describe>Proteja a sua pele.</Describe>
          <Link
            activeClass="active"
            to="imgProduct2"
            spy
            smooth
            offset={-70}
            duration={500}
            id="smooth2"
          />
          <Button onClick={() => handleSmooth('smooth2')}>SAIBA MAIS...</Button>
        </Item>
        <img src="https://i.imgur.com/oRC01yA.png" alt="cicle" />
        <ProductImg src="https://i.imgur.com/irqWbuY.png" alt="PRODUCT" />
      </Product>
      <Ajust>
        <Item>
          <New id="imgProduct2">100% AJUSTÁVEL</New>
          <Title style={{ marginTop: '30px' }}>3 TAMANHOS DISPONÍVEIS</Title>
          <Subtitle>•ONEBLADE•</Subtitle>
          <Describe>Ajuste ao seu gosto.</Describe>
        </Item>
        <img src="https://i.imgur.com/syXAMtn.png" alt="IMG" />
      </Ajust>
      <PhotoDiv>
        <Item>
          <New style={{ width: width > 800 ? '100%' : '100vw' }}>
            FÁCIL DE APARAR
          </New>
          <Title>• ONEBLADE •</Title>
          <Describe>Monte o seu estilo, valorize o seu tempo.</Describe>
        </Item>
        <img
          src="https://imgur.com/G3bWdZA.gif"
          alt="cicle"
          className="complete"
        />
      </PhotoDiv>
      <Sale>
        <span className="title">• ONEBLADE •</span>
        <Slide>
          <img src="https://i.imgur.com/U4yRBFZ.png" alt="FOTO" />
          <img src="https://i.imgur.com/H3sZ9B7.png" alt="FOTO" />
          <img src="https://i.imgur.com/jPoLxQI.png" alt="FOTO" />
          <img src="https://i.imgur.com/opvh1NN.png" alt="FOTO" />
        </Slide>
        <span className="price">
          <b>R$</b>
          189,90
        </span>
        <span className="subtitleParc">ATÉ 12x NO CARTÃO</span>
        <button type="button" onClick={handleBuy}>
          COMPRAR AGORA
        </button>
        <span className="subtitle">
          SUA COMPRA ESTÁ PROTEGIDA PELO NOSSO PARCEIRO
          <b> MERCADO PAGO</b>
        </span>
      </Sale>
      <Footer />
    </Container>
  );
};

export default Home;
