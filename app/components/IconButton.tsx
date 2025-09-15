import { ReactElement } from "react";
import { Pressable } from "react-native";
import Icon from "./Icon";

const IconButton = ({icon, iconName, onClick, disabled = false}: {icon?: ReactElement, iconName?: string, onClick?: any, disabled?: boolean}) => {
  if(icon) {
    return <Pressable disabled={disabled} onMagicTap={onClick}>
      {icon}
    </Pressable>
  }
  
  if(iconName) {

  return <Pressable disabled={disabled}>
      <Icon name={iconName} />
  </Pressable>
  }

}

export default IconButton;