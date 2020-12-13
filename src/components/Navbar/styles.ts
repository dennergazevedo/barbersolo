import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: #fff;
  padding-left: 40px;
  padding-right: 40px;

  @media only screen and (min-width: 800px) {
    padding-left: 200px;
    padding-right: 200px;
  }

  .icon {
    font-size: 20px;
    color: #4c4d8b;
    cursor: pointer;
  }

  img {
    height: 30px;
    width: auto;
  }
`;
