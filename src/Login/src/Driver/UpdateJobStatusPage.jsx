import React, { useEffect } from "react";
import { Box, Heading, Text, Button, VStack, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function UpdateJobStatusPage() {
  const navigate = useNavigate();

  // Static details for this page
  const bookingId = "TN2023-0456"; // Provided Booking ID
  const vehicleDetails = { model: "BMW F30 320 I" }; // Provided Vehicle Model
  const dropoffLocation = "456 Main Avenue, City Center"; // Static dropoff location

  useEffect(() => {
    console.log("UpdateJobStatusPage rendered with:", { bookingId, dropoffLocation, vehicleDetails });
  }, [bookingId, dropoffLocation, vehicleDetails]);

  // Simulate job status update
  const handleUpdateStatus = () => {
    alert("Job status has been updated successfully!");
    navigate("/someNextPage"); // Navigate to the next page after update
  };

  return (
    <Box p={4}>
      <Center>
        <VStack spacing={6} maxW="600px" w="100%">
          <Heading as="h1" size="xl" color="blue.600">
            Spot & Tow
          </Heading>

          <Heading as="h2" size="lg">
            Update Job Status
          </Heading>

          <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
            <Text fontSize="md" fontWeight="bold">
              <strong>Booking ID:</strong> {bookingId}
            </Text>
            <Text fontSize="md" fontWeight="bold">
              <strong>Dropoff Location:</strong> {dropoffLocation}
            </Text>
            <Text fontSize="md" fontWeight="bold">
              <strong>Vehicle:</strong> {vehicleDetails.model}
            </Text>
          </Box>

          {/* Job status update button */}
          <Box w="100%" p={4} bg="blue.50" borderRadius="lg" textAlign="center">
            <Text fontSize="lg" mb={4}>
              The status of this job will be updated soon.
            </Text>

            <Button 
              colorScheme="yellow" 
              size="lg" 
              onClick={handleUpdateStatus} 
              w="100%"
            >
              Confirm and Update Job Status
            </Button>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
}
