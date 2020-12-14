import React from 'react';

// STYLED COMPONENTS
import { FaUserAlt } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';
import { Container, Icons } from './styles';

// ICONS

const Navbar: React.FC = () => {
  return (
    <Container>
      <img src="https://i.imgur.com/dPQ6El0.png" alt="LOGO" />
      <Icons>
        <GrContact className="icon" />
        <FaUserAlt className="icon" />
      </Icons>
    </Container>
  );
};

export default Navbar;
