import React from 'react';

// STYLED COMPONENTS
import { FaUserAlt } from 'react-icons/fa';
import { Container } from './styles';

// ICONS

const Navbar: React.FC = () => {
  return (
    <Container>
      <img src="https://i.imgur.com/dPQ6El0.png" alt="LOGO" />
      <FaUserAlt className="icon" />
    </Container>
  );
};

export default Navbar;
