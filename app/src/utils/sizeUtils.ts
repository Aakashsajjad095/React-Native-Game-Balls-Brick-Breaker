import { Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';



export const sizeWidth = (value: number): number => {
    return scale(value);
};

export const sizeHeight = (value: number): number => {
    return verticalScale(value);
};

export const sizePadding = (value: number): number => {
    return moderateScale(value);
};

export const sizeFont = (value: number): number => {
    return RFValue(value);
};
export const dimentionWidth=()=>{
    return  Dimensions.get('screen').width
}
export const dimentionHeight = () => {
    return Dimensions.get('screen').height
}