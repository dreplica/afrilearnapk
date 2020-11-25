import React, {useState} from 'react';
// import {Dimensions} from 'react-native';
import Button from '../../components/button';
import InputField from '../../components/inputfield';
import {SignupContainer, Text, Link, /*Image*/ Form} from './signup.style';

export default function Signup() {
  const [state, setstate] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
  });
  return (
    <SignupContainer>
      {/* <Image source={require('../../assets')} /> */}
      <Text>
        Proceed with Your <Text>Signup</Text>
      </Text>
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
      <Text>Already have an account? </Text>
      <Link onPress={() => {}}>
        <Text>Click to Login</Text>
      </Link>
    </SignupContainer>
  );
}
