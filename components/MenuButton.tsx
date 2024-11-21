import { useActionSheet } from "@expo/react-native-action-sheet";
import { router } from "expo-router";
import { Button, StyleSheet } from "react-native";
import ImageButton from "./ImageButton";

export default function MenuButton({ context }) {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    let options: string[] = [];
    if (context == "list") {
      options = ["About", "Logout"];
    } else {
      options = ["Logout"];
    }
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex) => {
        if (context == "list") {
          switch (selectedIndex) {
            case 0:
              router.replace("/about");
              break;
            case 1:
              router.replace("/");
              break;
          }
        } else {
          switch (selectedIndex) {
            case 0:
              router.replace("/");
              break;
          }
        }
      }
    );
  };

  return <ImageButton 
    style={styles.menu}
    image={require("../assets/hamburguer-menu.png")} 
    onPress={onPress} 
    />;
}

const styles = StyleSheet.create({
    menu:{
        width: 20,
        height:20
    }
})