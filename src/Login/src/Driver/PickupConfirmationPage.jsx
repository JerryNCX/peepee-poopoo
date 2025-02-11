import React from "react";
import { Box, Heading, Text, Center, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import NavigationPage from "../NavigationPage";

export default function PickupConfirmation() {
  const navigate = useNavigate();


  const bookingDetails = {
    bookingId: "TN2023-0456",
    pickupLocation: "123 Main Street, City Center",
    vehicleDetails: { model: "BMW F30 320 I" },
  };

  // Handle navigation to NavigationPage
  const handleConfirmPickup = () => {
    navigate("/navigation", { state: bookingDetails });
  };

  return (
    <Box p={4}>
      <Center>
        <VStack spacing={6} maxW="600px">
          <Heading as="h1" size="xl" color="blue.600">
            Pickup Confirmation
          </Heading>

          <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
            <Text><strong>Booking ID:</strong> {bookingDetails.bookingId}</Text>
            <Text mt={2}><strong>Pickup Location:</strong> {bookingDetails.pickupLocation}</Text>
            <Text mt={2}><strong>Vehicle:</strong> {bookingDetails.vehicleDetails.model}</Text>
          </Box>

          {/* Confirm Pickup Button */}
          <Button colorScheme="blue" size="lg" onClick={handleConfirmPickup}>
            Confirm Pickup
          </Button>
        </VStack>
      </Center>
    </Box>
  );
}
