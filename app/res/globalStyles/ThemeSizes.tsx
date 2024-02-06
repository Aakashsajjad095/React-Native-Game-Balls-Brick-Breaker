import { sizeFont } from "../../src/utils/sizeUtils";
import { fonts } from "./Fonts";
// const { width, height } = Dimensions.get("window");
// import {sizeWidth,sizeFont} from '../../src/utils/size';
// import {fonts} from '../style/fonts'

export const SIZES = {

    xx_small: sizeFont(4),
    x_small: sizeFont(8),
    small: sizeFont(12),
    medium: sizeFont(15),
    large: sizeFont(16),
    x_large: sizeFont(18),
    xx_large: sizeFont(24),
    xxx_large: sizeFont(35),
};

export const FONTS = {

    //          <<<<===== Bold typography start  =====>>>>
    hBold1: { fontFamily: fonts['Poppins-Bold'], fontSize: SIZES.xxx_large },
    hBold2: { fontFamily: fonts['Poppins-Bold'], fontSize: SIZES.xx_large },
    hBold3: { fontFamily: fonts['Poppins-Bold'], fontSize: SIZES.x_large },
    hBold4: { fontFamily: fonts['Poppins-Bold'], fontSize: SIZES.large },
    hBold5: { fontFamily: fonts['Poppins-Bold'], fontSize: SIZES.medium },
    bodyBold1: { fontFamily: fonts['Poppins-Bold'], fontSize: SIZES.small },
    bodyBold2: { fontFamily: fonts['Poppins-Bold'], fontSize: SIZES.x_small },
    bodyBold3: { fontFamily: fonts['Poppins-Bold'], fontSize: SIZES.xx_small },

    //          <<<<===== Bold typography end  =====>>>>


    //          <<<<===== ExtraBold typography start  =====>>>>
    hExtraBold1: { fontFamily: fonts['Poppins-ExtraBold'], fontSize: SIZES.xxx_large },
    hExtraBold2: { fontFamily: fonts['Poppins-ExtraBold'], fontSize: SIZES.xx_large },
    hExtraBold3: { fontFamily: fonts['Poppins-ExtraBold'], fontSize: SIZES.x_large },
    hExtraBold4: { fontFamily: fonts['Poppins-ExtraBold'], fontSize: SIZES.large },
    hExtraBold5: { fontFamily: fonts['Poppins-ExtraBold'], fontSize: SIZES.medium },
    bodyExtraBold1: { fontFamily: fonts['Poppins-ExtraBold'], fontSize: SIZES.small },
    bodyExtraBold2: { fontFamily: fonts['Poppins-ExtraBold'], fontSize: SIZES.x_small },
    bodyExtraBold3: { fontFamily: fonts['Poppins-ExtraBold'], fontSize: SIZES.xx_small },

    //          <<<<===== ExtraBold typography end  =====>>>>


    //          <<<<===== ExtraLight typography start  =====>>>>
    hExtraLight1: { fontFamily: fonts['Poppins-ExtraLight'], fontSize: SIZES.xxx_large },
    hExtraLight2: { fontFamily: fonts['Poppins-ExtraLight'], fontSize: SIZES.xx_large },
    hExtraLight3: { fontFamily: fonts['Poppins-ExtraLight'], fontSize: SIZES.x_large },
    hExtraLight4: { fontFamily: fonts['Poppins-ExtraLight'], fontSize: SIZES.large },
    hExtraLight5: { fontFamily: fonts['Poppins-ExtraLight'], fontSize: SIZES.medium },
    bodyExtraLight1: { fontFamily: fonts['Poppins-ExtraLight'], fontSize: SIZES.small },
    bodyExtraLight2: { fontFamily: fonts['Poppins-ExtraLight'], fontSize: SIZES.x_small },
    bodyExtraLight3: { fontFamily: fonts['Poppins-ExtraLight'], fontSize: SIZES.xx_small },

    //          <<<<===== ExtraLight typography end  =====>>>>


    //          <<<<===== Light typography start  =====>>>>
    hLight1: { fontFamily: fonts['Poppins-Light'], fontSize: SIZES.xxx_large },
    hLight2: { fontFamily: fonts['Poppins-Light'], fontSize: SIZES.xx_large },
    hLight3: { fontFamily: fonts['Poppins-Light'], fontSize: SIZES.x_large },
    hLight4: { fontFamily: fonts['Poppins-Light'], fontSize: SIZES.large },
    hLight5: { fontFamily: fonts['Poppins-Light'], fontSize: SIZES.medium },
    bodyLight1: { fontFamily: fonts['Poppins-Light'], fontSize: SIZES.small },
    bodyLight2: { fontFamily: fonts['Poppins-Light'], fontSize: SIZES.x_small },
    bodyLight3: { fontFamily: fonts['Poppins-Light'], fontSize: SIZES.xx_small },

    //          <<<<===== Light typography end  =====>>>>

    //          <<<<===== Medium typography start  =====>>>>
    hMedium1: { fontFamily: fonts['Poppins-Medium'], fontSize: SIZES.xxx_large },
    hMedium2: { fontFamily: fonts['Poppins-Medium'], fontSize: SIZES.xx_large },
    hMedium3: { fontFamily: fonts['Poppins-Medium'], fontSize: SIZES.x_large },
    hMedium4: { fontFamily: fonts['Poppins-Medium'], fontSize: SIZES.large },
    hMedium5: { fontFamily: fonts['Poppins-Medium'], fontSize: SIZES.medium },
    bodyMedium1: { fontFamily: fonts['Poppins-Medium'], fontSize: SIZES.small },
    bodyMedium2: { fontFamily: fonts['Poppins-Medium'], fontSize: SIZES.x_small },
    bodyMedium3: { fontFamily: fonts['Poppins-Medium'], fontSize: SIZES.xx_small },

    //          <<<<===== Medium typography end  =====>>>>


    //          <<<<===== Regular typography start  =====>>>>
    hRegular1: { fontFamily: fonts['Poppins-Regular'], fontSize: SIZES.xxx_large },
    hRegular2: { fontFamily: fonts['Poppins-Regular'], fontSize: SIZES.xx_large },
    hRegular3: { fontFamily: fonts['Poppins-Regular'], fontSize: SIZES.x_large },
    hRegular4: { fontFamily: fonts['Poppins-Regular'], fontSize: SIZES.large },
    hRegular5: { fontFamily: fonts['Poppins-Regular'], fontSize: SIZES.medium },
    bodyRegular1: { fontFamily: fonts['Poppins-Regular'], fontSize: SIZES.small },
    bodyRegular2: { fontFamily: fonts['Poppins-Regular'], fontSize: SIZES.x_small },
    bodyRegular3: { fontFamily: fonts['Poppins-Regular'], fontSize: SIZES.xx_small },

    //          <<<<===== Regular typography end  =====>>>>

    //          <<<<===== SemiBold typography start  =====>>>>
    hSemiBold1: { fontFamily: fonts['Poppins-SemiBold'], fontSize: SIZES.xxx_large },
    hSemiBold2: { fontFamily: fonts['Poppins-SemiBold'], fontSize: SIZES.xx_large },
    hSemiBold3: { fontFamily: fonts['Poppins-SemiBold'], fontSize: SIZES.x_large },
    hSemiBold4: { fontFamily: fonts['Poppins-SemiBold'], fontSize: SIZES.large },
    hSemiBold5: { fontFamily: fonts['Poppins-SemiBold'], fontSize: SIZES.medium },
    bodySemiBold1: { fontFamily: fonts['Poppins-SemiBold'], fontSize: SIZES.small },
    bodySemiBold2: { fontFamily: fonts['Poppins-SemiBold'], fontSize: SIZES.x_small },
    bodySemiBold3: { fontFamily: fonts['Poppins-SemiBold'], fontSize: SIZES.xx_small },

    //          <<<<===== SemiBold typography end  =====>>>>

};

const appTheme = { SIZES, FONTS };

export default appTheme;