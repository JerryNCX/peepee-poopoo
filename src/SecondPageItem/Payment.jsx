import React from "react";
import {
  Box,
  VStack,
  Stack,
  HStack,
  Center,
  Text,
  Container,
  Image,
  Button,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { QrCode } from "../components/ui/qr-code";
import QrCodePayment from "../assets/MyImage/QrCode.jpg";
import UploadIcon from "../assets/MyImage/cloud-upload-svgrepo-com.svg";
import {
  FileInput,
  FileUploadLabel,
  FileUploadRoot,
} from "../components/ui/file-upload";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  return (
    <>
      <Box w="100vw" h="130vh" bgColor="white">
        <VStack>
          <Text className="text" fontSize="6xl" fontWeight="bold">
            Payment
          </Text>
          <Container gap="3%">
            <Center>
              {/* <Image
                src={QrCodePayment}
                alt="QrCode"
                width="300px"
                height="300px"
              /> */}
              <QrCode value="https://github.com/" />
            </Center>

            <Center>
              <Box
                className="text"
                marginTop="3%"
                borderColor="black"
                borderWidth="2px"
                padding="5px 20px 5px"
              >
                Account Number : XXXX-XXXX-XXXX (Maybank)
              </Box>
            </Center>
          </Container>

          <Box display="flex" w="50%" marginTop="3%">
            <Field>
              <Text color="black" fontSize="3xl">
                Payment Proof
              </Text>
              <Container borderWidth="2px" borderStyle="dashed" padding="50px">
                <FileUploadRoot alignItems="center">
                  <FileUploadLabel></FileUploadLabel>
                  <Image
                    src={UploadIcon}
                    alt="Upload"
                    width="70px"
                    height="70px"
                  />
                  <FileInput type="file" w="400px" />
                </FileUploadRoot>
              </Container>
            </Field>
          </Box>

          <Center>
            <Button 
            marginTop="3%" 
            borderColor="black" 
            _hover={{ bg: "gray" }}
            onClick={() => {
              navigate("/Progress");
            }
            }
            >
              Submit
            </Button>
          </Center>
        </VStack>
      </Box>
    </>
  );
}
