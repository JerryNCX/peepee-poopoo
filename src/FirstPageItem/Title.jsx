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
  ProgressRoot,
} from "@chakra-ui/react";
import truck from "../MyImage/SEF Logo.jpg";
import { InputGroup } from "../components/ui/input-group";
import { Field } from "../components/ui/field";
import Nationality from "./Nationality";
import { BrowserRouter, Links, Route, Routes, Link, useNavigate } from "react-router-dom";
import TowingProcessing from "../SecondPageItem/TowingProcessing.jsx";


function Title() {
  const navigate = useNavigate();
  return (
    <>
      <Box className="HomePage" background="#123456" paddingTop="20px">
        <Flex justifyContent="space-evenly">
          <div className="title">
            <HStack margin="3">
              <Text margin="0px 100px 0px 0px">Spot N Tow</Text>
              <Image src={truck} w="160px" h="160px" borderRadius="4xl" />
            </HStack>
          </div>
        </Flex>

        <Flex justifyContent="center">
          <VStack gap="3">
            <Field label="Name" required>
              <Input placeholder="Name" className="Input" />
            </Field>

            <Field label="Contact" required>
              <Input placeholder="Example 0123456789" className="Input" />
            </Field>

            <Field label="Email" required>
              <Input placeholder="Email" className="Input" />
            </Field>

            <Field label="Nationality" required>
              <NativeSelectRoot
                size="sm"
                width="-moz-max-content"
                variant={"subtle"}
              >
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

            <Button colorPalette="peal" onClick={() => navigate("/ProcessingPage")}>
              Submit
            </Button>

            <Text color="red.400">* Required</Text>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

export default Title;
