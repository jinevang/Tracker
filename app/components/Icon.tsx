import { Theme } from "@react-navigation/native";
import { StyleProp } from "react-native";
import { icons } from "../constants/icons";

const Icon = ({name}: {name: string, style?: StyleProp<Theme>}) => {
    if (name?.length > 0) {
      return icons[name]
    }

}

export default Icon;