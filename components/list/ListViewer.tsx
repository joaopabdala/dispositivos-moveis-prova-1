import { View, Text, SectionList, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import listCategoriesHelper from '../../services/list-categories-helper';

export default function ListViewer({data}) {
  
  const DATA = listCategoriesHelper(data);
  return (

    

    <SectionList  
      sections={DATA}
      keyExtractor={(item, index) => item.passenger_name + index}
      renderItem={({item}) => (
        <View
          style={styles.container}
          >
          <Text
          style={styles.infoTitles}
          >Nome: </Text>
          <Text style={styles.infoText}>{item.passenger_name}</Text>
          <Image 
            source={{uri:(item.passenger_avatar)}}
            style={styles.avatar}  
              >

          </Image>
          <Text style={styles.infoTitles}>Origem:</Text>
          <Text style={styles.infoText}>{item.origin}</Text>
          <Text style={styles.infoTitles}>Destino:</Text>
          <Text style={styles.infoText}>{item.destination}</Text>
      </View>
      )}
      renderSectionHeader={({ section: { category } }) => (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{category}</Text>
        </View>
      )}
    />

  )
}

const styles = StyleSheet.create({
  titleContainer:{
    alignContent:'center'
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  container:{
    padding: 10
  },
  infoTitles:{
    fontWeight: 'bold'
  },
  infoText:{

  },
  avatar: {
    width: 70,
    height: 70,
    marginBottom: 10
  },
})