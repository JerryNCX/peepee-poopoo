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
import towTruck from "../MyImage/tow-truck-svgrepo-com.svg";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../components/ui/accordion";

const items = [
  { value: "a", title: "Contact Us", text: "Some value 1..." },
  { value: "b", title: "Our Story", text: "Some value 2..." },
  { value: "c", title: "Service", text: "Some value 3..." },
  // { value: "d", title: "Login", text: "Admin" },
];

function StartingPage() {
  const navigate = useNavigate();
  return (
    <>
      <Box maxWidth="100%">
        <Box background="yellow.100">
          <HStack padding="3% 0% 3% 0%" justifyContent="space-around">
            <Flex paddingLeft="10%">
              <Image src={truck} w="100px" h="100px" borderRadius="4xl" />
              <Center>
                <Text
                  fontSize="5xl"
                  fontStyle="bold"
                  color="black"
                  fontFamily="sans-serif"
                  marginLeft="50px"
                >
                  Spot & Tow
                </Text>
              </Center>
            </Flex>
            <Flex gap="20">
              <AccordionRoot collapsible>
                <HStack gap="20">
                  {items.map((item, index) => (
                    <AccordionItem key={index} value={item.value} >
                      <AccordionItemTrigger color="black">
                        <Box w="fit-content">
                        {item.title}
                        </Box>
                      </AccordionItemTrigger>
                      <AccordionItemContent>
                        <Button>{item.text}</Button>
                      </AccordionItemContent>
                    </AccordionItem>
                  ))}
                  <Container>
                    <AccordionRoot collapsible>
                      <AccordionItem w="180px">
                        <AccordionItemTrigger color="black" >
                          Login
                        </AccordionItemTrigger>
                        <AccordionItemContent>
                          <VStack gap="2">
                            <Button>Admin</Button>
                            <Button>System Administration</Button>
                          </VStack>
                        </AccordionItemContent>
                      </AccordionItem>
                    </AccordionRoot>
                  </Container>
                </HStack>
              </AccordionRoot>
            </Flex>
          </HStack>
        </Box>
        <Box background="yellow.200" minH="100vh">
          {/* <Box css={{backgroundImage: `url(${car})`}} backgroundSize="cover" backgroundRepeat="no-repeat" backgroundPosition="center" > */}
          <HStack justifyContent="space-evenly" paddingTop="100px">
            <VStack>
              <Container paddingBottom="20">
              <Text fontSize="4xl" fontWeight="extrabold" paddingBottom="30px" color="blackAlpha.700">Find it. Fix it. Tow</Text>
              <Text fontSize="xl" fontWeight="bold" color="blackAlpha.500">Fast and reliable towing services</Text>
              <Text fontSize="lg" fontWeight="bold" color="blackAlpha.500"> at your fingertips.</Text>
              </Container>
            <Button
              onClick={() => navigate("/FormPage")}
              size="2xl"
              _hover={{ bg: "green" }}
              
              >
              Book Towing Service
            </Button>
              </VStack>
            <Image src={towTruck} aspectRatio={16 / 9} maxW="50%" maxH="45vh" />
            {/* <Container maxW="50%" maxH="100vh">
              <AspectRatio ratio={16 / 9}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
              </AspectRatio>
            </Container> */}
          </HStack>
        </Box>
      </Box>
    </>
  );
}

export default StartingPage;
