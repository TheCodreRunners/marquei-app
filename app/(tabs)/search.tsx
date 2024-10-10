import AvatarComponent from "@/components/Avatar";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Button, ButtonText } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Input, InputField } from "@/components/ui/input";
import { Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from "@/components/ui/modal";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { getTheme } from "@/constants/Colors";
import { Camera, StarIcon } from "lucide-react-native";
import React from "react";
import { useRef, useState } from "react";
import { FlatList } from "react-native";


const clinics = [
    {
        id: '1',
        name: 'CLÍNICA MÉDICA ABRAÇA SAÚDE',
        rating: 5.0,
        image: 'https://mggpqhkgbjckoeptuicz.supabase.co/storage/v1/object/public/images/clinics/fc18104e-98b0-484f-bad4-31aae0efa1c1.jpeg', // URL de exemplo para imagem
    },
    {
        id: '2',
        name: 'DR. CONSULTA',
        rating: 5.0,
        image: 'https://mggpqhkgbjckoeptuicz.supabase.co/storage/v1/object/public/images/clinics/fc18104e-98b0-484f-bad4-31aae0efa1c1.jpeg',
    },
    {
        id: '3',
        name: 'CLÍNICA SANISALUD',
        rating: 5.0,
        image: 'https://mggpqhkgbjckoeptuicz.supabase.co/storage/v1/object/public/images/clinics/fc18104e-98b0-484f-bad4-31aae0efa1c1.jpeg',
    }, {
        id: '4',
        name: 'CLÍNICA SANISALUD',
        rating: 5.0,
        image: 'https://mggpqhkgbjckoeptuicz.supabase.co/storage/v1/object/public/images/clinics/fc18104e-98b0-484f-bad4-31aae0efa1c1.jpeg',
    }, {
        id: '5',
        name: 'CLÍNICA SANISALUD',
        rating: 5.0,
        image: 'https://mggpqhkgbjckoeptuicz.supabase.co/storage/v1/object/public/images/clinics/fc18104e-98b0-484f-bad4-31aae0efa1c1.jpeg',
    },
];
const ExploreScreen = () => {
    const [showModal, setShowModal] = useState(false)
    const ref = useRef(null)
    const { tokens,text,shadows} = getTheme()
    return (


        <ParallaxScrollView

            headerBackgroundColor={{ light: "#ffffff", dark: "#ffffff" }}
            headerImage={
                <View className="p-5 "> <AvatarComponent title="Ronald Richards" icon={<Camera size={43} />} />


                </View>
            }
        >

            <Text

                style={{ color: tokens.primary }}
                className={`text-2xl text-center mt-5 my-2`}>Explorar</Text>
            <Input
                variant="rounded"
                size="xl"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                style={{ width: "100%", backgroundColor: "#F1F5F4",}}
                className="rounded-full :focus border-2 border-[#008172] "
            >
                <InputField placeholder="Pesquisar" />
            </Input>


            <FlatList
                data={clinics}
                renderItem={({ item, index }) => (
                    <View
                        key={item.id}
                        onPress={() => {
                            setShowModal(true)
                        }}
                        style={shadows}
                        className="bg-gray-white rounded-lg mb-4 p-4 border border-gray-200">
                        <Image
                            source={{ uri: item.image }}
                            className="w-full h-40 rounded-lg"
                            resizeMode="cover"
                        />
                        <Text className="text-md font-bold mt-2"
                        style={{ color: text.secondary }}
                        >{item.name}</Text>
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
                    <ModalHeader>

                    </ModalHeader>
                    <ModalBody >
                        <Text className="text-center text-lg">Funcionalidade

                            em desenvolvimento
                        </Text>
                    </ModalBody>
                    <ModalFooter className="flex justify-center">
                        <Button onPress={() => setShowModal(false)} >
                            <ButtonText
                                className={`bg-${tokens.primary} text-white`}
                            >Fechar</ButtonText>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </ParallaxScrollView>


    );
};

export default ExploreScreen;


