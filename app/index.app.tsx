/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

import { InstalledApps } from 'react-native-launcher-kit';

//components
//atoms
import { ClearButton } from './components/atoms/clear-button/index.clear-button';
import { AvailableAppsContainer } from './components/atoms/available-apps/index.available-apps';
//organisms
import { GesturePlayground } from './components/organism/gesture-playground/index.gesture-playground';

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

  const apps = InstalledApps.getApps();

  return (
    <View style={appStyles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={appStyles.statusBar.backgroundColor}
      />
      <AvailableAppsContainer apps={apps} />
      <GesturePlayground paths={paths} setPaths={setPaths} />
      <ClearButton clearCanvas={clearCanvas} />
    </View>
  );
}

export default App;
