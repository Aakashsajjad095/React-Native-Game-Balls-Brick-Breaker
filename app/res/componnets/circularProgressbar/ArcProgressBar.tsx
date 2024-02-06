import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { darkTheme } from '../../globalStyles/Color';

interface ArcProgressBarProps {
    fill?: number;
    title?: string;
    fillColor?: string; // Add the fillColor property
    isPercentage?:Boolean
}

const ArcProgressBar: React.FC<ArcProgressBarProps> = ({ fill, title, fillColor, isPercentage }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <AnimatedCircularProgress
                size={100}
                width={15}
                backgroundWidth={10}
                fill={fill || 0}
                tintColor={fillColor || "#00ff00"} // Use the provided fillColor or a default value
                backgroundColor="#3d5875"
                arcSweepAngle={240}
                rotation={240}
                lineCap="round"
            >
                {(fill) => <Text style={styles.points}>{fill.toFixed(0)}{isPercentage &&'%'}</Text>}
            </AnimatedCircularProgress>
            <Text style={styles.points}>{title}</Text>
        </View>
    );
};

export default ArcProgressBar;

const styles = StyleSheet.create({
    points: {
        color: darkTheme.secondary,
        textAlign: 'center',
    },
});
