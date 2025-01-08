import React from "react";
import {
  Box,
  Text,
  HStack,
  Flex,
  Image,
  Button,
  VStack,
} from "@chakra-ui/react";
import truck from "../MyImage/SEF Logo.jpg";
import { useNavigate } from "react-router-dom";

function StartingPage() {
  const navigate = useNavigate();
  return (
    <>
      <Box className="Page">
        <Flex justifyContent="space-evenly">
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
        </Flex>
      </Box>
    </>
  );
}

export default StartingPage;
