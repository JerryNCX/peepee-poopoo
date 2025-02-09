import React, { useState } from "react";
import { Box, Heading, Text, Center, Button, VStack, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import PickupConfirmationPage from "./src/Driver/PickupConfirmationPage";

export default function IncomingRequestPage() {

  // State to manage the request status
  const [requestStatus, setRequestStatus] = useState("pending"); // pending, accepted, rejected


  // Mock request data
  const requestData = {
    pickupLocation: "123 Main St, Springfield",
    vehicleInfo: "BMW F30 320 I (Yellow)",
    licensePlate: "VDL 3013",
  };

  // Handle accept request
  const handleAccept = () => {
    setRequestStatus("accepted");
    alert("Request accepted! Proceed to pickup location.");
    const navigate = useNavigate();
    navigate ("/PickupConfirmationPage");
    then (<PickupConfirmationPage/>)
  };

  // Handle reject request
  const handleReject = () => {
    setRequestStatus("rejected");
    alert("Request rejected.");
  };

  return (
    <Box p={4}>
      <Center>
        <VStack spacing={4}>
          {/* Page Title */}
          <Heading as="h1" size="2xl" mb={4}>
            Incoming Request
          </Heading>

          {/* Request Details */}
          <Box borderWidth="1px" borderRadius="lg" p={4} w="100%" maxW="500px">
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Request Details:
            </Text>
            <Text>
              <strong>Pickup Location:</strong> {requestData.pickupLocation}
            </Text>
            <Text>
              <strong>Vehicle Info:</strong> {requestData.vehicleInfo}
            </Text>
            <Text>
              <strong>License Plate:</strong> {requestData.licensePlate}
            </Text>
          </Box>

          {/* Action Buttons */}
          <HStack spacing={4}>
            <Button
              colorScheme="green"
              size="lg"
              onClick={handleAccept} 
              isDisabled={requestStatus !== "pending"} // Disable if request is already accepted/rejected
            >
              Accept
            </Button>
            <Button
              colorScheme="red"
              size="lg"
              onClick={handleReject}
              isDisabled={requestStatus !== "pending"} // Disable if request is already accepted/rejected
            >
              Reject
            </Button>
          </HStack>

          {/* Status Message */}
          {requestStatus !== "pending" && (
            <Text fontSize="lg" color={requestStatus === "accepted" ? "green.500" : "red.500"}>
              Request {requestStatus}!
            </Text>
          )}
        </VStack>
        </Center>
        </Box>
  )}