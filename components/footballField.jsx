import React from 'react';
import { View } from 'native-base';


const FootBallField = ({ children }) => {

    return (
        <View 
            bgColor={"green.400"} 
            h={"100%"} 
            w={"100%"} 
            flexDirection={"column"} 
            justifyContent={"center"} 
            alignItems={"center"}
        >
            <View 
                h={"94%"} 
                w={"90%"} 
                bgColor={"transparent"} 
                borderWidth={2} 
                borderColor={"#fff"}
                flexDirection={"column"} 
                justifyContent={"center"} 
                alignItems={"center"}
            >
                <View h={0.5} w={"100%"} bgColor={"#fff"} position={"relative"}>
                    <View 
                        h={40} 
                        w={"170px"} 
                        bgColor={"#transparent"} 
                        borderWidth={1} 
                        borderColor={"#fff"} 
                        borderRadius={100} 
                        position={"absolute"}
                        top={-80}
                        // bottom={0}
                        left={"50px"}
                        // right={0}
                    >
                        {children}
                    </View>
                </View>
            </View>
        </View> 
    )
}


export default FootBallField;
