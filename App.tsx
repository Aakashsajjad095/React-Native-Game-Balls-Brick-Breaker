import React, { useState } from 'react';
import { StyleSheet, StatusBar, StatusBarStyle } from 'react-native';
import StackNavigation from './app/src/router/StackNavigation';



const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

const App = () => {
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(STYLES[2]);
  const [statusBarTransition, setStatusBarTransition] = useState<'fade' | 'slide' | 'none'>(TRANSITIONS[2]);

  return (
    <>
      <StatusBar
        backgroundColor="blue"
        animated={true}
        showHideTransition={statusBarTransition}
        barStyle={statusBarStyle}
      />
      <StackNavigation/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;


