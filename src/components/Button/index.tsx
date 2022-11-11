import React from "react";
import theme from "../../styles/theme";
import { Btn } from "./styled";

export default function Button(props: any) {
  return (
    <Btn
      {...props}
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
          : theme.colors.LIGHT_PRIMARY,
        height: "50%",
        fontSize: 15,
        padding: 0,
      }}
      onPress={props.onPress}
    >
      {props.text}
    </Btn>
  );
}
