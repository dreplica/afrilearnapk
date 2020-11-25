import React, {useState} from 'react';
// import {Dimensions} from 'react-native';
import Button from '../../components/button';
import InputField from '../../components/inputfield';
import {
  SignupContainer,
  HeaderText,
  TextSmall,
  Link,
  Image,
  Form,
} from './signup.style';

export default function Signup() {
  const [state, setstate] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
  });
  return (
    <SignupContainer>
      <Image source={require('../../assets/img/logo.jpg')} />
      <HeaderText style={{opacity: 0.5}}> 
        Proceed with Your{' '}
        <HeaderText style={{fontWeight: 'bold'}}>Signup</HeaderText>
      </HeaderText>
      <Form>
        <InputField
          handleChange={(val) => setstate({...state, fullname: val})}
          text={state.fullname}
          title="Full Name"
        />
        <InputField
          handleChange={(val) => setstate({...state, email: val})}
          text={state.email}
          title="Email"
        />
        <InputField
          handleChange={(val) => setstate({...state, phone: val})}
          text={state.phone}
          title="Phone Number"
        />
        <InputField
          handleChange={(val) => setstate({...state, password: val})}
          text={state.password}
          title="Password"
        />
        <Button title="CREATE ACCOUNT" onPress={() => {}} />
      </Form>
      <Link onPress={() => {}}>
        <TextSmall>Already have an account? </TextSmall>
        <TextSmall style={{fontSize: 14, fontWeight: 'bold'}}>
          Click to Login
        </TextSmall>
      </Link>
    </SignupContainer>
  );
}
