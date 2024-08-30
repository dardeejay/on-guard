import {
  Image,
  StyleSheet,
  Platform,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import DropDownPicker from "react-native-dropdown-picker";
import { Picker } from "@react-native-picker/picker";

export default function HomeScreen() {
  const [selectedIncident, setSelectedIncident] = useState();
  const handlePress = () => {
    Alert.alert("Button Pressed", "You pressed the button!");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/cantbreathe.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <Image
            source={require("@/assets/images/cantbreathe.jpg")}
            style={styles.reactLogo}
          />
          <ThemedText type="title">Report an Incident</ThemedText>
        </ThemedView>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textLabel}>Incident Type: </Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedIncident}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedIncident(itemValue)
          }
        >
          <Picker.Item label="Vehicular" value="vehicular" />
          <Picker.Item label="Natural" value="natural" />
          <Picker.Item label="Crime" value="crime" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textLabel}>Attach Image: </Text>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Ionicons
            name="camera-outline"
            size={20}
            color="#92dde6"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.buttonSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a5e1e7",
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 15,
  },
  buttonSubmit: {
    backgroundColor: "#2399c2",
    padding: 13,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  icon: {
    color: "white",
    fontSize: 28,
  },
  picker: {
    width: "50%",
  },
  container: {
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  reactLogo: {
    height: 100,
    width: 100,
    bottom: 0,
    left: 0,
    marginBottom: 20,
  },
  textLabel: {
    fontSize: 16,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 50,
  },
});
