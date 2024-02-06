import React from 'react';
import { COLORS, COLORSA, COLORSB, Config } from '../config';
import { Floor, ScoreBar, Ball, SpeedUpButton } from '../renderers';
import { Dimensions } from 'react-native';

const getDistance = (p1, p2) => {
  return Math.sqrt(
    Math.abs(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)),
  );
};

const getPointsDeltas = (p1, p2) => {
  return {x: p2.x - p1.x, y: p2.y - p1.y};
};

const clonePosition = position => {
  return {x: position.x, y: position.y};
};

const newPosition = (x_val, y_val) => {
  return {x: x_val, y: y_val};
};

const randomValue = (min, max) => {
  return Math.random() * (max - min) + min;
};

const randomValueRounded = (min, max) => {
  return Math.round(randomValue(min, max));
};

const randomRoll = percent => {
  return randomValueRounded(1, 100) <= percent;
};

const randomKey = () => {
  return (Math.random() + 1).toString(36).substring(7);
};

const colToLeftPosition = col => {
  return (
    Config.BOX_TILE_SPACE +
    (col * Config.BOX_TILE_SPACE + col * Config.BOX_TILE_SIZE)
  );
};

const rowToTopPosition = row => {
  return (
    Config.SCOREBOARD_HEIGHT +
    Config.BOX_TILE_SPACE +
    (row * Config.BOX_TILE_SPACE + row * Config.BOX_TILE_SIZE)
  );
};

const hitsToColor = hits => {
  if (hits <= 10) {
    return COLORS[0];
  } else if (hits <= 20) {
    return COLORS[1];
  } else if (hits <= 30) {
    return COLORS[2];
  } else if (hits <= 50) {
    return COLORS[3];
  } else if (hits <= 99) {
    return COLORS[4];
  } else if (hits <= 150) {
    return COLORS[5];
  }
  return COLORS[6];
};


const hitsToColorGradientA = hits => {
  if (hits <= 5) {
    return COLORSA[0];
  } else if (hits <= 20) {
    return COLORSA[1];
  } else if (hits <= 30) {
    return COLORSA[2];
  } else if (hits <= 50) {
    return COLORSA[3];
  } else if (hits <= 99) {
    return COLORSA[4];
  } else if (hits <= 150) {
    return COLORSA[5];
  }
  return COLORSA[6];
};
const hitsToColorGradientB = hits => {
  if (hits <= 5) {
    return COLORSB[0];
  } else if (hits <= 20) {
    return COLORSB[1];
  } else if (hits <= 30) {
    return COLORSB[2];
  } else if (hits <= 50) {
    return COLORSB[3];
  } else if (hits <= 99) {
    return COLORSB[4];
  } else if (hits <= 150) {
    return COLORSB[5];
  }
  return COLORSB[6];
};


const newGameEntities = (topScore, mode) => {
  return {
    floor: {
      total_hits: 0,
      height: Config.FLOOR_HEIGHT,
      renderer: <Floor />,
    },
    scorebar: {
      height: Config.SCOREBOARD_HEIGHT,
      best: topScore,
      mode: mode,
      state: Config.STOPPED,
      level: 0,
      balls: 1,
      new_balls: 0,
      balls_in_play: 0,
      score: 0,
      renderer: <ScoreBar />,
    },
    ball: {
      color: 'white',
      state: Config.STOPPED,
      start: newPosition(300, Config.FLOOR_HEIGHT - Config.RADIUS * 2),
      position: newPosition(300, Config.FLOOR_HEIGHT - Config.RADIUS * 2),
      speed: newPosition(1.0, 1.0),
      direction: newPosition(0, 0),
      renderer: <Ball />,
    },
    speedbutton: {
      available: false,
      speed: 1,
      row: 0,
      column: 7,
      renderer: <SpeedUpButton />,
    },
  };
};

const initializeGameSizing = () => {
  let width = Dimensions.get('window').width;
  let height = Dimensions.get('window').height;
  Config.FLOOR_HEIGHT = height - Config.FLOOR_HEIGHT_SIZE;
  Config.BOX_TILE_SIZE =
    (width - (Config.COLUMS + 1) * Config.BOX_TILE_SPACE) / Config.COLUMS;
  // top and bottom rows can't have boxes so substract 2 from available space
  Config.ROWS =
    Math.floor(
      (Config.FLOOR_HEIGHT - Config.SCOREBOARD_HEIGHT) /
        (Config.BOX_TILE_SIZE + Config.BOX_TILE_SPACE),
    ) - 2;
};

export default {
  getDistance,
  getPointsDeltas,
  clonePosition,
  newPosition,
  randomValue,
  randomValueRounded,
  randomRoll,
  randomKey,
  colToLeftPosition,
  rowToTopPosition,
  hitsToColor,
  hitsToColorGradientA,
  hitsToColorGradientB,
  newGameEntities,
  initializeGameSizing,
};



