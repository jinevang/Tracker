import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SummaryPage = () => {
        const insets = useSafeAreaInsets();
  
  return <View style={{paddingTop: insets.top, paddingLeft: 16}}>
    <Text> Albums</Text>
    <View style={{padding: 4}}></View>
  </View>
}

export default SummaryPage;