import React from "react";
import { Box, Heading, Text, Center, VStack, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import UpdateJobStatusPage from './UpdateJobStatusPage'; 


export default function DropoffNavigationPage() {
  const location = useLocation();
  const { vehicleDetails, bookingId, dropoffLocation } = location.state || {};

  const navigationDetails = {
    bookingId: bookingId || "TN2023-0456",
    dropoffLocation: dropoffLocation || "456 Main Avenue, City Center",
    trafficStatus: "Good",
    directions: "Turn left in 500m",
    vehicleModel: vehicleDetails?.model || "BMW F30 320 I",
  };

  const navigate = useNavigate();
  const handleGoToJobStatus = () => {
    navigate("/UpdateJobStatusPage");
  };
  

  return (
    <Box p={4}>
      <Center>
        <VStack spacing={6} maxW="600px">
          <Heading as="h1" size="xl" color="blue.600">
            Spot & Tow
          </Heading>

          <Heading as="h2" size="lg">
            Navigation to Drop-off Location
          </Heading>

          <Box w="100%" p={4} bg="blue.50" borderRadius="lg" color="black">
            <Text fontWeight="bold">Traffic status: {navigationDetails.trafficStatus}</Text>
          </Box>

          <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
            <Text><strong>Booking ID:</strong> {navigationDetails.bookingId}</Text>
            <Text mt={2}><strong>Drop-off Location:</strong> {navigationDetails.dropoffLocation}</Text>
            <Text mt={2}><strong>Vehicle:</strong> {navigationDetails.vehicleModel}</Text>
          </Box>

          {/* Placeholder for Map */}
          <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
            <Text fontWeight="bold" mb={4}>Directions:</Text>
            <Center h="200px" bg="gray.100" borderRadius="md" color="black">
              <VStack>
                <Text fontSize="2xl">🚗</Text>
                <Text>{navigationDetails.directions}</Text>
              </VStack>
            </Center>
          </Box>

          {/* Update Job Status Button */}
          <Button colorScheme="blue" size="lg" onClick={handleGoToJobStatus} aria-label="Proceed to update job status">
            Proceed to Update Job Status
          </Button>
        </VStack>
      </Center>
    </Box>
  );
}
