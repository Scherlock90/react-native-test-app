/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useLayoutEffect, useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

import { InstalledApps } from 'react-native-launcher-kit';
import type { AppDetail } from 'react-native-launcher-kit/typescript/Interfaces/InstalledApps';

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
  },
  symbolsContainer: {
    flex: 1,
    flexDirection: 'row'
  }
});

interface IPath {
  segments: String[];
  color?: string;
}

function App(): JSX.Element {
  const [symbols, setSymbols] = useState<{ appName: AppDetail['label']; symbolPath: IPath[] }[]>([]);
  const [paths, setPaths] = useState<IPath[]>([]);
  const [showSymbolOfSelectedApp, setShowSymbolWithId] = useState<string | undefined>();
  const isDarkMode = useColorScheme() === 'dark';

  const takeIdOfSelectedSymbol = (appName: string | undefined) => {
    setShowSymbolWithId(appName);
  };

  const clearCanvas = () => {
    setPaths([]);
    takeIdOfSelectedSymbol(undefined);
  };

  const apps = InstalledApps.getApps();

  useLayoutEffect(() => {
    if (apps.length > 0) {
      const newSymbolsWithAppNames = apps.map((app) => ({ appName: app.label, symbolPath: [] }));
      setSymbols(newSymbolsWithAppNames);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apps.length]);

  useLayoutEffect(() => {
    const assignedSymbol = symbols.find((item) => item.appName === showSymbolOfSelectedApp)?.symbolPath as IPath[];

    if (showSymbolOfSelectedApp) {
      setPaths(assignedSymbol);
    }
  }, [symbols, symbols.length, showSymbolOfSelectedApp]);

  return (
    <View style={appStyles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={appStyles.statusBar.backgroundColor}
      />
      <View style={appStyles.symbolsContainer}>
        <AvailableAppsContainer
          symbols={symbols}
          setSymbols={setSymbols}
          paths={paths}
          takeIdOfSelectedSymbol={takeIdOfSelectedSymbol}
        />
        <GesturePlayground paths={paths} setPaths={setPaths} />
      </View>
      <ClearButton clearCanvas={clearCanvas} />
    </View>
  );
}

export default App;
