import { View, Text, Button, Image, ImageSourcePropType, TouchableOpacity, StyleSheet, StyleSheetProperties, ImageStyle } from 'react-native'
import React from 'react'

type ImageButtonProps = {
  onPress: ()  => void,
  image: ImageSourcePropType,
  style: ImageStyle
}


export default function ImageButton({
  onPress,
  image,
  style
}: ImageButtonProps) {
  return (
    <View>
      <TouchableOpacity
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

