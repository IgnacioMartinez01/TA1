import { Image, StyleSheet, Platform, Button } from "react-native";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Keyboard } from "react-native";
export default function HomeScreen() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [count, setCount] = useState(0);
  const añadirTarea = () => {
    if (tarea !== " ") {
      const nuevasTareas = [...tareas, tarea];
      setTareas(nuevasTareas);
      setTarea(" ");
      setCount(count + 1);
      Keyboard.dismiss();
    }
  };
  const deleteTarea = () => {
    setTareas(tareas.slice(0, -1));
    if (tareas.length >= 1) {
      setCount(count - 1);
    }
  };
  const rendeItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text >{item}</Text>
    </View>
  );
  
  return (
    <GestureHandlerRootView>
      <SafeAreaView />
      <ThemedView style={styles.texto}>
        <ThemedText type="subtitle">
          Tareas : {count}
        </ThemedText>
        <Button
          onPress={añadirTarea}
          title={"Añadir Tarea"}
        ></Button>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTarea(text)}
          placeholder={"Ingrese tarea"}
          placeholderTextColor={"black"}
        ></TextInput>
        <FlatList
          rendeItem={rendeItem}
          data={tareas}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item) => item}
        ></FlatList>
        <Button
          onPress={deleteTarea}
          title={"Borrar Tarea"}
        ></Button>
      </ThemedView>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    height: 30,
    margin: 10,
  },
  texto: {
    backgroundColor: "gray",
  },
  title: {
    fontSize: 25,
    justifyContent: "center",
  },
});