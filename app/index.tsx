import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import ImageButton from "../components/ImageButton";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState("");

  const login = () => {
    if (username === "fulano" && password === "123") {
      setIsLogged(true);
      setError(""); // Limpa mensagens de erro anteriores
      router.replace("/list"); // Redireciona diretamente
    } else {
      setIsLogged(false);
      setError("Login inválido"); // Define mensagem de erro
    }
  };

  // setIsLogged(true)

  // if(isLogged == true){
  //   router.replace('components/list'); // Redireciona diretamente

  // }

  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>

        <View>
          <TextInput
            style={styles.input}
            placeholder="username"
            value={username}
            onChangeText={setUsername}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          ></TextInput>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <ImageButton
            style={styles.logo}
            image={require("../assets/logo.png")}
            onPress={login}
          ></ImageButton>
        </View>
      </View>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },

  logo: {
    width: 200,
    height: 200,
  },

  input: {
    borderBlockColor: "black",
    borderWidth: 1,
    // padding: 10
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
