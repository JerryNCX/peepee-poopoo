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
import truck from "../assets/MyImage/SEF Logo.jpg";
import { InputGroup } from "../components/ui/input-group.jsx";
import { Field } from "../components/ui/field.jsx";
import Nationality from "./Nationality.jsx";
import SelectDate from "./DatePicker.jsx";
import {
  FileInput,
  FileUploadLabel,
  FileUploadRoot,
} from "../components/ui/file-upload";
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
      <Box className="Page" bgColor="#123456">
        <AbsoluteCenter>
          <Flex justifyContent="center">
            <VStack gap="3">
              <Box>
                <VStack paddingBottom="40px">
                  <Text fontSize="7xl" fontWeight="bold">
                    Spot & Tow
                  </Text>
                  <Text fontSize="xl">Car breakdown? Fill this form!!</Text>
                </VStack>
              </Box>
              <Field label="Name" required>
                <Input placeholder="Name" className="Input" />
              </Field>

              <Field label="Contact" required>
                <Input placeholder="Exapmle +6012-345 6789" className="Input" />
              </Field>

              <Field label="Email" required>
                <Input placeholder="Email" className="Input" />
              </Field>

              <Field label="Vehicle Information" required>
                <Input placeholder="BMW M4, WXX 1234" className="Input" />
              </Field>

              <Field
                label="IC / Passport Number"
                invalid
                errorText="Only numbers allowed"
                required
              >
                <Input placeholder="IC / Passport Number" className="Input" />
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

              <Field label="Service Options" required>
                <NativeSelectRoot
                  size="sm"
                  width="-moz-max-content"
                  variant={"subtle"}
                >
                  <NativeSelectField placeholder="Towing">
                    {/* <ServiceOptions /> */}
                  </NativeSelectField>
                </NativeSelectRoot>
              </Field>

              <Field label="Select Date & Time">
                <SelectDate />
              </Field>

              <Field label="Upload Mobile Pictures/Videos">
                <FileUploadRoot gap="1" bgColor="black">
                  <FileUploadLabel></FileUploadLabel>
                  <FileInput />
                </FileUploadRoot>
              </Field>

              <Button
                _hover={{ bg: "green" }}
                colorPalette="peal"
                onClick={() => navigate("/LoadingPage")}
              >
                Next
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
