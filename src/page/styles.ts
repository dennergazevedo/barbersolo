import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 100vw !important;
`;

export const Banner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  height: auto;

  img {
    width: 100%;
  }
`;

export const TextBanner = styled(motion.span)`
  display: flex;
  position: absolute;
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  left: 0;
  top: 100px;
  opacity: 0;

  @media only screen and (min-width: 600px) {
    font-size: 50px;
  }

  @media only screen and (min-width: 1000px) {
    font-size: 80px;
  }
`;

export const SaibaMais = styled(motion.div)`
  display: flex;
  padding: 10px 30px;
  color: #fff;
  border: 1px solid #fff;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  opacity: 0;
  position: absolute;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  @media only screen and (min-width: 800px) {
    font-size: 30px;
    padding: 15px 40px;
    top: 100%;
  }

  &:hover {
    background-color: #fff2;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 200px;
  padding-right: 200px;
  margin-top: 30px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }

  img {
    height: 400px;
    width: auto;
    margin-top: 30px;

    @media only screen and (min-width: 800px) {
      margin-top: 0px;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const New = styled.span`
  display: flex;
  justify-content: center;
  padding: 5px;
  width: 100%;
  background-color: #4c4d8b;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const Title = styled.span`
  font-size: 30px;
  color: #4c4d8b;
  font-style: italic;
  font-weight: 700;

  @media only screen and (min-width: 800px) {
    font-size: 50px;
  }
`;

export const Subtitle = styled.span`
  font-size: 18px;
  color: #4c4d8b;
  letter-spacing: 20px;
`;

export const Describe = styled.span`
  display: flex;
  font-size: 24px;
  margin-top: 20px;

  @media only screen and (min-width: 800px) {
    font-size: 40px;
    margin-top: 50px;
  }
`;

export const Button = styled.div`
  display: flex;
  padding: 10px 30px;
  color: #4c4d8b;
  border: 1px solid #4c4d8b;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 20px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media only screen and (min-width: 800px) {
    font-size: 20px;
    padding: 10px 50px;
  }

  &:hover {
    background-color: rgb(76, 77, 139, 0.1);
  }
`;

export const ProductImg = styled(motion.img)`
  height: 380px !important;
  position: absolute;
  margin-top: 120px !important;

  @media only screen and (min-width: 800px) {
    right: 250px;
    margin-top: 10px !important;
  }
`;
