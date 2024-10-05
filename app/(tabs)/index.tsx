// index.tsx
import { Image, StyleSheet, Platform, View, Text } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";

import { Input, InputField } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { Card } from "@/components/Card"; // Importar o novo componente

export default function HomeScreen() {
  const optionsArray = [
    {
      label: "Pediatra",
      icon: "icon",
    },
    {
      label: "Cardiologista",
      icon: "icon",
    },
    {
      label: "Fisioterapia",
      icon: "icon",
    },
    {
      label: "Obstetra",
      icon: "icon",
    },
    {
      label: "Neurologista",
      icon: "icon",
    },
    {
      label: "Clinico Geral",
      icon: "icon",
    },
  ];
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <Box className="flex flex-col">
        <Input
          variant="rounded"
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          style={{ width: "100%", backgroundColor: "#F1F5F4", borderColor: "#F1F5F4" }}
        >
          <InputField placeholder="Pesquisar" />
        </Input>
        <Box className="flex flex-row gap-2 flex-wrap align-middle justify-evenly w-full pt-5">
          {optionsArray.map((option, index) => (
            <Card key={index} title={option.label} icon={option.icon} />
          ))}
        </Box>
      </Box>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});