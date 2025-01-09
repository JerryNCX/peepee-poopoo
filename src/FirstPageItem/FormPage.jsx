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
  AbsoluteCenter,
} from "@chakra-ui/react";
import truck from "../MyImage/SEF Logo.jpg";
import { InputGroup } from "../components/ui/input-group.jsx";
import { Field } from "../components/ui/field.jsx";
import Nationality from "./Nationality.jsx";
import {
  BrowserRouter,
  Links,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

function FormPage() {
  const navigate = useNavigate();
  return (
    <>
      <Box className="Page" background="#123456" paddingTop="20px">
        <AbsoluteCenter>
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

              <Button
              _hover={{bg: "green"}}
                colorPalette="peal"
                onClick={() => navigate("/LoadingPage")}
              >
                Submit
              </Button>

              <Text color="red.400">* Required</Text>
            </VStack>
          </Flex>
        </AbsoluteCenter>
      </Box>
    </>
  );
}

export default FormPage;
