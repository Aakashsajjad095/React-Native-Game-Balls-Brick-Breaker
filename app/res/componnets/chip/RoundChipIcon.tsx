import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { sizePadding } from '../../../src/utils/sizeUtils'
import { darkTheme } from '../../globalStyles/Color'
import appTheme from '../../globalStyles/ThemeSizes'
import { Row } from '../../layouts'

const RoundChipIcon = ({source,contentColor,reward}) => {
  return (
    <View style={[styles.container, { borderColor: contentColor }]}>
      <Row>
        <Text style={styles.chipTitleStyle}>{reward}</Text>
        <Image style={styles.iconStyle} source={source} />
      </Row>
     
    </View>
  )
}

export default RoundChipIcon

const styles = StyleSheet.create({
  container:{
    backgroundColor:darkTheme.backgroundPrimary,
    borderRadius:sizePadding(30),
    // padding:sizePadding(5),
    paddingHorizontal:sizePadding(12),
    borderWidth:1,
    justifyContent:'center'
  },
  chipTitleStyle:{
    color:darkTheme.secondaryText,
    ...appTheme.FONTS.bodyMedium1

  },
  iconStyle:{
    margin:sizePadding(3),
    marginLeft:sizePadding(4),
    height:sizePadding(13),
    width:sizePadding(13)
  }

})