import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {
  Box,
  VStack,
  Center,
  Text,
  Container,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "650px", // Increased map height (vertical longer)
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

const defaultCenter = {
  lat: 3.139, // Default: Kuala Lumpur
  lng: 101.6869,
};

// Function to calculate distance between two lat/lng points
const haversineDistance = (coord1, coord2) => {
  const toRad = (angle) => (angle * Math.PI) / 180;
  const R = 6371; // Earth's radius in km

  const dLat = toRad(coord2.lat - coord1.lat);
  const dLng = toRad(coord2.lng - coord1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(coord1.lat)) *
      Math.cos(toRad(coord2.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in km
};

export default function PickDropLocation() {
  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);
  const [center, setCenter] = useState(defaultCenter);
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [fare, setFare] = useState(null); // Store calculated fare

  const navigate = useNavigate();

  const handleMapClick = (event) => {
    const location = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    if (step === 1) {
      setPickup(location);
    } else if (step === 2) {
      setDropoff(location);
    }

    setCenter(location);
  };

  const handleConfirmDropoff = () => {
    if (pickup && dropoff) {
      const distance = haversineDistance(pickup, dropoff);
      const ratePerKm = 5; // RM5 per km
      const baseFare = 5; // Minimum fare
      const totalFare = Math.max(baseFare, distance * ratePerKm);

      setFare(totalFare.toFixed(2)); // Round to 2 decimal places
      setShowModal(true);
    }
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Box w="100vw" h="110vh" bgColor="white">
        <VStack spacing={6} justify="center" h="100%">
          {/* Centered Title */}
          <Text fontSize="4xl" fontWeight="bold" color="black" mt="-20px">
            {step === 1 ? "Select Pickup Location" : "Select Drop-off Location"}
          </Text>

          {/* Space Above the Map */}
          <Container w="100%" maxW="1500px" h="700px">
            <Center>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                onClick={handleMapClick}
              >
                {pickup && <Marker position={pickup} label="📍" />}
                {dropoff && <Marker position={dropoff} label="📍" />}
              </GoogleMap>
            </Center>
          </Container>

          {/* Centered Confirm Button */}
          <Center mt="20px">
            {step === 1 && pickup && (
              <Button
                bg="blue.500"
                color="white"
                px={6}
                py={3}
                _hover={{ bg: "blue.600" }}
                onClick={() => setStep(2)}
              >
                Confirm Pickup
              </Button>
            )}
            {step === 2 && dropoff && (
              <Button
                bg="green.500"
                color="white"
                px={6}
                py={3}
                _hover={{ bg: "green.600" }}
                onClick={handleConfirmDropoff}
              >
                Confirm Drop-off
              </Button>
            )}
          </Center>
        </VStack>

        {/* Confirmation Modal */}
        {showModal && (
          <Box
            position="fixed"
            top="0"
            left="0"
            w="100vw"
            h="100vh"
            bg="blackAlpha.600"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              bg="white"
              p={6}
              borderRadius="10px"
              textAlign="center"
              boxShadow="lg"
            >
              <Text fontSize="xl" fontWeight="bold" color="black" mb={4}>
                Confirmation
              </Text>
              <Text color="black">
                <strong>Pickup:</strong> {pickup ? `${pickup.lat}, ${pickup.lng}` : "Not selected"}
              </Text>
              <Text color="black">
                <strong>Drop-off:</strong> {dropoff ? `${dropoff.lat}, ${dropoff.lng}` : "Not selected"}
              </Text>
              {fare && (
                <Text color="black" fontSize="xl" fontWeight="bold" mt={2}>
                  <strong>Estimated Fare: RM {fare}</strong>
                </Text>
              )}
              <Center mt={4}>
                <Button
                  bg="gray.400"
                  color="white"
                  mr={3}
                  _hover={{ bg: "gray.500" }}
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </Button>
              

                  <Button
                    bg="green.500"
                    color="white"
                    _hover={{ bg: "green.600" }}
                    onClick={() => {
                      setShowModal(false);
                      alert("Booking Confirmed!");
                        navigate("/Payment", { state: { amount: fare } }); 
                    }}>
                    Confirm
                  </Button>
              </Center>
            </Box>
          </Box>
        )}
      </Box>
    </LoadScript>
  );
}
