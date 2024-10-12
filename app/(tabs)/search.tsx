import { filterMethodEnum, UseAPi } from "@/api/useApi";
import AvatarComponent from "@/components/Avatar";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Button, ButtonText } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Input, InputField } from "@/components/ui/input";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { getTheme } from "@/constants/Colors";
import { Camera, StarIcon } from "lucide-react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { FlatList } from "react-native";
import { debounce } from "lodash";

type clinic = {
  id: string;
  name: string;
  logo_url: string;
};

const ExploreScreen = () => {

  const { tokens, text, shadows } = getTheme();

  const debouncedSearch = debounce((text: string) => {
    setSearch(`*${text}*`);
  }, 1000); 

  const handleSearch = (text: string) => {
    if (text == "" || text == null || text == " ") {
      setSearch(null);
    } else {
      debouncedSearch(text);
    }
  };

  const { fetchApi } = UseAPi();

  const [clinics, setClinics] = useState<clinic[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await fetchApi("clinic", {
          limit: 10,
          ...(search && {
            filter: {
              field: "name",
              method: filterMethodEnum.ilike,
              param: search,
            },
          }),
        });
        const data = await response;
        setClinics(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchClinics();
  }, [search]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ffffff", dark: "#ffffff" }}
      headerImage={
        <View className="p-5 ">
          <AvatarComponent
            title="Ronald Richards"
            icon={<Camera size={43} />}
          />
        </View>
      }
    >
      <Text
        style={{ color: tokens.primary }}
        className={`text-2xl text-center mt-5 my-2`}
      >
        Explorar
      </Text>
      <Input
        variant="rounded"
        size="xl"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        style={{ width: "100%", backgroundColor: "#F1F5F4" }}
        className="rounded-full :focus border-2 border-[#008172] "
      >
        <InputField
          placeholder="Pesquisar"
          onChangeText={(text) => handleSearch(text)}
        />
      </Input>

      <FlatList
        data={clinics}
        renderItem={({ item, index }) => (
          <View
            key={item.id}
            onPress={() => {
              setShowModal(true);
            }}
            style={shadows}
            className="bg-gray-white rounded-lg mb-4 p-4 border border-gray-200"
          >
            <Image
              source={{ uri: item.logo_url }}
              className="w-full h-40 rounded-lg"
              resizeMode="cover"
            />
            <Text
              className="text-md font-bold mt-2"
              style={{ color: text.secondary }}
            >
              {item.name}
            </Text>
            {/* Linha contendo o rating e o ícone lado a lado */}
            <View className="flex-row items-center">
              <StarIcon color={tokens.primary} width={20} height={20} />
              <StarIcon color={tokens.primary} width={20} height={20} />
              <StarIcon color={tokens.primary} width={20} height={20} />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <Modal isOpen={showModal}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Text className="text-center text-lg">
              Funcionalidade em desenvolvimento
            </Text>
          </ModalBody>
          <ModalFooter className="flex justify-center">
            <Button onPress={() => setShowModal(false)}>
              <ButtonText className={`bg-${tokens.primary} text-white`}>
                Fechar
              </ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ParallaxScrollView>
  );
};

export default ExploreScreen;
