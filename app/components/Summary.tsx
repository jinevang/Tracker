import { navigate } from "expo-router/build/global-state/routing";
import { Pressable, Text, View } from "react-native";
import { colors } from "../constants/colors";

const Summary = () => {
  return <View style={{borderColor: colors.surface[100], borderWidth: 1, borderRadius: 5, padding: 8, flexDirection: 'column'}}>
    
    <Pressable onTouchEnd={() => navigate('/SummaryPage')}>

    <Text style={{fontWeight: 500, fontSize: 18, color: colors.text[300]}}>Albums</Text>
    <View><Text># 100</Text></View>
    </Pressable>
  </View>
}

export default Summary;