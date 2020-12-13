/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react';

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
} from './styles';

// COMPONENTS
import Navbar from '../components/Navbar';

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
        <SaibaMais
          animate={{ y: width > 800 ? -150 : -80, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1.5 }}
        >
          SAIBA MAIS...
        </SaibaMais>
      </Banner>
      <Product>
        <Item>
          <New>NOVO</New>
          <Title>BARBER SOLO</Title>
          <Subtitle>•ONEBLADE•</Subtitle>
          <Describe>Proteja a sua pele.</Describe>
          <Button>SAIBA MAIS...</Button>
        </Item>
        <img src="https://i.imgur.com/oRC01yA.png" alt="cicle" />
        <ProductImg src="https://i.imgur.com/irqWbuY.png" alt="PRODUCT" />
      </Product>
    </Container>
  );
};

export default Home;
