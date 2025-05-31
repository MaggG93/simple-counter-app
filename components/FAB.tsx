import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

interface Props {
  label: string;
  position?: "left" | "right"; // Optional prop to set the position of the FAB

  // Actions
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label,
  onPress,
  onLongPress,
  position = "right",
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton,
        position === "right" ? styles.positionRight : styles.positionLeft, // Conditional styling based on position
        pressed ? { opacity: 0.7 } : { opacity: 1 }, // if pressed true then set opacity to 0.5
      ]}
      onPress={onPress} // Increment count
      onLongPress={onLongPress} // Reset count
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#65558F",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  },

  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
