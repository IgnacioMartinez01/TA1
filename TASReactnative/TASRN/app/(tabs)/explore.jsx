import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, Button } from "react-native";
import { useState } from "react";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function TabTwoScreen() {

  const [imagenIndex, setImageIndex] = useState(0);

  const images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/300/200',
    'https://picsum.photos/250/300',
  ];

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <View style={styles.center}>
      <SafeAreaView/>
      <Image
        source={{ uri: images[imagenIndex] }}
        style={{ width: 200, height: 200 }}
      />
      <Button title="Siguiente Imagen" onPress={handleNextImage} />
    </View>
  );
};

  
const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    backgroundColor: "gray",
    margin: 23,
  },
  center:{
    justifyContent:"center",
    alignItems:"center",
  }
});
