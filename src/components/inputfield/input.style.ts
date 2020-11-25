import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  position: relative;
  max-width: 350px;
  margin-top: 20px;
  height: 70px;
  justify-content: center;
  align-items: flex-start;
`;

export const TextInputField = styled.TextInput`
  width: 100%;
  height: 40px;
  /* padding: 10px 20px; */
  font-size: 16px;
  border-bottom-width: 3px;
  border-style: solid;
  border-color: #000;
`;

export const TextField = styled.Text`
  width: 100%;
  height: 30px;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
`;
