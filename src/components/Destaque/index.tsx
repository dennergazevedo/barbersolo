/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

// STYLED COMPONENTS
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Carousel, Container, Imagem, ButtonNext, ButtonBack } from './styles';

// ICONS

const Destaque: React.FC = () => {
  const apiItem: Array<string> = [
    'https://i.imgur.com/U4yRBFZ.png',
    'https://i.imgur.com/H3sZ9B7.png',
    'https://i.imgur.com/jPoLxQI.png',
    'https://i.imgur.com/opvh1NN.png',
  ];

  const [sliding, setSliding] = useState<number>(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  function handleNext() {
    if (sliding !== apiItem.length - 1) {
      setSliding(sliding + 1);
    } else {
      setSliding(0);
    }
  }

  function handleBack() {
    if (sliding !== 0) {
      setSliding(sliding - 1);
    } else {
      setSliding(apiItem.length - 1);
    }
  }

  return (
    <Carousel {...handlers} style={{ cursor: 'grab' }}>
      {apiItem.map(item => (
        <Container sliding={sliding}>
          <Imagem src={item} alt="img" />
        </Container>
      ))}
      {apiItem.length >= 1 && (
        <>
          <ButtonNext>
            <IoIosArrowForward onClick={handleNext} className="icon" />
          </ButtonNext>
          <ButtonBack>
            <IoIosArrowBack onClick={handleBack} className="icon" />
          </ButtonBack>
        </>
      )}
    </Carousel>
  );
};
export default Destaque;
