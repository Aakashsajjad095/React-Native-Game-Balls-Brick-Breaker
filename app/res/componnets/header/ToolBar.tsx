import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { dimentionWidth, sizeHeight, sizePadding } from '../../../src/utils/sizeUtils'
import { Row } from '../../layouts'
import { darkTheme } from '../../globalStyles/Color'


 interface ToolBarProps {
   leftContent?:React.ReactNode,
   rightContent?: React.ReactNode,
   midContent?: React.ReactNode

}

const ToolBar:React.FC<ToolBarProps> = ({leftContent,rightContent,midContent}) => {
  return (
    <View style={styles.toolbarContainer}>
      <Row style={{ justifyContent: 'space-between' }}>
              {leftContent ? leftContent:<Text></Text>}
              <Text>{midContent}</Text>
              {rightContent ? rightContent : <Text></Text>}
        </Row>
    </View>
  )
}

export default ToolBar

const styles = StyleSheet.create({
    toolbarContainer:{
        width:dimentionWidth(),
        height:sizeHeight(60),
        justifyContent:'center',
        paddingHorizontal:sizePadding(10),
        backgroundColor:darkTheme.backgroundSecondary
    }
})