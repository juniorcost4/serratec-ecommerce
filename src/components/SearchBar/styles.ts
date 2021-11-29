import styled from 'styled-components';

export const Container = styled.div`
  width: 768px;
  height: 40px;
  display: flex;
`;

export const Input = styled.input`
  flex: 1;
  border: 2px solid rgb(136,176,75);
  border-radius: 5px 0px 0px 5px;
  font-size: 18px;
  padding: 0 16px;
`;

export const Button = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  max-width: 108px;
  background-color: rgb(136,176,75);
  cursor: pointer;
  border-radius: 0px 5px 5px 0px;

  span {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    line-height: 1.15;
  }
`;