import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";

export default function IncomingRequestPage() {
  return (
    <>
      <Box>
        <Center>
          <Text fontSize="7xl">Incoming Request</Text>
        </Center>
        <Text>Waiting for the user to accept or deny the request</Text>
      </Box>
    </>
  );
}
