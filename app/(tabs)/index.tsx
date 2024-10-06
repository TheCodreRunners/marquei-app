// index.tsx
import { Image, StyleSheet, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Input, InputField } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { Card } from "@/components/Card";
import { BabyIcon, BlocksIcon, BrainIcon, Camera, HandHeartIcon, HospitalIcon, PersonStandingIcon } from "lucide-react-native";
import { Text } from "@/components/ui/text";
import AvatarComponent from "@/components/Avatar";

export default function HomeScreen() {
  const optionsArray = [
    {
      label: "Pediatra",
      icon: <BlocksIcon color="#007467" size={43} />,
    },
    {
      label: "Cardiologista",
      icon: <HandHeartIcon color="#007467"  size={43} />,
    },
    {
      label: "Fisioterapia",
      icon: <Camera color="#007467"  size={43} />,
    },
    {
      label: "Obstetra",
      icon: <BabyIcon color="#007467" size={43} />,
    },
    {
      label: "Neurologista",
      icon: <BrainIcon color="#007467"  size={43} />,
    },
    {
      label: "Clinico Geral",
      icon: <HospitalIcon color="#007467"  size={43} />,
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ffffff", dark: "#ffffff" }}
      headerImage={
        <View className="p-5 "> <AvatarComponent title="Ronald Richards" icon={<Camera size={43} />} /></View>
      }
    >
      <Box className="flex flex-col">
        <Text className="text-xl text-black text-center mt-5 my-5">O que você Procura ?</Text>
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

        {/* <Grid
          className="gap-5 py-5 w-full "
          _extra={{
            className: "grid-cols-2",
          }}
       >*/}
        <View className="flex flex-row flex-wrap justify-between w-full gap-5 py-5 px-2">
          {optionsArray.map((option, index) => (
            <View className="flex justify-center w-40 align-middle  " key={index}>
              <Card title={option.label} icon={option.icon} />
            </View>
          ))}
        </View>
        {/*</Grid> */}
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
