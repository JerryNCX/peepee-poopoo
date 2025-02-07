import {
  Box,
  Flex,
  Table,
  Text,
  HStack,
  Container,
  Image,
  Center,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import cat from "../assets/MyImage/1801287.svg";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPageText,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../components/ui/pagination";
import { useState, useNavigate } from "react";
import BookingConfirmation from "./BookingConfirmation.jsx";

const pageSize = 1;
const count = 5;
const items = [
  { value: "0", text: "Booking Confirmation", path:<BookingConfirmation /> },
  { value: "1", text: "Available Tow Truck" },
  { value: "2", text: "Assignations" },
  { value: "3", text: "Invioce" },
  { value: "4", text: "Feedbacks" },
];

export default function AdminDataManage() {
  // const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const startRange = (page - 1) * pageSize;
  const endRange = startRange + pageSize;
  const visibleItems = items.slice(startRange, endRange);

  return (
    <>
      <Box bg="white" p="1%">
        <HStack alignItems="center">
          <Text
            fontSize="5xl"
            fontStyle="bold"
            color="black"
            fontFamily="sans-serif"
            marginLeft="50px"
          >
            Spot & Tow
          </Text>
          <Container>
            <Image src={cat} w="120px" h="120px" ml="85%" />
          </Container>
        </HStack>
        {visibleItems.map((item, index) => (
          <Container>
            <Stack alignItems="center">
              <PaginationRoot
                count={count}
                pageSize={pageSize}
                defaultPage={1}
                onPageChange={(e) => setPage(e.page)}
                size="lg"
                variant="solid"
                key={item}
                value={index}
              >
                <HStack>
                  <PaginationPrevTrigger color="black" />
                  <PaginationItems color="black"></PaginationItems>
                  <PaginationNextTrigger color="black" />
                </HStack>
                <Center color="black" fontSize="4xl">
                  {item.text}
                </Center>
              </PaginationRoot>
            </Stack>
            {item.path}
          </Container>
        ))}
      </Box>
      {/* <Flex height="100vh">
          <Box
            width="200px"
            bg="gray.100"
            p={4}
            boxShadow="md"
            display="flex"
            flexDirection="column"
            gap={4}
          >
            <Text fontWeight="bold" color="gray.700">
              Booking
            </Text>
            <Text>Schedule</Text>
            <Text>Assignation</Text>
            <Text>Invoice</Text>
            <Text>Feedback</Text>
          </Box>

          <Box flex="1" p={6}>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>
              Booking Confirmation
            </Text>
            <Box
              overflowX="auto"
              border="1px solid"
              borderColor="gray.200"
              rounded="md"
            >
              <Table variant="striped" colorScheme="gray" size="sm">
                <Table.Head bg="gray.200">
                  <Table.Root>
                    <Table.Head>No</Table.Head>
                    <Table.Head>Details</Table.Head>
                    <Table.Head>Payment</Table.Head>
                    <Table.Head>Time</Table.Head>
                    <Table.Head>Verification</Table.Head>
                    <Table.Head>Delete</Table.Head>
                  </Table.Root>
                </Table.Head>

              </Table>
              </Box>
            </Box>
        </Flex> */}
    </>
  );
}
