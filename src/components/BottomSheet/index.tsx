import React, {
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { ButtonsContainer, Container, ContentContainer, Text } from "./styled";
import theme from "../../styles/theme";
import "react-native-gesture-handler";
import InputClean from "../InputClean";
import Button from "../Button";
import UserContext from "../../hooks/userContext";

type BottomSheetComponentProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BottomSheetComponent = (props: BottomSheetComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { userName, handleUserName } = useContext(UserContext);
  const [name, setName] = useState(userName);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => [1, props.open ? 200 : 1], [props.open]);

  const handleSheetChanges = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      props.setOpen(!props.open);
      bottomSheetRef?.current?.forceClose();
      setIsOpen(false);
    }
  };

  const handleSave = () => {
    handleUserName(name);
    bottomSheetRef?.current?.forceClose();
  };

  return (
    <Container>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        enablePanDownToClose={true}
        detached
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{ borderRadius: 0 }}
        handleIndicatorStyle={{
          backgroundColor: theme.colors.GRAY_SECONDARY,
          height: 6,
          width: 30,
          borderRadius: 12,
        }}
        handleStyle={{
          height: 38,
          alignItems: "center",
          justifyContent: "center",
        }}
        containerHeight={390}
        contentHeight={390}
      >
        <ContentContainer>
          <Text>Alterar usuário selecionado</Text>
          <InputClean
            label="Nome do usuário"
            value={name}
            onChangeText={(text: string) => setName(text)}
          />
          <ButtonsContainer>
            <Button text="cancelar" width="174" onPress={handleSheetChanges} />
            <Button
              onPress={handleSave}
              text="salvar"
              width="174"
              background={theme.colors.LIGHT_PRIMARY}
              textColorStyle={theme.colors.LIGHT_PRIMARY_CONTRAST}
            />
          </ButtonsContainer>
        </ContentContainer>
      </BottomSheet>
    </Container>
  );
};

export default BottomSheetComponent;
