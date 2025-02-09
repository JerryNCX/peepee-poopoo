import React from "react";
import {
  Container,
  Text,
  HStack,
  VStack,
  Stack,
  Box,
  Button,
  Image,
  Flex,
  Center,
  Input,
} from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../components/ui/accordion";
import truck from "../assets/MyImage/SEF Logo.jpg";
import { useNavigate } from "react-router-dom";
import cat from "../assets/MyImage/1801287.svg";
import { ThemeContext } from "@emotion/react";

const items = [
  { value: "a", title: "Contact Us", text: "Some value 1..." },
  { value: "b", title: "Our Story", text: "Some value 2..." },
  { value: "c", title: "Service", text: "Some value 3..." },
  { value: "d", title: "Login"},
];
const information = [{ value: "1", Image: cat}];


function Item({ name, Name }) {
  let Content = name;
  if (Name) {
    Content = name;
  }
  return (
    <Text color="black" fontSize="4xl" fontFamily="Oswald" fontWeight="bold">
      {Content}
    </Text>
  );
}

export default function SystemAdmin() {
  const navigate = useNavigate();
  return (
    <>
      <Box w="100vw">
        {/* Fixed Header */}
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          zIndex="1000"
          background="yellow.200"
          height="100px" // Fixed height for the header
        >
          <HStack padding="2% 0% 1% 0%" justifyContent="space-around">
            <Flex align="center">
              <Image src={truck} w="70px" h="70px" borderRadius="3xl" />
              <Center>
                <Text
                  fontSize="4xl"
                  fontStyle="bold"
                  color="black"
                  fontFamily="Oswald"
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
                        {/* Conditionally render the dropdown for Login */}
                        {item.value === "d" ? (
                          <Box
                            position="absolute"
                            top="100%"
                            left="1000"
                            zIndex="1001"
                            bg="ghost"
                            boxShadow="md"
                            borderRadius="md"
                            mt={2}
                          >
                            <VStack gap={2} align="start" p={2}>
                              <Button
                                onClick={() => navigate("/Admin")}
                                variant="ghost"
                                textAlign="left"
                                w="full"
                                justifyContent="flex-start"
                              >
                                Admin
                              </Button>
                              <Button
                                onClick={() => navigate("/SystemAdmin")}
                                variant="ghost"
                                textAlign="left"
                                w="full"
                                justifyContent="flex-start"
                              >
                                System Administration
                              </Button>
                              <Button
                                onClick={() => navigate("/Driver")}
                                variant="ghost"
                                textAlign="left"
                                w="full"
                                justifyContent="flex-start"
                              >
                                Driver
                              </Button>
                            </VStack>
                          </Box>
                        ) : (
                          <Button>{item.text}</Button>
                        )}
                      </AccordionItemContent>
                    </AccordionItem>
                  ))}
                </HStack>
              </AccordionRoot>
            </Flex>
          </HStack>
        </Box>

        <Box h="100%" paddingTop="150px" bg="yellow.200">
          <Center>
            <Stack w="30%" alignItems="center" gap="7">
              <Item Name={true} name="System Administration" fontWeight="bold"/>
              <Box 
                borderWidth="1px" 
                borderColor="black" 
                borderRadius="full" 
                display="inline-block"
                paddingBottom="10px"
              >
                <Image src={cat} maxW="200px" borderRadius="full" />
              </Box>
              <Input 
                placeholder="Enter your username" 
                textAlign="center" 
                width="300px" 
                borderRadius="20px" 
                borderWidth="1px" 
                borderColor="black"
                bg="white" 
              />
              <Input 
                placeholder="Enter your password" 
                textAlign="center" 
                width="300px" 
                borderRadius="20px" 
                borderWidth="1px" 
                borderColor="black"
                bg="white" 
              />
              <Button colorScheme="white" variant="solid" _hover={{ bg: "gray.400" }} 
              maxW="200px" 
              width="300px" 
              borderRadius="20px"
              onClick={() => navigate("/SystemAdminDataManage")}
              >
                Login
              </Button>
            </Stack>
          </Center>
        </Box>
      </Box>
    </>
  );
}
