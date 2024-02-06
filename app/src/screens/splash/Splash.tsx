import React, { useState } from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from 'react-native-svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../router/RootStackParamList';
import { darkTheme } from '../../../res/globalStyles/Color';

type SplashProps = {
    navigation: StackNavigationProp<RootStackParamList, 'splash'>;
};

const Splash: React.FC<SplashProps> = ({ navigation }) => {
    const [fill, setFill] = useState < number > (90);
    return (
        <View style={styles.container}>
            <AnimatedCircularProgress
                duration={5000}
                size={250}
                width={15}
                fill={100}
                rotation={-1}
                tintColor={darkTheme.darkOrchid}
                padding={10}
                renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="17" fill="#FCBD11" />}
                backgroundColor="#F6F7FB"
                onAnimationComplete={()=>{
                    navigation.replace('home');
                }}
            >
                {(fill) => (
                    <ImageBackground
                        resizeMode="stretch"
                        borderRadius={180}
                        style={{ height: 180, width: 180, borderRadius: 100 }}
                        source={{
                            uri:
                                'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2971&q=80',
                        }}
                    />
                )}
            </AnimatedCircularProgress>
            <Text style={styles.textStyle}>Loading . . .</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    textStyle: {
        color: 'white',
        fontSize: 25,
        marginTop: 5,
    },
});

export default Splash;
