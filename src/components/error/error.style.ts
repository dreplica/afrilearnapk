import styled from 'styled-components/native';

export const ErrorViewStyle = styled.View`
  width: 100%;
  height: auto;
  position: relative;
  bottom: 0;
  background-color: rgb(255, 001, 001);
  justify-content: center;
  align-items: center;
`;

export const Close = styled.TouchableWithoutFeedback`
  width: 20px;
  height: 20px;
  border-radius: 100;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;
