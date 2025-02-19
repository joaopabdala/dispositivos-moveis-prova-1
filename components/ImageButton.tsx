import { View, Text, Button, Image, ImageSourcePropType, TouchableOpacity, StyleSheet, StyleSheetProperties, ImageStyle } from 'react-native'
import React from 'react'

type ImageButtonProps = {
  onPress: ()  => void,
  image: ImageSourcePropType,
  style: ImageStyle,
  testID?: string 
}


export default function ImageButton({
  testID,
  onPress,
  image,
  style
}: ImageButtonProps) {
  return (
    <View>
      <TouchableOpacity
        testID={testID}
        onPress={onPress}
      >

      <Image
        style={style}
        source={image}
        ></Image>
        </TouchableOpacity>
    </View>
  )
}

