//convert this code to function and typescript
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import BouncifyGame from '../../game';
import MainMenu from '../../../res/componnets/menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Config } from '../../config';
import { darkTheme } from '../../../res/globalStyles/Color';
import ToolBar from '../../../res/componnets/header/ToolBar';
import RoundChipIcon from '../../../res/componnets/chip/RoundChipIcon';
import { Row, SafeAreaContainer, SizeBox } from '../../../res/layouts';
import appTheme from '../../../res/globalStyles/ThemeSizes';
import RoundImage from '../../../res/componnets/images/RoundImage';
import { sizePadding } from '../../utils/sizeUtils';
import RewardModal from '../../../res/componnets/modal/RewardModal';

const TOP_SCORE_KEY = 'topScore';
const TOP_SCORE_BRICKS_KEY = 'topScoreBricks';
const TOTAL_COINS = 'totalCoins';
const TOTAL_DIMONDS = 'totalDimonds';

interface State {
  gameStarted: boolean;
  lastScore: number;
  topScore: number;
  topScoreBricks: number;
  gamesPlayed: number;
  totalCoins:number;
  totalDiamonds:number;
  mode: string; // Change this type to match your Config.MODE_LINES type
}

interface RewardResult {
  amount: number;
  type: 'diamonds' | 'coins' | null;
}
interface Rewards {
  diamonds: number;
  coins: number;
}

const Home: React.FC = () => {
  const [state, setState] = useState < State > ({
    gameStarted: false,
    lastScore: 0,
    topScore: 0,
    topScoreBricks: 0,
    gamesPlayed: 0,
    totalCoins:0,
    totalDiamonds:0,
    mode: Config.MODE_LINES,
  });


  const [reward, setReward] = useState<{ type: 'coins' | 'diamonds' | null; amount: number | 0 }>({ type: null, amount: 0 });

  const [isRewardedVisible, setIsRewardedVisible]=useState(false)

  useEffect(() => {
    const fetchTopScores = async () => {
const totalCoins = await AsyncStorage.getItem(TOTAL_COINS);
const totalDiamonds = await AsyncStorage.getItem(TOTAL_DIMONDS);

      console.log('data in useEffect', Number(totalDiamonds ? totalDiamonds : 0));

setState((prevState) => ({
  ...prevState,
  totalCoins: Number(totalCoins ? totalCoins:0),
  totalDiamonds: Number(totalDiamonds ? totalDiamonds: 0),
}));
      const topScoreVal = await AsyncStorage.getItem(TOP_SCORE_KEY);
      if (topScoreVal !== null) {
        setState((prevState) => ({
          ...prevState,
          topScore: parseInt(topScoreVal),
        }));
      }

      const topScoreBricksVal = await AsyncStorage.getItem(TOP_SCORE_BRICKS_KEY);
      if (topScoreBricksVal !== null) {
        setState((prevState) => ({
          ...prevState,
          topScoreBricks: parseInt(topScoreBricksVal),
        }));
      }
    };

    fetchTopScores();
  }, []);

  const toggleGame = (gameStarted: boolean, lastScore: number, mode: string) => {
    setState((prevState) => ({
      ...prevState,
      gameStarted,
      mode,
    }));

    if (!gameStarted) {
      setState((prevState) => ({
        ...prevState,
        gamesPlayed: prevState.gamesPlayed + 1,
        lastScore,
      }));

      if (mode === Config.MODE_LINES && lastScore > state.topScore) {
        setState((prevState) => ({
          ...prevState,
          topScore: lastScore,
        }));
        AsyncStorage.setItem(TOP_SCORE_KEY, lastScore.toString());
      } else if (mode === Config.MODE_BRICKS && lastScore > state.topScoreBricks) {
        setState((prevState) => ({
          ...prevState,
          topScoreBricks: lastScore,
        }));
        AsyncStorage.setItem(TOP_SCORE_BRICKS_KEY, lastScore.toString());
      }

      console.log('sore is', lastScore)
      calculateRewards(lastScore, state.topScoreBricks,state.topScore)
    }
  };



  function calculateRewards(lastScore: number, bestBricks: number, topScore: number): RewardResult {
    let totalRewards = 0;
    let rewardType: 'diamonds' | 'coins' | null = null;

    // Rewards configuration (customize as needed)
    const rewards: Rewards = {
      diamonds: 1, // Reward amount for diamonds
      coins: 1,    // Reward amount for coins
    };

    if (lastScore >topScore) {
      totalRewards += rewards.diamonds;
      rewardType = 'diamonds';
    } else if (lastScore > bestBricks) {
      totalRewards += rewards.diamonds;
      rewardType = 'coins';
    } 
    // else {
    //   totalRewards += rewards.coins;
    //   rewardType = 'coins';
    // }

    // return { amount: totalRewards, type: rewardType };
    if (totalRewards>0){
      setReward({ amount: totalRewards, type: rewardType })
      setIsRewardedVisible(true)
    }
   
    console.log('reward is', { amount: totalRewards, type: rewardType })
  }


  const {
    gamesPlayed,
    lastScore,
    topScore,
    topScoreBricks,
    gameStarted,
    mode,
    totalDiamonds,
    totalCoins
  } = state;

  return (
   <SafeAreaContainer>
      <ToolBar rightContent={
        <Row>
          <RoundChipIcon source={require('../../../res/images/png/dimand.png')} contentColor={darkTheme.primary} reward={totalDiamonds} />
         <SizeBox/>
          <RoundChipIcon source={require('../../../res/images/png/coins.png')} contentColor={darkTheme.orangeyYellow} reward={totalCoins} /> 
        </Row>}
        leftContent={<Row>
          <RoundImage/>
          <SizeBox />
          <Text style={{ color: darkTheme.secondaryText, ...appTheme.FONTS.hMedium5,marginTop:sizePadding(2) }}>Player</Text></Row>}
        />
      <MainMenu
        onPlayGame={(new_mode) => toggleGame(true, lastScore, new_mode)}
        gamesPlayed={gamesPlayed}
        lastScore={lastScore}
        topScore={topScore}
        topScoreBricks={topScoreBricks}
        backToHome={(new_mode) => setState((prev)=>({
          ...prev,
          gamesPlayed:0
        }))}
      />
      <BouncifyGame
        visible={gameStarted}
        topScore={mode === Config.MODE_LINES ? topScore : topScoreBricks}
        mode={mode}
        onClose={(lastScoreEvent) => toggleGame(false, lastScoreEvent, mode)}
        goHome={()=>{
          setState((prev) => ({
            ...prev,
            gameStarted: false,
            mode: mode,
          }))
        }}
      />


<RewardModal 
        isVisible={isRewardedVisible}
        onPress={()=>{
          if (reward?.type === 'coins') {
            let coins = (reward?.amount + (totalCoins ?? 0)).toString();
            console.log('coins is', coins);
            AsyncStorage.setItem(TOTAL_COINS, coins);
            setState((prevState) => ({
              ...prevState,
              totalCoins: parseInt(coins),
            }));
          } else {
            let diamond = (reward?.amount + (totalDiamonds ?? 0)).toString();
            console.log('dimond is', diamond);
            AsyncStorage.setItem(TOTAL_DIMONDS, diamond);
            setState((prevState) => ({
              ...prevState,
              totalDiamonds: parseInt(diamond),
            }));
          }
          setIsRewardedVisible(false)
        }}
        data={reward}
/>

    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:darkTheme.backgroundPrimary,
  },
});

export default Home;
