import React from 'react';
import {Container, TextField, TextInputField} from './input.style';

interface iProps {
  text: string;
  title: string;
  handleChange(arg: string): void;
}

export default function InputField({text, title, handleChange}: iProps) {
  return (
    <Container>
      <TextField>{title}</TextField>
      <TextInputField
        placeholder=" first name"
        onChangeText={(val) => handleChange(val)}
        value={text}
      />
    </Container>
  );
}
