import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Canvas, Path } from '@shopify/react-native-skia';

interface IPath {
  segments: String[];
  color?: string;
}

const gesturesStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  canvasContainer: {
    flex: 1,
    backgroundColor: '#fff59d'
  },
  canvas: {
    flex: 8
  }
});

export const GesturePlayground = ({
  paths,
  setPaths
}: {
  paths: IPath[];
  setPaths: React.Dispatch<React.SetStateAction<IPath[]>>;
}) => {
  const pan = Gesture.Pan()
    .onStart((gesture) => {
      const newPaths = [...paths];
      newPaths[paths.length] = {
        segments: [],
        color: '#06d6a0'
      };
      newPaths[paths.length].segments.push(`M ${gesture.x} ${gesture.y}`);
      setPaths(newPaths);
    })
    .onUpdate((gesture) => {
      const index = paths.length - 1;
      const newPaths = [...paths];
      if (newPaths?.[index]?.segments) {
        newPaths[index].segments.push(`L ${gesture.x} ${gesture.y}`);
        setPaths(newPaths);
      }
    })
    .minDistance(1);

  return (
    <GestureHandlerRootView style={gesturesStyles.container}>
      <GestureDetector gesture={pan}>
        <View style={gesturesStyles.canvasContainer}>
          <Canvas style={gesturesStyles.canvas}>
            {paths.map((path, index) => (
              <Path key={index} path={path.segments.join(' ')} strokeWidth={5} style="stroke" color={path.color} />
            ))}
          </Canvas>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};
