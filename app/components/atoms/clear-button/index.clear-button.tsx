import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const appStyles = StyleSheet.create({
  clearButton: {
    color: '#263238',
    width: '100%',
    backgroundColor: '#03a9f4',
    textAlign: 'center',
    fontSize: 30,
    padding: 10
  }
});

export const ClearButton = ({ clearCanvas }: { clearCanvas: () => void }) => {
  return (
    <TouchableOpacity onPress={clearCanvas}>
      <Text style={appStyles.clearButton}>Clear</Text>
    </TouchableOpacity>
  );
};
