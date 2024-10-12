import { Heading, Icon, User } from "lucide-react-native"
import { Avatar, AvatarBadge, AvatarFallbackText } from "../ui/avatar"
import { HStack } from "../ui/hstack"
import { VStack } from "../ui/vstack"
import { Text, View } from "react-native"


interface AvatarProps {
    title: string;
    icon: React.ReactNode;
}

const AvatarComponent = (props: AvatarProps) => {
    return (
        <HStack space="md" style={{ alignItems: "center" }}>
            <Avatar className="bg-orange-600">
                <AvatarFallbackText className="text-white">
                <Text  className="text-white">     Arlene McCoy</Text>
                </AvatarFallbackText>
            </Avatar>
            <VStack>
                <Text  className="text-black text-md text-center">Marketing Coordinator</Text>
            </VStack>
        </HStack>
    )
} 

export default AvatarComponent;
