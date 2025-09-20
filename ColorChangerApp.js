import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function ColorChangerApp() {
  const [bgColor, setBgColor] = useState('white'); // default background color

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="White" onPress={() => setBgColor('white')} />
      <View style={{ height: 10 }} /> {/* spacing */}
      <Button title="Light Blue" onPress={() => setBgColor('light blue')} />
      <View style={{ height: 10 }} /> {/* spacing */}
      <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // vertical center
    alignItems: 'center',      // horizontal center
    padding: 20,
  },
});console.log('ColorChangerApp');
