import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { sizePadding, sizeHeight } from '../../src/utils/sizeUtils';
import { darkTheme } from '../globalStyles/Color';


interface ContainerProps {
    children: ReactNode;
    style?: ViewStyle;
    safeStyle?: ViewStyle;
    edges?: any
}

const SafeAreaContainer: React.FC<ContainerProps> = ({ children, style, safeStyle, edges }) => (
    <SafeAreaView edges={edges} style={safeStyle ? safeStyle : { flexGrow: 1, backgroundColor:darkTheme.backgroundPrimary }}>
        <View style={[styles.containerStyle, style]}>{children}</View>
    </SafeAreaView>
);

interface RowProps {
    children: ReactNode;
    style?: ViewStyle | any;
}

const Row: React.FC<RowProps> = ({ children, style }) => (
    <View style={[{ flexDirection: 'row' }, style]}>{children}</View>
);

interface ColumnProps {
    children: ReactNode;
    style?: ViewStyle;
}

const Column: React.FC<ColumnProps> = ({ children, style }) => (
    <View style={[{ flexDirection: 'column' }, style]}>{children}</View>
);

interface PositionAbsoluteProps {
    style?: ViewStyle;
    children: ReactNode;
}

const PositionAbsolute: React.FC<PositionAbsoluteProps> = ({ style, children }) => (
    <View style={[styles.absolute, style]}>
        {children}
    </View>
);

interface FooterProps {
    style?: ViewStyle;
    children: ReactNode;
}

const Footer: React.FC<FooterProps> = ({ style, children }) => (
    <View style={[styles.footerStyle, style]}>
        {children}
    </View>
);

interface CenterViewProps {
    style?: ViewStyle;
    children: ReactNode;
}

const CenterView: React.FC<CenterViewProps> = ({ style, children }) => (
    <View style={[styles.centerContainer, style]}>
        {children}
    </View>
);

interface LineProps {
    style?: ViewStyle;
}

const Line: React.FC<LineProps> = ({ style }) => (
    <View style={[styles.line, style]} />
);

interface SizeBoxProps{
    style?:ViewStyle;
};
const SizeBox: React.FC<SizeBoxProps>=({style})=>(
    <View style={[styles.sizeBox, style]}/>
);

export { SafeAreaContainer, Row, Column, PositionAbsolute, CenterView, Footer, Line, SizeBox };

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
    },
    footerStyle: {
        position: 'absolute',
        bottom: sizePadding(25),
        top: 0,
        right: 0,
        left: 0,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerStyle: {
        flex: 1,
    },
    line: {
        height: sizeHeight(1),
        backgroundColor: 'blue'
    },
    sizeBox:{
        width:sizePadding(10)
    }
});