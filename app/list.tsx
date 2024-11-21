import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import DATA from "../services/data-passengers";
import ListViewer from "../components/list/ListViewer";

export default function list() {
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>

      <Text
        style={styles.title}
        >Vôos</Text> 
        </View>
      <ListViewer data={DATA} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    alignSelf:'center',
    backgroundColor: 'orange'
  },
  titleContainer:{
    backgroundColor: 'orange',
    marginBottom: 10
  }
})