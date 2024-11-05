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
import { useEffect } from "react";
import { Keyboard } from "react-native";
export default function HomeScreen() {
  const [productoId, setProductoId] = useState("");
  const [producto, setProducto] = useState(null);

  const traerData = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const response = await data.json();
      setProducto(response); // Assuming response is an array of products
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    traerData();
  }, []);

  const buscarPrenda = () => {
    if (producto) {
      const foundProduct = producto.find(
        (item) => item.id === parseInt(productoId)
      );
      setProducto(foundProduct);
      Keyboard.dismiss();
    }
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView />
      <ThemedView>
        <ThemedText style={styles.title} type="subtitle">
          BUSCADOR DE ROPA
        </ThemedText>
        <TextInput
          onBlur={() => Keyboard.dismiss()} //teclado se baja
          style={styles.input}
          keyboardType="numeric"
          placeholder={"Ingrese numero del 1-20"}
          placeholderTextColor={"black"}
          onChangeText={(text) => setProductoId(text)}
        />
        <ThemedView style={styles.btn}>
          <Button onPress={buscarPrenda} title={"Buscar Prenda"}></Button>
        </ThemedView>
        {producto ? (
          <View style={styles.cont}>
            <Text style={styles.tex}>Nombre: {producto.title}</Text>
            <Text style={styles.tex}>Precio: {producto.price}</Text>
            <Image source={{ uri: producto.image }} style={styles.cont} />
          </View>
        ) : (
          <View style={styles.noHayV}>
            <Text style={styles.noHayT}>Producto no encontrado</Text>
          </View>
        )}
      </ThemedView>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  title: {
    color: "white",
    padding: 50,
    margin: "auto",
  },
  btn: {
    margin: 12,
    padding: 20,
  },
  input: {
    margin: 20,
    padding: 10,
    backgroundColor: "white",
    placeholderTextColor: "black",
  },
  tex: {
    color: "white",
    fontSize: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
    padding: 2,
  },
  cont: {
    width: 400,
    height: 290,
    justifyContent: "center",
    alignItems: "center",
  },
  noHayT: {
    color: "white",
    fontSize: 21,
  },
  noHayV: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "###1E1E1E",
    margin:"auto",
  },
});
