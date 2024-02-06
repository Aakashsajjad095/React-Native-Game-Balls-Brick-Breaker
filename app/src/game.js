// import React, { useState, useEffect, useRef } from 'react';
// import { StyleSheet, Modal } from 'react-native';
// import { GameEngine } from 'react-native-game-engine';
// import {
//   StartGame,
//   MoveBall,
//   SpawnBall,
//   AimBallsStart,
//   AimBallsRelease,
//   CreateBallTail,
//   SpeedUp,
// } from './systems';
// import Utils from './utils';
// import { Config } from './config';



// export default function BouncifyGame(props) {
//   const [running, setRunning] = useState(false);
//   const entities = useRef(Utils.newGameEntities(props.topScore, props.mode));


 





//   useEffect(() => {
   
//     setRunning(props.visible);
//   }, [props.visible]);

//   useEffect(() => {
//     entities.current.scorebar.mode = props.mode;
//     entities.current.scorebar.balls = 1;
//     if (props.mode === Config.MODE_BRICKS) {
//       entities.current.scorebar.balls = 75;
//     }
//   }, [props.mode]);

//   useEffect(() => {
//     entities.current.scorebar.best = props.topScore;
//   }, [props.topScore]);

//   const gameOver = score => {
//     setTimeout(() => {
//       setRunning(false);
//       entities.current.scorebar.level = 0;
//       entities.current.scorebar.balls = 1;
//       if (props.mode === Config.MODE_BRICKS) {
//         entities.current.scorebar.balls = 75;
//       }
//       if (props.onClose) {
//         props.onClose(score);
//       }
//     }, 250);
//   };

//   const handleEvent = ev => {
//     if (ev.type === 'game-over') {
//       gameOver(ev.score);
//     }
//   };

//   return (
//     <Modal transparent={false} animationType="slide" visible={running}>
//       <GameEngine
//         style={styles.container}
//         running={running}
//         onEvent={handleEvent}
//         // Systems are called during the animation loop and responsible for updating the game state (eg, entities)
//         systems={[
//           StartGame,
//           MoveBall,
//           SpawnBall,
//           AimBallsStart,
//           AimBallsRelease,
//           CreateBallTail,
//           SpeedUp,
//         ]}
//         // Entities are the objects in the game. The game emgine will iterate over the objects and call their renderer
//         // during each animation frame. Attributes are passed to each entity as props. This initial list of entities
//         // is below but the bulk of the game happens witin the systems as they add/remove entities based on the
//         // state of the game.
//         entities={entities.current}
//       />
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#202020',
//   },
// });



/**
 * This may be a terrible idea, but trying to build a game in react native that
 * will be fun to play.
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Modal, View, TouchableOpacity, Image } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import {
  StartGame,
  MoveBall,
  SpawnBall,
  AimBallsStart,
  AimBallsRelease,
  CreateBallTail,
  SpeedUp,
} from './systems';
import Utils from './utils/utils';
import { Config } from './config';

export default function BouncifyGame(props) {
  const [running, setRunning] = useState(false);
  const [lastScore, setLastScore] = useState(0);
  const entities = useRef(Utils.newGameEntities(props.topScore, props.mode));

  useEffect(() => {
    setRunning(props.visible);
  }, [props.visible]);

  useEffect(() => {
    entities.current.scorebar.mode = props.mode;
    if (props.mode === Config.MODE_BRICKS) {
      entities.current.scorebar.balls = 75;
    } else {
      entities.current.scorebar.balls = 1;
    }
  }, [props.mode]);

  useEffect(() => {
    entities.current.scorebar.best = props.topScore;
  }, [props.topScore]);

  const gameOver = score => {
    setLastScore(score);

    setTimeout(() => {
      setRunning(false);
      entities.current.scorebar.level = 0;
      entities.current.scorebar.balls = 1;
      if (props.onClose) {
        props.onClose(score);
      }
    }, 250);
  };

  const handleEvent = ev => {
    console.log('ev score is',ev)
    //here i count the best score and average of the user
    if (ev.type === 'game-over') {
      gameOver(ev.score);
    }
  };

  const resetGameState = () => {
    // Reset the entities to their initial state
    entities.current = Utils.newGameEntities(props.topScore, props.mode);
  };


  return (
    <Modal transparent={false} animationType="slide" visible={running}>
      <View  style={styles.container}> 
      <GameEngine
        style={styles.container}
        running={running}
        onEvent={handleEvent}
        // Systems are called during the animation loop and responsible for updating the game state (eg, entities)
        systems={[
          StartGame,
          MoveBall,
          SpawnBall,
          AimBallsStart,
          AimBallsRelease,
          CreateBallTail,
          SpeedUp,
        ]}
        // Entities are the objects in the game. The game emgine will iterate over the objects and call their renderer
        // during each animation frame. Attributes are passed to each entity as props. This initial list of entities
        // is below but the bulk of the game happens witin the systems as they add/remove entities based on the
        // state of the game.
        entities={entities.current}
      />
     

</View>
      <TouchableOpacity style={{ position: 'absolute', top: 55, left: 10, justifyContent: 'center',width:30 }} onPress={() => {
        setRunning(false);
        resetGameState(); // Reset the game state
        props.goHome();
      }}><Image source={require('../res/images/png/arrowback.png')}/></TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
});




