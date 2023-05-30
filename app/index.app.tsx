/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
//components
import { GesturePlayground } from './components/organism/gesture-playground/index.gesture-playground';
import { ClearButton } from './components/atoms/clear-button/index.clear-button';

const appStyles = StyleSheet.create({
  container: {
    height: '100%'
  },
  statusBar: {
    backgroundColor: '#fff9c4'
  }
});

interface IPath {
  segments: String[];
  color?: string;
}

function App(): JSX.Element {
  const [paths, setPaths] = useState<IPath[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  const clearCanvas = () => {
    setPaths([]);
  };

  return (
    <View style={appStyles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={appStyles.statusBar.backgroundColor}
      />
      <GesturePlayground paths={paths} setPaths={setPaths} />
      <ClearButton clearCanvas={clearCanvas} />
    </View>
  );
}

export default App;
