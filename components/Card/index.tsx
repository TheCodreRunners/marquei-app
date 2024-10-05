import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Box } from "@/components/ui/box";
import { Camera } from "lucide-react-native";

interface CardProps {
  title: string;
  icon: string;
}

export const Card: React.FC<CardProps> = ({ title, icon }) => {
  return (
    <Box style={styles.card} className="p-5 flex justify-center align-middle">
      <Box className="flex justify-center align-middle w-full">
        <Camera
          color="#008172"
          size={43}
          style={{
            width: 43,
            height: 43,
          }}
        />
      </Box>
      <Text style={styles.cardText} className="text-typography-0">
        {title}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F1F5F4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    height: 100,
    width: 150,
  },
  cardText: {
    color: "#000000",
    textAlign: "center",
  },
});
