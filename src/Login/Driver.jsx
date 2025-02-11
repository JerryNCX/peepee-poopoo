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

// database password: KNSfByDZLutSR2l5

const items = [
  { value: "a", title: "Contact Us", text: "Some value 1..." },
  { value: "b", title: "Our Story", text: "Some value 2..." },
  { value: "c", title: "Service", text: "Some value 3..." },
  // { value: "d", title: "Login", text: "Admin" },
];
const information = [{ value: "1", Image: cat }];

function Item({ name, Name }) {
  let Content = name;
  if (Name) {
    Content = name;
  }
  return (
    <Text color="black" fontSize="4xl">
      {Content}
    </Text>
  );
}

export default function Admin() {
  const navigate = useNavigate();
  return (
    <>
      <Box maxH="100%" background="yellow.100">
        <Box padding="3% 0% 3%">
          <HStack justifyContent="space-around">
            <Flex paddingLeft="5%">
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
                            <Button onClick={() => navigate("/Admin")}>
                              Admin
                            </Button>
                            <Button onClick={() => navigate("/SystemAdmin")}>
                              System Administration
                            </Button>
                            <Button onClick={() => navigate("/Driver")}>Driver</Button>
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

        <Box h="100%" paddingBottom="5%">
          <Center>
            <Stack w="50%" alignItems="center" gap="7">
              <Item Name={true} name="Driver" />
              <Image src={cat} maxW="200px" borderRadius="full" />
              <Input placeholder="Enter your username" />
              <Input placeholder="Enter your password" />
              <Button
                colorScheme="teal"
                variant="solid"
                _hover={{ bg: "green" }}
                maxW="200px"
                onClick={() => navigate("/IncomingRequestPage")}
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