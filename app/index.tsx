import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import IconButton from "./components/IconButton";
import Summary from "./components/Summary";
import { colors } from "./constants/colors";


export default function Index() {

    const insets = useSafeAreaInsets();


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: insets.top,
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: insets.bottom
      }}
    >
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

        <Text style={{fontWeight: 600, fontSize: 28, color: colors.text[300], paddingBottom: 8}}>Tracker</Text>
        <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>

          <IconButton icon={<FontAwesome6 name="plus" size={20}/>}/>
          <IconButton icon={<Ionicons name="settings-sharp" size={20} />}/>
        </View>
      </View>
      <Summary/>
    </View>
  );
}
