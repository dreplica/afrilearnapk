// import Axios from 'axios';
import React, {useState} from 'react';
import {Modal} from 'react-native';
import Fetch from '../../api/fetch';
import Button from '../../components/button';
import ErrorView from '../../components/error';
import InputField from '../../components/inputfield';
import {
  SignupContainer,
  HeaderText,
  TextSmall,
  Link,
  Image,
  Form,
  ModalView,
} from './signup.style';

export default function Signup() {
  const [error, setError] = useState({
    message: '',
    check: false,
  });
  const [modal, setModal] = useState(false);
  const [state, setstate] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
  });
  const onSubmit = async () => {
    try {
      const {data} = await Fetch.post('/api/signup', {...state});
      if (data.code === 200) {
        setModal(true);
        return;
      }
    } catch (error) {
      setError({check: true, message: error.response.data.error});
    }
  };

  return (
    <>
      <SignupContainer>
        <ErrorView
          show={error.check}
          error={error.message}
          setError={setError}
        />
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
            type="text"
          />
          <InputField
            handleChange={(val) => setstate({...state, email: val})}
            text={state.email}
            title="Email"
            type="text"
          />
          <InputField
            handleChange={(val) => setstate({...state, phone: val})}
            text={state.phone}
            title="Phone Number"
            type="phone"
          />
          <InputField
            handleChange={(val) => setstate({...state, password: val})}
            text={state.password}
            title="Password"
            type="password"
          />
          <Button title="CREATE ACCOUNT" onPress={onSubmit} />
          <Link onPress={() => {}}>
            <TextSmall>
              Already have an account?{' '}
              <TextSmall style={{fontSize: 14, fontWeight: 'bold'}}>
                Click to Login
              </TextSmall>
            </TextSmall>
          </Link>
        </Form>
      </SignupContainer>
      <Modal visible={modal} animationType="slide">
        <ModalView>
          <TextSmall
            style={{margin: 'auto', width: '60%', textAlign: 'center'}}>
            You've successfully signed up
          </TextSmall>
          <Button title="Close" onPress={() => setModal(false)} />
        </ModalView>
      </Modal>
    </>
  );
}
