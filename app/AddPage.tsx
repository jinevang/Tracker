import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AddPage = () => {

      const insets = useSafeAreaInsets();
  

  return <View style={{paddingTop: insets.top}}>
    Create New List
  </View>
}

export default AddPage;