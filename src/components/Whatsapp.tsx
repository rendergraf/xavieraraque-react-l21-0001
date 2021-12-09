import ReactWhatsapp from 'react-whatsapp';
import { chakra, Icon } from "@chakra-ui/react"
import { IoLogoWhatsapp } from 'react-icons/io'

const Chat = chakra(ReactWhatsapp)


export default function Whatsapp() {
    return (
        <Chat
            padding="6px 20px"
            
            fontWeight="600"
            _hover={{ bg: 'gray.100' }}
            type="button"
            number="+34-624436094"
            message="Hello Xavier, I'm writing to you from your website ..!"
        >
            <Icon color="#1970F1" transform="translateY(3px)" marginEnd="0.5em" boxSize={5} as={IoLogoWhatsapp} />WhatsApp
        </Chat>
    )
}
