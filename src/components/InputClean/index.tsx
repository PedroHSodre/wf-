import React from "react";
import theme from "../../styles/theme";
import { TextInput } from "./styled";

export default function InputClean(props: any) {
  return (
    <TextInput
      {...props}
      type="flat"
      textColor={theme.colors.DARK_PRIMARY_CONTRAST}
      style={{
        paddingHorizontal: 16,
        color: theme.colors.DARK_PRIMARY_CONTRAST,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
      }}
      activeUnderlineColor={theme.colors.LIGHT_STANDARD}
    />
  );
}
