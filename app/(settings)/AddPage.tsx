import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AddPage = () => {

      const insets = useSafeAreaInsets();
  

  return <View style={{paddingTop: insets.top}}>
    <Text>Create New List</Text>
  </View>
}

export default AddPage;