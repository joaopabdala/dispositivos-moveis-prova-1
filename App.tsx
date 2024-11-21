import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Link href={"./components/list/List.tsx"}>Lista</Link> */}
      {/* <Link href={"./components/about/About.tsx"}>Sobre</Link> */}
      <Button
        title="Lista"
        onPress={
          () => router.push({pathname:'/app/'})
        }
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
