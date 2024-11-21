import { View, Text, Linking, Button, StyleSheet } from 'react-native'
import React from 'react'

export default function about() {
  const openLink = () => {
    const url = 'https://github.com/joaopabdala';
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>João Paulo Abdala</Text>
      <Button title="github" onPress={openLink}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 40
  },
  text:{
    alignSelf: 'center'
  }
})