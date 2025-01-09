import React from "react";
import {
  Box,
  Text,
  HStack,
  Flex,
  Image,
  Button,
  VStack,
  AbsoluteCenter,
  Center,
  AspectRatio,
} from "@chakra-ui/react";
import truck from "../MyImage/SEF Logo.jpg";
import { useNavigate } from "react-router-dom";

function StartingPage() {
  const navigate = useNavigate();
  return (
    <>
      <Box background="cyan.700">
        <AspectRatio maxWidth="100%" ratio={{ base: 1, md: 16 / 9 }}>
          <VStack>
            <HStack margin="3">
              <Text margin="0px 100px 0px 0px" fontSize="7xl">
                Spot & Tow
              </Text>
              <Image src={truck} w="120px" h="120px" borderRadius="4xl" />
            </HStack>

            <Button onClick={() => navigate("/FormPage")}>
              Book Towing Service
            </Button>
          </VStack>
        </AspectRatio>
      </Box>
    </>
  );
}

export default StartingPage;
