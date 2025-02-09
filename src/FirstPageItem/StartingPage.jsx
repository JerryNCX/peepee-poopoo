import React, { useState } from "react";
import {
  Box,
  Text,
  HStack,
  Flex,
  Image,
  Button,
  VStack,
  Center,
  AspectRatio,
  Stack,
  Container,
  Link,
} from "@chakra-ui/react";
import truck from "../assets/MyImage/SEF Logo.jpg";
import car from "../assets/MyImage/Car.jpg";
import { useNavigate } from "react-router-dom";
import towTruck from "../assets/MyImage/tow-truck-svgrepo-com.svg";
import phoneIcon from "../assets/MyImage/phone-call-svgrepo-com.svg";
import arrow from "../assets/MyImage/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715_0px.svg";
import cat from "../assets/MyImage/1801287.svg";
import { Rating } from "../components/ui/rating";

const items = [
  { value: "a", title: "Contact Us" },
  { value: "b", title: "Our Story" },
  { value: "c", title: "Service" },
  { value: "d", title: "Login" }, // Login item without text
];

const review = [
  {
    value: "0",
    pic: cat,
    name: "Jerry",
    rating: "4",
    comment: "Service Gempak Terbaik, Penghantaran Laju. Tersangat Gempak!!!!",
  },
  {
    value: "1",
    pic: cat,
    name: "Irfan",
    rating: "5",
    comment: "Laju driver macam charles leclerc!!",
  },
  {
    value: "2",
    pic: cat,
    name: "Azwa",
    rating: "4",
    comment: "10/10 would repeat again",
  },
];

const Reason = [
  { value: "0", title: "Fast Service", Image: truck },
  { value: "1", title: "Reliable Driver", Image: truck },
  { value: "2", title: "Responsive Management", Image: truck },
];

function StartingPage() {
  const navigate = useNavigate();

  const HoverableItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <Box
        position="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box
          w="100px"
          fontSize="md"
          cursor="pointer"
          color="black"
          fontWeight="medium"
        >
          {item.title}
        </Box>

        {isHovered && (
          <Box
            position="absolute"
            top="100%"
            left="0"
            zIndex="1001"
            bg="transparent"
            boxShadow="md"
            borderRadius="md"
            mt={2}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {item.value === "d" ? (
              <VStack gap={2} align="start" p={2}>
                <Button
                  onClick={() => navigate("/Admin")}
                  variant="ghost"
                  w="full"
                  justifyContent="flex-start"
                  _hover={{ bg: "gray.100" }}
                >
                  Admin
                </Button>
                <Button
                  onClick={() => navigate("/SystemAdmin")}
                  variant="ghost"
                  bg="transparent"
                  w="full"
                  justifyContent="flex-start"
                  _hover={{ bg: "gray.100" }}
                >
                  System Administration
                </Button>
                <Button
                  onClick={() => navigate("/Driver")}
                  variant="ghost"
                  bg="transparent"
                  w="full"
                  justifyContent="flex-start"
                  _hover={{ bg: "gray.100" }}
                >
                  Driver
                </Button>
              </VStack>
            ) : (
              item.text && (
                <Button variant="ghost" w="full">
                  {item.text}
                </Button>
              )
            )}
          </Box>
        )}
      </Box>
    );
  };

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
          height="120px" // Fixed height for the header
        >
          <HStack padding="1.5% 1% 2% 2%" justifyContent="space-around">
            {/* Logo and Title */}
            <Flex align="center">
              <Image src={truck} w="80px" h="80px" borderRadius="3xl" />
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

            {/* Navigation Items with Hover Functionality */}
            <Flex gap="20">
              <HStack gap="10">
                {items.map((item, index) => (
                  <HoverableItem key={index} item={item} />
                ))}
              </HStack>
            </Flex>
          </HStack>
        </Box>

        {/* Main Content */}
        <Box paddingTop="100px">
          {" "}
          {/* Adjust padding to account for the fixed header */}
          <Box background="yellow.200" h="80vh">
            <HStack justifyContent="space-evenly" paddingTop="100px">
              <VStack>
                <Container paddingBottom="20">
                  <Text
                    fontSize="4xl"
                    fontWeight="extrabold"
                    paddingBottom="30px"
                    color="black"
                  >
                    Find it. Fix it. Tow
                  </Text>
                  <Text fontSize="xl" fontWeight="bold" color="blackAlpha.700">
                    Fast and reliable towing services
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="blackAlpha.700">
                    {" "}
                    at your fingertips.
                  </Text>
                </Container>
                <Button
                  onClick={() => navigate("/FormPage")}
                  size="2xl"
                  width={{ base: "100%", md: "350px" }}
                  align="center"
                  _hover={{ bg: "gray" }}
                >
                  Book Towing Service
                </Button>
              </VStack>
              <Image
                src={towTruck}
                aspectRatio={16 / 9}
                maxW="50%"
                maxH="45vh"
              />
            </HStack>
          </Box>
          <Center bgColor="#FFFFFF" padding="1%">
            <HStack>
              <Image src={phoneIcon} w="75px" h="75px" borderRadius="2xl" />
              <Text
                fontSize="6xl"
                color="black"
                paddingLeft="100px"
                fontFamily="oswald"
              >
                012-3456789
              </Text>
            </HStack>
          </Center>
          <Box padding="5%" bgColor="yellow.200">
            <HStack gap="10%">
              <Container bottom="10">
                <Stack color="black">
                  <Text fontSize="4xl" fontWeight="bolder">
                    Why Use Spot & Tow Service?
                  </Text>
                  <Text fontSize="xl" pt="10%">
                    Spot & Tow aims to create a safer and more organized
                    <Text>community by addressing parking issues</Text>
                    <Text>swiftly and efficiently.</Text>
                  </Text>
                </Stack>
                <Button
                  width={{ base: "100%", md: "300px" }}
                  top={"20"}
                  size="2xl"
                  paddingLeft="15%"
                  align="center"
                  _hover={{ bg: "gray" }}
                  borderRadius="2xl"
                >
                  Learn More
                  <Image
                    src={arrow}
                    w="30px"
                    h="30px"
                    align="center"
                    borderRadius="3xl"
                  />
                </Button>
              </Container>

              <Container>
                <Stack gap="10">
                  {Reason.map((item, index) => (
                    <HStack gap="20" key={index} value={item.value}>
                      <Image src={item.Image} w="20%" h="20%" />
                      <Box>
                        <Center>
                          <Text fontSize="2xl" color="black">
                            {item.title}
                          </Text>
                        </Center>
                      </Box>
                    </HStack>
                  ))}
                </Stack>
              </Container>
            </HStack>
          </Box>
          <Box bgColor="yellow.200">
            <Container>
              <Center padding="12">
                <VStack color="black">
                  <Text
                    fontSize="5xl"
                    fontWeight="bold"
                    paddingBottom="50px"
                    fontFamily="oswald"
                  >
                    Review of Spot & Tow
                  </Text>

                  <Flex>
                    <Stack gap="30px">
                      {review.map((item, index) => (
                        <Center gap="14" key={index} value={item.value}>
                          <Image
                            src={item.pic}
                            w="100px"
                            h="100px"
                            borderRadius="full"
                          />
                          <VStack>
                            <Text fontSize="2xl">{item.name}</Text>
                            <Rating value={item.rating} />
                            <Box>
                              <Text fontSize="md">{item.comment}</Text>
                            </Box>
                          </VStack>
                        </Center>
                      ))}
                    </Stack>
                  </Flex>
                </VStack>
              </Center>
            </Container>
          </Box>
          <Container
            maxW="100%"
            maxH="fit-content"
            padding="40"
            bg="yellow.200"
            paddingTop="40px"
          >
            <Text
              fontSize="5xl"
              fontWeight="bold"
              pb="50px"
              fontFamily="Oswald"
              textAlign="center"
              color="black"
            >
              Where Are You Now?
            </Text>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </AspectRatio>
          </Container>
          <Box
            p={{ base: 5, md: 8 }}
            marginInline="auto"
            bgColor="whiteAlpha.600"
            w="100vw"
          >
            <Stack
              spacing={{ base: 8, md: 0 }}
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
              p="0% 3% 0% 3%"
            >
              <Box maxW="300px">
                <HStack gap="5">
                  <Image w="100px" src={cat} />
                  <Text fontSize="3xl" fontFamily="oswald">
                    Spot & Tow
                  </Text>
                </HStack>

                <Text mt={2} color="white" fontSize="md">
                  We offer for good quality services at affordable prices.
                </Text>
              </Box>

              <HStack
                spacing={4}
                d={{ base: "none", sm: "flex" }}
                justifyContent={{ sm: "space-between", md: "normal" }}
              >
                <VStack spacing={4} alignItems="flex-start">
                  <Text fontSize="md" fontWeight="bold">
                    About
                  </Text>
                  <VStack spacing={2} alignItems="flex-start" color="gray.500">
                    <Link>Contrinute</Link>
                    <Link>Media assets</Link>
                    <Link>Changelog</Link>
                    <Link>Releases</Link>
                  </VStack>
                </VStack>
                <VStack spacing={4} alignItems="flex-start">
                  <Text fontSize="md" fontWeight="bold">
                    Community
                  </Text>
                  <VStack spacing={2} alignItems="flex-start" color="gray.500">
                    <Link>Chat on Discord</Link>
                    <Link>Follow on Twitter</Link>
                    <Link>Follow on Github</Link>
                    <Link>Github discussions</Link>
                  </VStack>
                </VStack>
                <VStack spacing={4} alignItems="flex-start">
                  <Text fontSize="md" fontWeight="bold">
                    Project
                  </Text>
                  <VStack spacing={2} alignItems="flex-start" color="gray.500">
                    <Link>TemplatesKart</Link>
                    <Link>Documentation</Link>
                    <Link>Github organization</Link>
                    <Link>npm organization</Link>
                  </VStack>
                </VStack>
              </HStack>
            </Stack>
          </Box>
          <Center
            padding="2% 0% 6% 0%"
            color="black"
            bgColor="#FFFFFF"
            fontSize="sm"
          >
            Copyright @ 2024 Spot & Tow
          </Center>
        </Box>
      </Box>
    </>
  );
}

export default StartingPage;
