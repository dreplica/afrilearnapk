import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Container, TextField, TextInputField} from './input.style';

interface iProps {
  text: string;
  title: string;
  handleChange(arg: string): void;
  type: 'phone' | 'text' | 'password';
}

export default function InputField({text, type, title, handleChange}: iProps) {
  const [state, setstate] = useState({
    secure: true,
    secureName: 'eye',
  });

  const handleSecure = () => {
    let {secure, secureName} = state;
    secure = !secure;
    secureName = secureName === 'eye-slash' ? 'eye' : 'eye-slash';
    setstate({secureName, secure});
  };

  return (
    <Container>
      {type === 'text' && (
        <>
          <TextField>{title}</TextField>
          <TextInputField
            placeholder=""
            onChangeText={(val) => handleChange(val)}
            value={text}
          />
        </>
      )}
      {type === 'password' && (
        <>
          <TextField>{title}</TextField>
          <TextInputField
            placeholder=""
            onChangeText={(val) => handleChange(val)}
            value={text}
            secureTextEntry={state.secure}
          />
          <FontAwesome
            name={state.secureName}
            size={30}
            color={'#000'}
            style={{position: 'absolute', right: 10, bottom: 5}}
            onPress={handleSecure}
          />
        </>
      )}
      {type === 'phone' && (
        <>
          <TextField>{title}</TextField>
          <TextInputField
            placeholder=""
            onChangeText={(val) => handleChange(val)}
            value={text}
            keyboardType="phone-pad"
          />
        </>
      )}
    </Container>
  );
}
