import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { sizePadding } from '../../../src/utils/sizeUtils'
import { darkTheme } from '../../globalStyles/Color'


interface RoundImageProps{
    source?:String
}

const RoundImage: React.FC<RoundImageProps> = ({ source }) => {
  return (
    <View style={styles.container}> 
          <Image style={styles.imageStyle} source={require('../../images/profiles/davel.png')} />
    </View>
  )
}

export default RoundImage

const styles = StyleSheet.create({
    container:{
        height:sizePadding(35),
        width:sizePadding(35),
        borderRadius:sizePadding(30),
        // backgroundColor:darkTheme.primary

    },
    imageStyle:{
      flex:1
    }
})