import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
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
        </ThemedView>
      </View>
      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={20}
          color="#92dde6"
          style={styles.icon}
        />
        <TextInput style={styles.input} placeholder="Username" />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#92dde6"
          style={styles.icon}
        />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.buttonLog}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.buttonSign}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  buttonLog: {
    marginTop: 15,
    backgroundColor: "#a5e1e7",
    padding: 13,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonSign: {
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
  container: {
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  icon: {
    marginRight: 5,
  },
  reactLogo: {
    height: 100,
    width: 100,
    bottom: 0,
    left: 0,
    marginTop: 100,
    marginBottom: 70,
  },
});