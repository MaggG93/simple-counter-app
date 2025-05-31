import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import FAB from "./components/FAB"; // Import the FAB component

export default function App() {
  const [count, setCount] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <FAB
        label="+1"
        onPress={() => setCount(count + 1)} // Increment count
        onLongPress={() => setCount(0)} // Reset count
        position="right" // Set the position of the FAB
      />

      <FAB
        label="Reset"
        onPress={() => setCount(0)} // set count to 0
        position="left" // Set the position of the FAB
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textHuge: {
    fontSize: 120,
    fontWeight: "100",
  },
});
