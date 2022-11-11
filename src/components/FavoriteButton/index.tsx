import React from "react";
import theme from "../../styles/theme";
import { Btn } from "./styled";
import Icon from "react-native-vector-icons/Ionicons";

export default function FavoriteButton(props: any) {
  return (
    <Btn
      {...props}
      icon={() => (
        <Icon name={"star"} size={20} color={theme.colors.YELLOW_PRIMARY} />
      )}
      background={props.background}
      mode="outlined"
      compact
      constentStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
      labelStyle={{
        color: props.textColorStyle
          ? props.textColorStyle
          : theme.colors.YELLOW_PRIMARY,
        height: "50%",
        fontSize: 12,
        lineHeight: 15,
        fontFamily: "Inter-Medium",
        padding: 0,
        textTransform: "none",
      }}
      onPress={props.onPress}
    >
      {props.text}
    </Btn>
  );
}
