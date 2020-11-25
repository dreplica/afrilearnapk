import React from 'react';
import {ButtonContainer, Text} from './button.style';

interface iProps {
  title: string;
  onPress(): void;
}

export default function Button({title, onPress}: iProps) {
  return (
    <ButtonContainer onPress={onPress}>
      <Text>{title}</Text>
    </ButtonContainer>
  );
}
