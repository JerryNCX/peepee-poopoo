import {
  Flex,
  Image,
  Text,
  Input,
  Box,
  HStack,
  Button,
} from "@chakra-ui/react";
import truck from "../MyImage/tow-truck-svgrepo-com.svg";
import { InputGroup } from "../components/ui/input-group";

function Title() {
  return (
    <>
      <Box minW="100vw" minH="100vh" background="#123456">
        <Flex justifyContent="space-evenly">
          <Text fontSize="100px" fontWeight="bold">
            Spot N Tow
          </Text>
          <Image src={truck} w="180px" h="180px" />
        </Flex>

        <Flex justifyContent="center">
          <HStack gap="10">
            <InputGroup>
              <Input placeholder="Name" />
            </InputGroup>

            <InputGroup>
              <Input placeholder="Contact" />
            </InputGroup>

            <InputGroup>
              <Input placeholder="Email" />
            </InputGroup>

            <InputGroup>
              <Input placeholder="IC Number" />
            </InputGroup>
          <Button background="pink">
            Submit
            </Button>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}

export default Title;
