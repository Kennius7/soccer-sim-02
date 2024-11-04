import React, { useState, useEffect, useRef } from "react";
import { Box, View, Text, Pressable } from "native-base";
import { FlatList, Dimensions, Animated, Image, ImageBackground } from "react-native";
import Ball from "../assets/images/soccer-ball.png";
import FootBallField from "./footballField";



const GameBoard = () => {
    const [incrementFactor, setIncrementFactor] = useState(6);
    const [startAnimation, setStartAnimation] = useState(false);

    const positionX = useRef(new Animated.Value(0)).current;
    const positionY = useRef(new Animated.Value(0)).current;
    const intervalRef = useRef(null);

    // useEffect(() => {
    //     const intervalRef = setInterval(() => {
    //         Animated.spring(positionX, {
    //             toValue: positionX._value + incrementFactor,
    //             friction: 1,
    //             useNativeDriver: true,
    //         }).start();
    //         Animated.spring(positionY, {
    //             toValue: positionY._value + incrementFactor,
    //             friction: 1,
    //             useNativeDriver: true,
    //         }).start();
    //     }, 50);

    //     return () => clearInterval(intervalRef);


    // }, [positionX, positionY, incrementFactor]);



    const startMotion = () => {
        if (!startAnimation) {
            setStartAnimation(true);
            intervalRef.current = setInterval(() => {
                Animated.spring(positionX, {
                    toValue: positionX._value + incrementFactor,
                    friction: 1,
                    useNativeDriver: true,
                }).start();
                Animated.spring(positionY, {
                    toValue: positionY._value + incrementFactor,
                    friction: 1,
                    useNativeDriver: true,
                }).start();
            }, 50);
        }
    }

    const changeDirection = () => {
        setIncrementFactor(prev => prev * -1);
        startMotion();
    }

    const stopMotion = () => {
        if (startAnimation) {
            setStartAnimation(false);
            clearInterval(intervalRef.current);
            positionX.stopAnimation();
            positionY.stopAnimation();
            Animated.spring(positionX, {
                toValue: 0,
                friction: 10,
                useNativeDriver: true,
            }).start();
            Animated.spring(positionY, {
                toValue: 0,
                friction: 10,
                useNativeDriver: true,
            }).start();
        }
    }



    return (
        <Box>
            <View 
                h={600} 
                w={300} 
                bgColor={"amber.100"} 
                flexDirection={"column"} 
                justifyContent={"center"} 
                alignItems={"center"}
            >
                <FootBallField>
                    <Pressable 
                        onPress={startMotion} 
                        marginTop={30} 
                        bgColor={"red.300"} 
                        borderRadius={10} 
                        w={40} 
                        h={10}
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Text>Start Motion</Text>
                    </Pressable>

                    <Pressable 
                        onPress={changeDirection} 
                        marginTop={30} 
                        bgColor={"green.200"} 
                        borderRadius={10} 
                        w={40} 
                        h={10}
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Text>Change Direction</Text>
                    </Pressable>

                    <Pressable 
                        onPress={stopMotion} 
                        marginTop={30} 
                        bgColor={"blue.300"} 
                        borderRadius={10} 
                        w={40} 
                        h={10}
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Text>Stop Motion</Text>
                    </Pressable>

                    <Animated.View 
                        style={{ transform: [{ translateX: positionX }, { translateY: positionY }] }} 
                    >
                        <Image source={Ball} alt={"ball"} style={{ width: 15, height: 15 }} />
                    </Animated.View>
                </FootBallField>
            </View>
        </Box>
    )
}

export default GameBoard;

