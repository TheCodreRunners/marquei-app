import React from "react";
import { Text } from "react-native";
import { Box } from "@/components/ui/box";
import { Pressable } from "../ui/pressable";
import { router } from "expo-router";

interface CardProps {
  title: string;
  icon: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, icon }) => {

  return (
    <Pressable onPress={()=>router.push("/(tabs)/search")}  className="bg-gray-100 shadow-md w-full justify-around items-center p-4 rounded-lg	">
      <Box className="justify-center items-center w-full">
        {icon}
      </Box>
      <Text className="text-center text-black mt-2">
        {title}
      </Text>
    </Pressable>
  );
};
