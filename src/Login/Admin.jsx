import React from "react";
import { Container, Text, HStack, VStack, Box, Button, Image, Flex, Center, } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../components/ui/accordion";
import truck from "../assets/MyImage/SEF Logo.jpg";
import { useNavigate } from "react-router-dom";

const items = [
  { value: "a", title: "Contact Us", text: "Some value 1..." },
  { value: "b", title: "Our Story", text: "Some value 2..." },
  { value: "c", title: "Service", text: "Some value 3..." },
  // { value: "d", title: "Login", text: "Admin" },
];

export default function Admin() {
  const navigate = useNavigate();
  return (
    <>
      <Box bg="yellow.100">
        <Box background="yellow.100" >
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
                        <HStack gap="10">
                          {items.map((item, index) => (
                            <AccordionItem key={index} value={item.value}>
                              <AccordionItemTrigger color="black">
                                <Box w="100px">{item.title}</Box>
                              </AccordionItemTrigger>
                              <AccordionItemContent>
                                <Button>{item.text}</Button>
                              </AccordionItemContent>
                            </AccordionItem>
                          ))}
        
                          <Container>
                            <AccordionRoot collapsible>
                              <AccordionItem w="180px">
                                <AccordionItemTrigger color="black">
                                  Login
                                </AccordionItemTrigger>
                                <AccordionItemContent>
                                  <VStack gap="2">
                                    <Button onClick={() => navigate("/Admin")}>Admin</Button>
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
        {/* <Container>
          <HStack>
            <Text
              fontSize="5xl"
              fontStyle="bold"
              color="black"
              fontFamily="sans-serif"
              marginLeft="50px"
            >
              Spot & Tow
            </Text>
            <AccordionRoot collapsible>
              <HStack gap="10">
                {items.map((item, index) => (
                  <AccordionItem key={index} value={item.value}>
                    <AccordionItemTrigger color="black">
                      <Box w="100px">{item.title}</Box>
                    </AccordionItemTrigger>
                    <AccordionItemContent>
                      <Button>{item.text}</Button>
                    </AccordionItemContent>
                  </AccordionItem>
                ))}
              </HStack>
            </AccordionRoot>
          </HStack>
        </Container> */}
      </Box>
    </>
  );
}
