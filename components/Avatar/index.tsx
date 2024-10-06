import { Heading, Icon, User } from "lucide-react-native"
import { Avatar, AvatarBadge, AvatarFallbackText } from "../ui/avatar"
import { HStack } from "../ui/hstack"
import { VStack } from "../ui/vstack"
import { View } from "react-native"
import { Text } from "../ui/text"

interface AvatarProps {
    title: string;
    icon: React.ReactNode;
}

const AvatarComponent = (props: AvatarProps) => {
    return (
        <HStack space="md" style={{ alignItems: "center" }}>
            <Avatar className="bg-orange-600">
                <AvatarFallbackText className="text-white">
                    Arlene McCoy
                </AvatarFallbackText>
            </Avatar>
            <VStack>
                <Text size="sm" className="text-black text-md text-center">Marketing Coordinator</Text>
            </VStack>
        </HStack>
    )
} 

export default AvatarComponent;
