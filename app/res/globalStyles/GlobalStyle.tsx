import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { sizePadding } from '../../src/utils/sizeUtils';
import { Color } from './Color';

const useGlobalStyles = () => {
    const insets = useSafeAreaInsets();

    return StyleSheet.create({
        container: {
            flex: 1,
        },
        containerCenter: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        safeAreaContainer: {
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        },
        safeAreaBottomContainer: {
            paddingBottom: insets.bottom,
        },
        shadowCard: {
            backgroundColor: Color.white,
            shadowColor: Color.primary,
            margin: 1,
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowRadius: 2.65,
            shadowOpacity: 0.1,
            elevation: 1,
        },
        circleShadow: {
            height: sizePadding(100),
            width: sizePadding(100),
            borderRadius: sizePadding(50),
            backgroundColor: Color.white,
            shadowColor: Color.salmonPink,
            margin: 2,
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowRadius: 4.65,
            shadowOpacity: 0.4,
            elevation: 4,
        },
    });
};

export default useGlobalStyles;
