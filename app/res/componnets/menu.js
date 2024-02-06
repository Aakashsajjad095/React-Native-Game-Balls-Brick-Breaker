import { Config } from '../../src/config';

import React, { PureComponent } from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import * as Animatable from 'react-native-animatable';
import { sizeFont, sizePadding } from '../../src/utils/sizeUtils';
import { SizeBox } from '../layouts';
import { darkTheme } from '../globalStyles/Color';

export default class MainMenu extends PureComponent {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        {this.props.gamesPlayed === 0 && (
          <Animatable.View
            animation="pulse"
            iterationCount="infinite"
            direction="alternate">
            <Image style={styles.logoStyle} source={require('../images/logo/startIcon.png')} />
          </Animatable.View>
        )}
        {this.props.gamesPlayed > 0 && (
          <View style={styles.cardContainer}>
            <Text style={styles.heading}>Scores</Text>
            <View style={styles.scoreCardRow}>
              <ScoreCardItem label="Last Score" value={this.props.lastScore} />
              <ScoreCardItem label="Best Lines" value={this.props.topScore} />
              <ScoreCardItem label="Best Bricks" value={this.props.topScoreBricks} />
            </View>
          </View>
        )}

        <SizeBox style={{ height: 30 }} />

        <View style={styles.buttonContainer}>
          {this.props.gamesPlayed > 0 ? (
            <AwesomeButton
              backgroundColor={darkTheme.greenPrimary}
              backgroundPlaceholder={darkTheme.greenPrimary}
              borderRadius={sizePadding(30)}
              textSize={sizeFont(20)}
              paddingHorizontal={sizePadding(60)}
              onPress={() => this.props.onPlayGame(Config.MODE_LINES)}>
              {'Restart Lines'}
            </AwesomeButton>
          ) : null}
          
          {this.props.gamesPlayed < 1 ?(
            <AwesomeButton
              backgroundColor={darkTheme.greenPrimary}
              backgroundPlaceholder={darkTheme.greenPrimary}
              borderRadius={sizePadding(30)}
              textSize={sizeFont(20)}
              paddingHorizontal={sizePadding(60)}
              onPress={() => this.props.onPlayGame(Config.MODE_LINES)}>
              {'Play Lines'}
            </AwesomeButton>
          ):null}

          <SizeBox style={{ height: 30 }} />

          {this.props.gamesPlayed > 0 ? (
            <AwesomeButton
              backgroundColor={darkTheme.buttonPrimary}
              backgroundPlaceholder={darkTheme.buttonPrimary}
              borderRadius={sizePadding(30)}
              textSize={sizeFont(20)}
              paddingHorizontal={sizePadding(60)}
              onPress={() => this.props.onPlayGame(Config.MODE_BRICKS)}>
              {'Restart Bricks'}
            </AwesomeButton>
          ) :null}
          
          {this.props.gamesPlayed < 1 ? (
            <AwesomeButton
              backgroundColor={darkTheme.buttonPrimary}
              backgroundPlaceholder={darkTheme.buttonPrimary}
              borderRadius={sizePadding(30)}
              textSize={sizeFont(20)}
              paddingHorizontal={sizePadding(60)}
              onPress={() => this.props.onPlayGame(Config.MODE_BRICKS)}>
              {'Play Bricks'}
            </AwesomeButton>
          ):null}

          <SizeBox style={{ height: 30 }} />

          {this.props.gamesPlayed > 0 && (
            <AwesomeButton
              backgroundColor={darkTheme.backButton}
              backgroundPlaceholder={darkTheme.backButton}
              borderRadius={sizePadding(30)}
              textSize={sizeFont(20)}
              paddingHorizontal={sizePadding(60)}
              onPress={() => this.props.backToHome(Config.MODE_BRICKS)}>
              {'Back To Home'}
            </AwesomeButton>
          )}
        </View>
      </ScrollView>
    );
  }
}

const ScoreCardItem = ({ label, value }) => {
  return (
    <View style={styles.scoreCardItem}>
      <Text style={styles.scoreLabel}>{label}</Text>
      <Animatable.Text
        style={styles.scoreValue}
        animation="fadeIn"
        iterationCount="infinite"
        direction="alternate">
        {value}
      </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkTheme.background,
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  logoStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: sizePadding(250),
    width: sizePadding(240),
  },
  cardContainer: {
    backgroundColor: darkTheme.cardBackground,
    borderRadius: sizePadding(10),
    padding: sizePadding(20),
    alignItems: 'center',
    marginBottom: sizePadding(20),
  },
  heading: {
    fontSize: sizeFont(20),
    color: darkTheme.primary,
    fontWeight: 'bold',
    marginBottom: sizePadding(10),
  },
  scoreCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scoreCardItem: {
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: sizeFont(13),
    color: darkTheme.secondaryText,
    marginBottom: sizePadding(5),
    marginHorizontal:sizePadding(10),
    fontWeight: 'bold',
  },
  scoreValue: {
    fontSize: sizeFont(24),
    color: darkTheme.primary,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});







// import React, { PureComponent } from 'react';
// import { ScrollView, View, StyleSheet, Image,Text } from 'react-native';
// import AwesomeButton from 'react-native-really-awesome-button';
// import { Config } from '../../src/config';
// import * as Animatable from 'react-native-animatable';
// import { sizeFont, sizePadding } from '../../src/utils/sizeUtils';
// import { SizeBox } from '../layouts';
// import { darkTheme } from '../globalStyles/Color';

// export default class MainMenu extends PureComponent {
//   render() {
//     return (
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={styles.contentContainer}>
//         {this.props.gamesPlayed === 0 && (
//           <Animatable.View
//             animation="pulse"
//             iterationCount="infinite"
//             direction="alternate">
//             <Image style={styles.logoStyle} source={require('../images/logo/startIcon.png')}/>
//           </Animatable.View>
//         )}
//         {this.props.gamesPlayed > 0 && (
//         <View style={styles.scoreCardContainer}>
//           <ScoreCardItem
//             label="Last Score"
//             value={this.props.lastScore}
//           />
//           <ScoreCardItem
//             label="Best Lines"
//             value={this.props.topScore}
//           />
//           <ScoreCardItem
//             label="Best Bricks"
//             value={this.props.topScoreBricks}
//           />
//         </View>
//         )}


//         {/* <Button onPress={_ => this.props.onPlayGame(Config.MODE_LINES)}>
//           {this.props.gamesPlayed ? 'Restart Lines' : 'Play Lines'}
//         </Button> */}
//         <SizeBox style={{ height: 10 }} />

//         {this.props.gamesPlayed > 0 ?
//         <AwesomeButton
//           backgroundColor={darkTheme.greenPrimary} // Custom background color
//           backgroundPlaceholder={darkTheme.greenPrimary} // Custom background color for placeholder state
//           borderRadius={sizePadding(30)}
//           textSize={sizeFont(20)}
//           paddingHorizontal={sizePadding(60)}
//           onPress={_ => this.props.onPlayGame(Config.MODE_LINES)}
//         >
//           {'Restart Lines'}
//         </AwesomeButton>:null}


//         {this.props.gamesPlayed < 1 ?
//         <AwesomeButton
//           backgroundColor={darkTheme.greenPrimary} // Custom background color
//           backgroundPlaceholder={darkTheme.greenPrimary} // Custom background color for placeholder state
//           borderRadius={sizePadding(30)}
//           textSize={sizeFont(20)}
//           paddingHorizontal={sizePadding(60)}
//           onPress={_ => this.props.onPlayGame(Config.MODE_LINES)}
//         >
//           {'Play Lines'}
//         </AwesomeButton>:null}



// <SizeBox style={{height:40}}/>
//         {this.props.gamesPlayed>0?
//         <AwesomeButton
//           backgroundColor={darkTheme.buttonPrimary}// Custom background color
//           backgroundPlaceholder={darkTheme.buttonPrimary} // Custom background color for placeholder state
//           borderRadius={sizePadding(30)}
//           textSize={sizeFont(20)}
//           paddingHorizontal={sizePadding(60)}
//           onPress={_ => this.props.onPlayGame(Config.MODE_BRICKS)}
//         >
//           {'Restart Bricks'}
//         </AwesomeButton>:null}

//         {this.props.gamesPlayed < 1 ?
//         <AwesomeButton
//           backgroundColor={darkTheme.buttonPrimary}// Custom background color
//           backgroundPlaceholder={darkTheme.buttonPrimary} // Custom background color for placeholder state
//           borderRadius={sizePadding(30)}
//           textSize={sizeFont(20)}
//           paddingHorizontal={sizePadding(60)}
//           onPress={_ => this.props.onPlayGame(Config.MODE_BRICKS)}
//         >
//           {'Play Bricks'}
//         </AwesomeButton>:null}


//         <SizeBox style={{ height: 40 }} />

//         {this.props.gamesPlayed>0?
//         <AwesomeButton
//             backgroundColor={darkTheme.backButton}// Custom background color
//             backgroundPlaceholder={darkTheme.backButton} // Custom background color for placeholder state
//           borderRadius={sizePadding(30)}
//           textSize={sizeFont(20)}
//           paddingHorizontal={sizePadding(60)}
//           onPress={_ => this.props.backToHome(Config.MODE_BRICKS)}
//         >
//           {'Back To Home'}
//         </AwesomeButton>:null}



//         {/* <AwesomeButton borderRadius={sizePadding(100)}>
//           <Image source={require('../images/profiles/davel.png')} />
//         </AwesomeButton> */}


//         {/* <Button onPress={_ => this.props.onPlayGame(Config.MODE_BRICKS)}>
//           {this.props.gamesPlayed ? 'Restart Bricks' : 'Play Bricks'}
//         </Button> */}
//         {/* <Item
//           onPress={_ =>
//             Linking.openURL('https://github.com/jmwind/bouncifyrn')
//           }>
//           ❤️ @Aakash Sajjad 🙃
//         </Item> */}
//       </ScrollView>
//     );
//   }
// }

// const ScoreCardItem = ({ label, value }) => {
//   return (
//     <View style={styles.scoreCardItem}>
//       <Text style={styles.scoreLabel}>{label}</Text>
//       <Animatable.Text
//         style={styles.scoreValue}
//         animation="fadeIn"
//         iterationCount="infinite"
//         direction="alternate">
//         {value}
//       </Animatable.Text>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: '#000',
//   },
//   contentContainer: {
//     // maxWidth: 400,
//     flexGrow: 1,
//     flexDirection: 'column',
//     // justifyContent: 'center',
//     // alignSelf: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     marginTop: 10,
//     marginBottom: 10,
//     marginLeft: 30,
//     marginRight: 30,
//     fontSize: 70,
//     color: '#FFF',
//   },
//   logoStyle:{
// justifyContent:'center',
// alignItems:'center',
// height:sizePadding(250),
// width:sizePadding(240)
//   },
//   score: {
//     marginTop: 3,
//     marginBottom: 3,
//     marginLeft: 30,
//     marginRight: 30,
//     fontSize: 24,
//     color: '#FFF',
//   },
//   lastScore: {
//     marginTop: 3,
//     marginBottom: 3,
//     marginLeft: 30,
//     marginRight: 30,
//     fontSize: 52,
//     color: '#FFF',
//   },
//   textContainer: {
//     alignItems: 'center',
//   },

//   scoreCardContainer: {
//     backgroundColor: darkTheme.cardBackground,
//     borderRadius: sizePadding(10),
//     padding: sizePadding(20),
//     alignItems: 'center',
//   },
//   scoreCardItem: {
//     marginBottom: sizePadding(20),
//     alignItems: 'center',
//   },
//   scoreLabel: {
//     fontSize: sizeFont(18),
//     color: darkTheme.secondaryText,
//     marginBottom: sizePadding(5),
//     fontWeight: 'bold',
//   },
//   scoreValue: {
//     fontSize: sizeFont(24),
//     color: darkTheme.primary,
//   },

// });



