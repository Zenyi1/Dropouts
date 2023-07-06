import { FC } from "react"
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Connected: FC = () => {
  return (
    <HStack>
      <VStack spacing={20}>
        <Container marginTop={8}>
          <VStack spacing={8}>
            <Heading
              color="white"
              as="h1"
              size="2xl"
              noOfLines={1}
              textAlign="center"
              style={{ lineHeight: "1.5" }}
            >
              Welcome Dropper.
            </Heading>

            <Text color="bodyText" fontSize="xl" textAlign="center">
              Each dropout is randomly generated and can be staked to receive
              <Text as="b"> $DRP</Text> Use your <Text as="b"> $DRP</Text> to
              upgrade your dropper and receive perks within the community!
            </Text>
          </VStack>
        </Container>

        
        <Button bgColor="accent" color="white" maxW="380px">
          <HStack>
            <Text>mint dropper</Text>
            <ArrowForwardIcon />
          </HStack>
        </Button>
      </VStack>
      <VStack spacing={5}>
        <Image src="avatar1.png" alt="" />
      </VStack>
      </HStack>
  )
}

export default Connected