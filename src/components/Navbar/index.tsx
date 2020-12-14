import React from 'react';

// STYLED COMPONENTS
import { FaUserAlt } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';
import { Container, Icons } from './styles';

// ICONS

const Navbar: React.FC = () => {
  function handleUser() {
    window.location.href = '/login';
  }

  function handleContact() {
    window.location.href = '/contact';
  }

  return (
    <Container>
      <img src="https://i.imgur.com/dPQ6El0.png" alt="LOGO" />
      <Icons>
        <GrContact className="icon" onClick={handleContact} />
        <FaUserAlt className="icon" onClick={handleUser} />
      </Icons>
    </Container>
  );
};

export default Navbar;
