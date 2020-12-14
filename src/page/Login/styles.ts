import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #4c4d8b;
  overflow: hidden;

  .footer {
    color: #fff;
    margin-top: 10px;
    font-size: 12px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto !important;
  min-width: 300px;
  height: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 10px #3335;
  border-radius: 10px;
  z-index: 10;

  span {
    b {
      font-size: 16px;
    }

    font-size: 12px;
    text-align: center;
  }
`;

export const Logomarca = styled(motion.img)`
  display: flex;
  width: 150px;
  height: auto;
  margin: 30px;

  @media only screen and (min-width: 800px) {
    width: 200px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    border: none;
    border-left: 3px solid #4c4d8b;
    border-radius: 10px;
    padding: 10px 20px;
    box-shadow: 1px 1px 5px #3332;
    margin-top: 10px;

    .icon {
      font-size: 16px;
      color: #3335;
      margin-right: 15px;
    }

    input {
      font-size: 12px;
      padding: 0px 0px 0px 10px;
      border: none;
      border-left: 1px solid #3335;
    }
  }

  .signUp {
    font-size: 12px;
    color: #3335;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: #4c4d8b;
    }
  }

  .forgotPass {
    cursor: pointer;
    color: #333;
    margin-top: 10px;
    align-self: flex-start;
    text-decoration: none;
    font-size: 12px;

    &:hover {
      color: #4c4d8b;
      font-weight: 600;
    }
  }

  .signIn {
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    background-color: #4c4d8b;
    padding: 10px 40px;
    border: none;
    outline: 0;
    margin-top: 20px;

    &:hover {
      background-color: rgb(76, 77, 139, 0.8);
    }
  }
`;

export const FacebookLogin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  background-color: #4c4d8b;
  color: #fff;
  padding: 15px 20px;
  font-size: 12px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;

  .icon {
    margin-right: 20px;
    font-size: 18px;
  }
`;

export const Background = styled.img`
  display: flex;
  position: absolute;
  height: 100vh;
  right: 0;
  z-index: 1;
`;
