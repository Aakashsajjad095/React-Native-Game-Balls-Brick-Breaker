import * as React from 'react';
import { Animated, Easing } from 'react-native';
import BoxPiece from './boxpiece';
import { Config } from '../../src/config';
import utils from '../../src/utils/utils';

class Explosion extends React.PureComponent {
  animation = new Animated.Value(0);

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount = () => {
    this.calculateItems();
    setTimeout(() => {
      this.animate();
    }, 50);
  };

  calculateItems = () => {
    const {count, origin, backgroundColor} = this.props;
    const items = [];
    // Pixelize the box tile into small blocks that will be part of
    // explosion
    Array.from(Array(count).keys()).forEach(() => {
      const item = {
        backgroundColor: backgroundColor,
        left: utils.randomValue(
          origin.x - 15,
          origin.x + Config.BOX_TILE_SIZE + 15,
        ),
        top: utils.randomValue(
          origin.y - 15,
          origin.y + Config.BOX_TILE_SIZE + 15,
        ),
        width: utils.randomValue(2, 10),
        height: utils.randomValue(2, 10),
      };
      items.push(item);
    });

    this.setState({
      items,
    });
  };

  componentWillUnmount = () => {
    if (this.exploAnimation) {
      this.exploAnimation.stop();
    }
  };

  animate = () => {
    const {fallSpeed = 300} = this.props;
    this.exploAnimation = Animated.timing(this.animation, {
      toValue: 1,
      duration: fallSpeed,
      easing: Easing.linear,
    });
    this.exploAnimation.start(() => {
      // Clear items after explosion so that associated views are gc'd
      const items = [];
      this.setState({items});
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state &&
          this.state.items &&
          this.state.items.map((item, index) => {
            const bottom = this.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [item.top, item.top + 100],
            });
            const opacity = this.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            });
            return (
              <BoxPiece
                backgroundColor={item.backgroundColor}
                left={item.left}
                height={item.height}
                width={item.width}
                top={bottom}
                opacity={opacity}
                key={index}
              />
            );
          })}
      </React.Fragment>
    );
  }
}

export default Explosion;
