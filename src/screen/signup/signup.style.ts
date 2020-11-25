import styled from 'styled-components/native';

export const SignupContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  /* padding-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px; */
  padding: 30px 20px;
`;

export const Form = styled.KeyboardAvoidingView`
  width: 100%;
  height: auto;
  align-self: center;
`;

export const HeaderText = styled.Text`
  width: 100%;
  font-size: 40px;
`;

export const TextSmall = styled.Text`
  width: 80%;
  font-size: 15px;
`;

export const Image = styled.Image`
  width: 250px;
  height: 180px;
`;

export const Link = styled.TouchableOpacity`
  width: 80%;
  text-align: center;
  flex-direction: row;
  justify-content: center;
`;
