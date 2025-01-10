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
  Stack,
  Container,
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
        <Box background="yellow.200" minH="100vh">
          {/* <Box css={{backgroundImage: `url(${car})`}} backgroundSize="cover" backgroundRepeat="no-repeat" backgroundPosition="center" > */}
          <HStack justifyContent="space-evenly">
            <Button
              onClick={() => navigate("/FormPage")}
              size="2xl"
              _hover={{ bg: "green" }}
              margin="0% 0% 0% 10%"
            >
              Book Towing Service
            </Button>
            <Container maxW="50%" maxH="100vh">
            <AspectRatio ratio={16 / 9}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
            </AspectRatio>
            </Container>
          </HStack>
        </Box>
      </Box>
    </>
  );
}

export default StartingPage;
