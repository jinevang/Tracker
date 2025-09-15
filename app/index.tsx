import { Link } from 'expo-router';
import { navigate } from 'expo-router/build/global-state/routing';
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Summary from "./components/Summary";
import { IconSymbol } from './components/ui/icon-symbol.ios';
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

        <Text style={{fontWeight: 600, fontSize: 28, color: colors.text[300], paddingBottom: 8}}>Listy</Text>
        <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>

          <Link href='/(settings)/AddPage' asChild>
          <Pressable onTouchEnd={() => navigate('/(settings)/AddPage')}>

            <IconSymbol name='plus' color='black' size={24}/>
          </Pressable>
          </Link>
        <Pressable onTouchEnd={() => navigate('/(settings)/MainSettings')}>

          <IconSymbol name='gear' color='black' size={24}/>
          </Pressable>
        </View>
      </View>
      <Summary/>
    </View>
  );
}
