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
import phoneIcon from "../MyImage/phone-call-svgrepo-com.svg";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../components/ui/accordion";
import arrow from "../MyImage/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715_0px.svg";
import cat from "../MyImage/1801287.svg";
import { Rating } from "../components/ui/rating";

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

        <Box background="yellow.200" minH="80vh">
          {/* <Box css={{backgroundImage: `url(${car})`}} backgroundSize="cover" backgroundRepeat="no-repeat" backgroundPosition="center" > */}
          <HStack justifyContent="space-evenly" paddingTop="100px">
            <VStack>
              <Container paddingBottom="20">
                <Text
                  fontSize="4xl"
                  fontWeight="extrabold"
                  paddingBottom="30px"
                  color="blackAlpha.700"
                >
                  Find it. Fix it. Tow
                </Text>
                <Text fontSize="xl" fontWeight="bold" color="blackAlpha.500">
                  Fast and reliable towing services
                </Text>
                <Text fontSize="lg" fontWeight="bold" color="blackAlpha.500">
                  {" "}
                  at your fingertips.
                </Text>
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
          </HStack>
        </Box>

        <Center bgColor="#FFFFFF" padding="1%">
          <HStack>
            <Image src={phoneIcon} w="75px" h="75px" borderRadius="2xl" />
            <Text fontSize="6xl" color="black" paddingLeft="100px">
              012-3456789
            </Text>
          </HStack>
        </Center>

        <Box padding="5%" bgColor="cyan.focusRing">
          <HStack gap="10%">
            <Container bottom="10">
              <Stack>
                <Text fontSize="4xl" fontWeight="bolder">
                  Why Use Spot & Tow Service?
                </Text>
                <Box paddingTop="10">
                  <Text fontSize="xl">
                    Spot & Tow aims to create a safer and more organized
                    <Text>community by addressing parking issues</Text>
                    <Text>swiftly and efficiently.</Text>
                  </Text>
                </Box>
              </Stack>
              <Button
                color="black"
                top={"20"}
                size="2xl"
                _hover={{ bg: "green" }}
                borderRadius="2xl"
              >
                Learn More
                <Image src={arrow} w="30px" h="30px" />
              </Button>
            </Container>

            <Container>
              <Stack gap="10">
                <HStack gap="20">
                  <Image src={truck} w="20%" h="20%" />
                  <Box>
                    <Center>
                      <Text fontSize="2xl">Fast Service</Text>
                    </Center>
                  </Box>
                </HStack>

                <HStack gap="20">
                  <Image src={truck} w="20%" h="20%" />
                  <Box>
                    <Center>
                      <Text fontSize="2xl">Reliable Driver</Text>
                    </Center>
                  </Box>
                </HStack>

                <HStack gap="20">
                  <Image src={truck} w="20%" h="20%" />
                  <Box>
                    <Center>
                      <Text fontSize="2xl">Responsive Management</Text>
                    </Center>
                  </Box>
                </HStack>
              </Stack>
            </Container>
          </HStack>
        </Box>

        <Box bgColor="#345345">
          <Container>
            <Center padding="12">
              <VStack>
                <Text
                  fontSize="5xl"
                  fontWeight="extrabold"
                  paddingBottom="50px"
                >
                  Review of Spot & Tow
                </Text>

                <Flex>
                  <HStack>
                    <Center gap="14">
                      {/* <Image src={cat} w="5%" /> */}
                      <Image src={truck} w="15%" borderRadius="full" />
                      <VStack>
                        <Text fontSize="xl">Jerry Ng Choong Xin</Text>
                        <Rating defaultValue={4} size="lg" />
                      </VStack>
                    </Center>
                  </HStack>
                  <Box bgColor="#FFFFFF" marginTop="20px">
                    <Text color="black" padding="5">
                      Service Gempak Terbaik, Penghantaran Laju, Tersangat
                      Gempak!!!
                    </Text>
                  </Box>

                  <HStack>
                    <Center gap="14">
                      {/* <Image src={cat} w="5%" /> */}
                      <Image src={truck} w="15%" borderRadius="full" />
                      <VStack>
                        <Text fontSize="xl">Jerry Ng Choong Xin</Text>
                        <Rating defaultValue={4} size="lg" />
                      </VStack>
                    </Center>
                  </HStack>
                  <Box bgColor="#FFFFFF" marginTop="20px" maxW="40%">
                    <Text color="black" padding="5">
                      Service Gempak Terbaik, Penghantaran Laju, Tersangat
                      Gempak!!!
                    </Text>
                  </Box>
                </Flex>

                <Flex>
                  <HStack>
                    <Center gap="14">
                      {/* <Image src={cat} w="5%" /> */}
                      <Image src={truck} w="15%" borderRadius="full" />
                      <VStack>
                        <Text fontSize="xl">Jerry Ng Choong Xin</Text>
                        <Rating defaultValue={4} size="lg" />
                      </VStack>
                    </Center>
                  </HStack>
                  <Box bgColor="#FFFFFF" marginTop="20px" maxW="40%">
                    <Text color="black" padding="5">
                      Service Gempak Terbaik, Penghantaran Laju, Tersangat
                      Gempak!!!
                    </Text>
                  </Box>

                  <HStack>
                    <Center gap="14">
                      {/* <Image src={cat} w="5%" /> */}
                      <Image src={truck} w="15%" borderRadius="full" />
                      <VStack>
                        <Text fontSize="xl">Jerry Ng Choong Xin</Text>
                        <Rating defaultValue={4} size="lg" />
                      </VStack>
                    </Center>
                  </HStack>
                  <Box bgColor="#FFFFFF" marginTop="20px" maxW="40%">
                    <Text color="black" padding="5">
                      Service Gempak Terbaik, Penghantaran Laju, Tersangat
                      Gempak!!!
                    </Text>
                  </Box>
                </Flex>
              </VStack>
            </Center>
          </Container>
        </Box>

        <Container maxW="100%" maxH="fit-content" padding="40" bg="yellow.300">
          <AspectRatio ratio={16 / 9}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
          </AspectRatio>
        </Container>
      </Box>
    </>
  );
}

export default StartingPage;