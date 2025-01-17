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

export default function Payment() {
  return (
    <>
      <Box w="100vw">
        <VStack bgColor="white">
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
              <QrCode value="https://monkeytype.com/" />
            </Center>

            <Center>
              <Box className="text" marginTop="3%" borderColor="black">
                Account Number : XXXX-XXXX-XXXX (Maybank)
              </Box>
            </Center>
          </Container>

          <Container>
            <Center>
              <Field
                label="Payment Proof"
                className="text"
                borderStyle="dotted"
              >
                <FileUploadRoot borderWidth="5px">
                  <FileUploadLabel></FileUploadLabel>
                  <Stack>
                    <Image
                      src={UploadIcon}
                      alt="Upload"
                      width="70px"
                      height="70px"
                    />

                    <FileInput type="file" />
                  </Stack>
                </FileUploadRoot>
              </Field>
            </Center>
          </Container>
        </VStack>
      </Box>
    </>
  );
}
