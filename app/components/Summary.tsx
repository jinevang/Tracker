import { Text, View } from "react-native";
import { colors } from "../constants/colors";

const Summary = () => {
  return <View style={{borderColor: colors.surface[100], borderWidth: 1, borderRadius: 5, padding: 8, flexDirection: 'column'}}>
    <Text style={{fontWeight: 500, fontSize: 18, color: colors.text[300]}}>Albums</Text>
    <View><Text># 100</Text></View>
  </View>
}

export default Summary;