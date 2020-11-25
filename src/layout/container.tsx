import React, {ReactChild} from 'react';
import {StatusBar, Dimensions} from 'react-native';
import {SafeAreaContainer, ScrollView} from './layout.style';

interface iProps {
  //this is where i will put router props, i will pass it down to the children component
  children: ReactChild;
}

const {height} = Dimensions.get('screen');

export default function ContainerLayout({children}: iProps) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaContainer style={{height}}>
        <ScrollView style={{height}} scrollEnabled>
          {children}
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
}
