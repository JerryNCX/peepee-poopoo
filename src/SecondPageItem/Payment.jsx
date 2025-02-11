import React, { useState } from "react";
import {
  Box,
  VStack,
  Center,
  Text,
  Container,
  Image,
  Button,
  Input,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { QrCode } from "../components/ui/qr-code";
import UploadIcon from "../assets/MyImage/cloud-upload-svgrepo-com.svg";
import { useNavigate, useLocation } from "react-router-dom";

export default function Payment() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const amount = location.state?.amount || "N/A"; // Get amount from previous page

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0]; // Get first file
    if (uploadedFile) {
      setFile(uploadedFile); // Update state
      console.log("File uploaded:", uploadedFile.name); // Debugging
    }
  };

  const handleSubmit = () => {
    if (!file) {
      alert("🚨 Please upload your payment proof before submitting.");
      return; // Stop submission
    }
    navigate("/Progress"); // Proceed to next page
  };

  return (
    <Box w="100vw" h="130vh" bgColor="white">
      <VStack>
        <Text className="text" fontSize="6xl" fontWeight="bold">
          Payment
        </Text>

        <Container gap="3%">
          <Center>
            <QrCode value="https://github.com/" />
          </Center>

          <Center>
            <Box
              className="text"
              marginTop="3%"
              borderColor="black"
              borderWidth="2px"
              padding="5px 20px 5px"
              color="black"
            >
              <strong>Account Number:</strong> XXXX-XXXX-XXXX (Maybank)
            </Box>
          </Center>

          <Center>
            <Box
              marginTop="3%"
              borderWidth="2px"
              padding="10px"
              fontSize="4xl"
              fontWeight="bold"
              color="red"
            >
              Total Payment: RM {amount}
            </Box>
          </Center>
        </Container>

        {/* Payment Proof Upload */}
        <Box display="flex" w="50%" marginTop="3%">
          <Field>
            <Text color="black" fontSize="3xl">
              Payment Proof
            </Text>
            <Container borderWidth="2px" borderStyle="dashed" padding="50px">
              <Center>
                <Image src={UploadIcon} alt="Upload" width="70px" height="70px" />
              </Center>
              <Input
                type="file"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                bg="white"
                color="black" 
                border="1px solid black"
                p="10px"
                mt="10px"
              />
            </Container>
          </Field>
        </Box>

        <Center>
          <Button
            marginTop="3%"
            borderColor="black"
            _hover={{ bg: "gray" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Center>
      </VStack>
    </Box>
  );
}
