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
import car from "../assets/Car.jpg";
import { useNavigate } from "react-router-dom";

function StartingPage() {
  const navigate = useNavigate();
  //   const carImage = {
  //     backgroundImage: `path(${car})`,
  //   }
  return (
    <>
      <Box maxWidth="100%" maxHeight="100vh">
        <Box background="yellow.100">
          <Center>
            <VStack>
              <HStack margin="30px">
                <Text
                  margin="0px 150px 0px 0px"
                  fontSize="7xl"
                  fontStyle="bold"
                  color="black"
                >
                  Spot & Tow
                </Text>
                <Image src={truck} w="120px" h="120px" borderRadius="4xl" />
              </HStack>
            </VStack>
          </Center>
        </Box>
        <Box background="yellow.200">
          {/* <Box css={{backgroundImage: `url(${car})`}} backgroundSize="cover" backgroundRepeat="no-repeat" backgroundPosition="center" > */}
          <Box padding="20% 0% 7% 15%">
            <Button
              onClick={() => navigate("/FormPage")}
              size="2xl"
              _hover={{ bg: "green" }}
            >
              Book Towing Service
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default StartingPage;
