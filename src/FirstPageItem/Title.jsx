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
import Nationality from "./Nationality";

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
          <VStack gap="5">
            <Field label="Name" required>
              <Input placeholder="Name" background="black" />
            </Field>

            <Field label="Contact" required>
              <Input placeholder="Contact" background="black" />
            </Field>

            <Field label="Email" required>
              <Input placeholder="Email" background="black" />
            </Field>

            <Field label="Nationality" required>
              <NativeSelectRoot size="sm" width="-moz-max-content" variant={"subtle"}>
                <NativeSelectField placeholder="Nationality">
                  <Nationality />
                </NativeSelectField>
              </NativeSelectRoot>
            </Field>

            <Field
              label="IC / Passport Number"
              invalid
              errorText="Only numbers allowed"
              required
            >
              <Input placeholder="IC / Passport Number" background="black" />
            </Field>
            <Button background="cyan">Submit</Button>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

export default Title;
