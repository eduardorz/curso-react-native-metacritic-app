import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Card, Text, TextInput } from "react-native-paper";

const icon = require('./assets/icon.png')

export default function App() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Bienvenido" />
        <Card.Content>
          <Text>Esta es la primera vez que estoy usando react-native-paper.</Text>
          <TextInput label="Escribe algo" style={styles.input} />
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => console.log("¡Hola!")}>
            ¡Presiona acá!
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
});
