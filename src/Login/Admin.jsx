import React from "react";
import { Container, Text, HStack, VStack, Box, Button } from "@chakra-ui/react";
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

export default function Admin() {
  return (
    <>
      <Box bg="white">
        <Container>
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
        </Container>
      </Box>
    </>
  );
}
