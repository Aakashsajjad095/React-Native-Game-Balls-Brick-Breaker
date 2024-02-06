import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { darkTheme } from '../../globalStyles/Color';
import { sizeFont, sizePadding } from '../../../src/utils/sizeUtils';
import appTheme from '../../globalStyles/ThemeSizes';
import { PositionAbsolute } from '../../layouts';
import AwesomeButton from 'react-native-really-awesome-button';


interface RewardModalProps {
    isVisible?: boolean;
    onPress?: () => void;
    data?: { type: "coins" | "diamonds" | null; amount: number | null };
}

const RewardModal: React.FC<RewardModalProps> = ({ isVisible, onPress, data }) => {

    console.log('data in model component', data)

  return (
      <Modal
          testID={'modal'}
          isVisible={isVisible}
        //   backdropColor="#B4B3DB"
          backdropOpacity={0.4}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}>
          <View style={styles.container}>
              <Text style={styles.title}>Congratulations</Text>
              <Image style={styles.iconStyle} source={(data?.type === "diamonds" ? require('../../images/png/dimand.png') : require('../../images/png/coins.png')) as any} />

              <Text style={[styles.title, { ...appTheme.FONTS.bodyRegular1, textAlign: 'left' }]}>You've earned a valuable {data?.type === "diamonds" ? 'diamond' :' Coin '} reward for your excellent performance. Keep up the great work!</Text>


              <AwesomeButton
              style={{marginTop:sizePadding(10)}}
                  backgroundColor={darkTheme.greenPrimary} // Custom background color
                  backgroundPlaceholder={darkTheme.greenPrimary} // Custom background color for placeholder state
                  borderRadius={sizePadding(30)}
                  textSize={sizeFont(15)}
                  paddingHorizontal={sizePadding(60)}
                  onPress={onPress}
              >
                 Collect
              </AwesomeButton>

              <PositionAbsolute style={{top:sizePadding(-50),right:sizePadding(-20)}}>
                <Image source={require('../../images/png/confetti.png')}/>
              </PositionAbsolute>
         </View>
      </Modal>
  )
}

export default RewardModal

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:darkTheme.backgroundSecondary,
        padding:sizePadding(20),
        borderRadius:sizePadding(10)
    },
    title:{
        ...appTheme.FONTS.hBold3,
        color: darkTheme.secondaryText,
        padding:sizePadding(10),
        marginTop:sizePadding(5)
    },
    iconStyle:{
        height:sizePadding(40),
        width:sizePadding(40)
    }
})