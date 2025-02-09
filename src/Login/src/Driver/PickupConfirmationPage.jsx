import React from "react";
import { Box, Heading, Text, Center, Button, VStack, Image } from "@chakra-ui/react";

export default function PickupConfirmationPage() {
  // Mock vehicle data
  const vehicleDetails = {
    model: "BMW F30 320 I",
    color: "Yellow",
    licensePlate: "VDL 3013",
  };

  // Handle pickup confirmation
  const handleConfirmPickup = () => {
    alert("Pickup confirmed! Proceed to drop-off location.");
    // Add navigation logic here (e.g., redirect to next page)
  };

  return (
    <Box p={4}>
      <Center>
        <VStack spacing={6} maxW="600px">
          {/* Header */}
          <Heading as="h1" size="xl" color="blue.600">
            Spot & Tow
          </Heading>

          {/* Page Title */}
          <Heading as="h2" size="lg">
            Pickup Confirmation
          </Heading>

          {/* Vehicle Details */}
          <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Vehicle Details:
            </Text>
            <Text><strong>Model:</strong> {vehicleDetails.model}</Text>
            <Text><strong>Color:</strong> {vehicleDetails.color}</Text>
            <Text><strong>License Plate:</strong> {vehicleDetails.licensePlate}</Text>
          </Box>

          {/* Photo Upload/Placeholder */}
          <Box w="100%" p={4} borderWidth="2px" borderStyle="dashed" borderRadius="lg">
            <Text textAlign="center" mb={2}>
              Photo before pickup:
            </Text>
            <Center h="200px" bg="gray.100" borderRadius="md">
              <Text color="gray.500">Insert photo here</Text>
            </Center>
          </Box>

          {/* Confirmation Button */}
          <Button
            colorScheme="blue"
            size="lg"
            onClick={handleConfirmPickup}
            w="100%"
          >
            Confirm Pickup
          </Button>
        </VStack>
      </Center>
    </Box>
  );
}