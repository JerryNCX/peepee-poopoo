import React from "react";
import {
  Box,
  VStack,
  Stack,
  HStack,
  Center,
  Text,
  Container,
} from "@chakra-ui/react";
import { QrCode } from "../components/ui/qr-code";

export default function Payment() {
  return (
    <>
      <Box w="100vw">
        <VStack>
          <Text fontSize="6xl" fontWeight="bold">
            Payment
          </Text>
          <Container padding="3%" bgColor="white">
            <Center>
              <QrCode value="https://www.google.com" />
            </Center>
          </Container>

        </VStack>
      </Box>
    </>
  );
}
