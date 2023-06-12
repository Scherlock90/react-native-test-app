import React, { useLayoutEffect, useState } from 'react';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';

import { type AppDetail } from 'react-native-launcher-kit/typescript/Interfaces/InstalledApps';

const styles = {
  container: {
    flex: 0.3,
    display: 'flex'
  },
  appContainer: {
    backgroundColor: '#fff9c4',
    flex: 1
  },
  appName: {
    fontSize: 18,
    padding: 1,
    margin: 10,
    color: '#03a9f4'
  },
  canvas: {
    flex: 1,
    backgroundColor: 'red',
    height: 100
  },
  pathToSymbol: {
    fontSize: 14,
    padding: 1,
    margin: 5,
    textAlign: 'center'
  }
} as const;

interface IPath {
  segments: String[];
  color?: string;
}

export const AvailableAppsContainer = ({
  paths,
  symbols,
  setSymbols,
  takeIdOfSelectedSymbol
}: {
  paths: IPath[];
  symbols: { appName: AppDetail['label']; symbolPath: IPath[] }[];
  setSymbols: React.Dispatch<
    React.SetStateAction<
      {
        appName: AppDetail['label'];
        symbolPath: IPath[];
      }[]
    >
  >;
  takeIdOfSelectedSymbol: (appName: string) => void;
}) => {
  const [showAppContainer, setshowAppContainer] = useState(false);

  useLayoutEffect(() => {
    if (symbols.length > 0) {
      setshowAppContainer(true);
    }
  }, [symbols.length]);

  if (!showAppContainer) {
    return <Text>No apss found</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.appContainer}
        data={symbols}
        renderItem={({ item }) => (
          <View key={item.appName}>
            <TouchableOpacity>
              <Text
                style={styles.appName}
                onPress={() => {
                  setSymbols((prevState) =>
                    prevState.map((symbol) =>
                      symbol.appName === item.appName ? { ...symbol, symbolPath: paths } : symbol
                    )
                  );
                }}>
                {item.appName}
              </Text>
            </TouchableOpacity>
            <View>
              {item.symbolPath.length > 0 ? (
                <Button title="Show Symbol" onPress={() => takeIdOfSelectedSymbol(item.appName)} />
              ) : (
                <Text style={styles.pathToSymbol}>No path found</Text>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};
