import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

export default function App() {
  const [thingToSay, setThingToSay] = useState('');
  const speak = () => {
    Speech.speak(thingToSay);
  }
  return (
    <View style={styles.container}>
      <TextInput 
      style={{borderWidth:1, 
      borderColor:'black', 
      width:200, 
      height:50}} 
      value={thingToSay} 
      onChangeText={(thingToSay) => setThingToSay(thingToSay)}>
      </TextInput>
      <View style={{padding:10}}> 
      <Button title="press to hear text" onPress={speak}> </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
