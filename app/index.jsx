import { NativeBaseProvider, Text, View } from "native-base";
import { StatusBar } from "expo-status-bar";
import GameBoard from "../components/gameBoard";


export default function Index() {


  return (
    <NativeBaseProvider>
      <View flexDirection={"row"} justifyContent={"center"} alignItems={"center"} bgColor={"#fff"} h={"100%"}>
        <GameBoard/>
        <StatusBar style="auto"/>
      </View>
    </NativeBaseProvider>
  )
}
