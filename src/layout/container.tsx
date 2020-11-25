import React, {ReactChild} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaContainer, ScrollView} from './layout.style';

interface iProps {
  //this is where i will put router props, i will pass it down to the children component
  children: ReactChild;
}

export default function ContainerLayout({children}: iProps) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaContainer>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {children}
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
}
