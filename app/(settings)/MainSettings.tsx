import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MainSettingPage = () => {

        const insets = useSafeAreaInsets();
  

  return <View style={{paddingTop: insets.top}}>
    <Text>Main Settings (coming soon)</Text>
  </View>
}

export default MainSettingPage;