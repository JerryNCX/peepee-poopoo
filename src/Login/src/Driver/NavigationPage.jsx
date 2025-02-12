import React from "react";
import { Box, Heading, Text, Center, VStack, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavigationPage() {
  const location = useLocation();
  

  const { vehicleDetails, bookingId, pickupLocation } = location.state || {};

  const navigationDetails = {
    bookingId: bookingId || "TN2023-0456",
    pickupLocation: pickupLocation || "123 Main Street, City Center",
    trafficStatus: "Good",
    directions: "Turn left in 500m",
    vehicleModel: vehicleDetails?.model || "BMW F30 320 I",
  };

  // Function to handle next button click
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/DropoffNavigationpage", {
      state: {
        vehicleDetails,
        bookingId,
        dropoffLocation: "456 Main Avenue, City Center", // Update with actual drop-off location
      },
    });
  };

  return (
    <Box p={4}>
      <Center>
        <VStack spacing={6} maxW="600px">
          <Heading as="h1" size="xl" color="blue.600">
            Spot & Tow
          </Heading>

          <Heading as="h2" size="lg">
            Navigation to Pickup Location
          </Heading>

          <Box w="100%" p={4} bg="blue.50" borderRadius="lg" color={"black"}>
            <Text fontWeight="bold">
              Traffic status: {navigationDetails.trafficStatus}
            </Text>
          </Box>

          <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
            <Text>
              <strong>Booking ID:</strong> {navigationDetails.bookingId}
            </Text>
            <Text mt={2}>
              <strong>Pickup Location:</strong> {navigationDetails.pickupLocation}
            </Text>
            <Text mt={2}>
              <strong>Vehicle:</strong> {navigationDetails.vehicleModel}
            </Text>
          </Box>

          <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
            <Text fontWeight="bold" mb={4}>
              Directions:
            </Text>
            <Center h="200px" bg="gray.100" borderRadius="md" color={"black"}>
              <VStack>
                <Text fontSize="2xl">🚗</Text>
                <Text>{navigationDetails.directions}</Text>
              </VStack>
            </Center>
          </Box>

          {/* Add Next Button Below */}
          <Button colorScheme="blue" size="lg" onClick={handleNext}>
            Next
          </Button>
        </VStack>
      </Center>
    </Box>
  );
}

