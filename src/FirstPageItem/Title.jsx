import {
  Flex,
  Image,
  Text,
  Input,
  Box,
  HStack,
  Button,
  VStack,
  NativeSelectRoot,
  NativeSelectField,
} from "@chakra-ui/react";
import truck from "../MyImage/tow-truck-svgrepo-com.svg";
import { InputGroup } from "../components/ui/input-group";
import { Field } from "../components/ui/field";

function Title() {
  return (
    <>
      <Box minW="100vw" minH="100vh" background="#123456">
        <Flex justifyContent="space-evenly">
          <Text fontSize="100px" fontWeight="bolder">
            Spot N Tow
          </Text>
          <Image src={truck} w="180px" h="180px" />
        </Flex>

        <Flex justifyContent="center">
          <VStack gap="10">
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
              <NativeSelectRoot size="sm" width="240px">
                <NativeSelectField placeholder="Nationality">
                  <option value="react">React</option>
                  <option value="vue">Vue</option>
                  <option value="angular">Angular</option>
                  <option value="svelte">Svelte</option>
                </NativeSelectField>
              </NativeSelectRoot>
            </InputGroup>

            <InputGroup>
              <Input placeholder="IC / Passport Number" />
            </InputGroup>
            <Button background="pink">Submit</Button>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

export default Title;
