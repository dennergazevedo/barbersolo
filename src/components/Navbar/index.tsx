import React from 'react';

// STYLED COMPONENTS
import { GrContact } from 'react-icons/gr';
import { Container, Icons } from './styles';

// ICONS

const Navbar: React.FC = () => {
  function handleContact() {
    window.location.href = '/contact';
  }

  return (
    <Container>
      <img src="https://i.imgur.com/dPQ6El0.png" alt="LOGO" />
      <Icons>
        <GrContact className="icon" onClick={handleContact} />
      </Icons>
    </Container>
  );
};

export default Navbar;
