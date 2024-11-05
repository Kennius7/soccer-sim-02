import React from 'react';
import { Circle, View } from 'native-base';


const FootBallField = ({ children }) => {

    return (
        <View id={'Football Field'}
            bgColor={"green.400"} 
            h={"100%"} 
            w={"100%"} 
            flexDirection={"column"} 
            justifyContent={"center"} 
            alignItems={"center"}
        >
            <View id={'Football Field Inner Borders'}
                h={"94%"} 
                w={"90%"} 
                bgColor={"transparent"} 
                borderWidth={2} 
                borderColor={"#fff"}
                flexDirection={"column"} 
                justifyContent={"center"} 
                alignItems={"center"}
            >
                <View id={'Center Line'}
                    h={0.5} 
                    w={"100%"} 
                    bgColor={"#fff"} 
                    position={"relative"}
                >
                    <View id={'North 18yard Box'}
                        h={"40px"} 
                        w={"100px"} 
                        bg={"transparent"} 
                        borderColor={"white"} 
                        borderWidth={1}
                        position={"absolute"}
                        top={-280}
                        left={"82px"}
                    >
                        <View id={'South 18yard Box'}
                            h={"40px"} 
                            w={"100px"} 
                            bg={"transparent"} 
                            borderColor={"white"} 
                            borderWidth={1}
                            position={"absolute"}
                            top={520}
                            left={"0px"} 
                        >
                            <Circle id={'Center Circle'}
                                h={"120px"} 
                                w={"120px"} 
                                bgColor={"#transparent"} 
                                borderWidth={1} 
                                borderColor={"#fff"} 
                                borderRadius={100} 
                                position={"absolute"}
                                top={-300}
                                right={-12}
                            >
                                {children}
                            </Circle>
                        </View>
                    </View>
                </View>
            </View>
        </View> 
    )
}


export default FootBallField;
