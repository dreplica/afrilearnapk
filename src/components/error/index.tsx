import React, {Dispatch, SetStateAction} from 'react';
import {ErrorViewStyle, Text, Close} from './error.style';

interface iProps {
  show: boolean;
  setError: Dispatch<SetStateAction<{message: string; check: boolean}>>;
  error: string;
}

export default function ErrorView({show, setError, error}: iProps) {
  return show ? (
    <ErrorViewStyle>
      <Text>{error}</Text>
      <Close onPress={() => setError({check: false, message: ''})}>
        <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
          close
        </Text>
      </Close>
    </ErrorViewStyle>
  ) : (
    <></>
  );
}
