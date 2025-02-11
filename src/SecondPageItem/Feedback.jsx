import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation
import { Box, Button, Textarea, Text, VStack, Container } from "@chakra-ui/react";

const Feedback = () => {
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = () => {
    setSubmitted(true); // Show thank-you message

    setTimeout(() => {
      setSubmitted(false); // Hide thank-you message
      setComment(""); // Clear input
      navigate("/"); // Redirect to home page
    }, 3000);
  };

  return (
    <Box minH="100vh" bg="gray.50" display="flex" alignItems="center" justifyContent="center" p={6}>
      <Container maxW="lg" bg="white" p={8} rounded="xl" shadow="xl">
        <VStack spacing={5}>
          <Text fontSize="3xl" fontWeight="bold" color="gray.800">
            We Value Your Feedback
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
            Please share your thoughts with us. Your feedback helps us improve!
          </Text>
          <Textarea
            placeholder="Write your comments here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            bg="gray.100"
            border="none"
            _focus={{ bg: "white", border: "2px solid blue.400", boxShadow: "lg" }}
            p={4}
            fontSize="lg"
            minH="150px"
            color="black"
          />
          <Button
            bg="blue.500"
            color="white"
            size="lg"
            width="full"
            _hover={{ bg: "blue.600" }}
            _active={{ bg: "blue.700" }}
            onClick={handleSubmit}
            isDisabled={submitted}
          >
            {submitted ? "Submitted" : "Submit Feedback"}
          </Button>

          {submitted && (
            <Text fontSize="lg" color="green.500" fontWeight="bold">
              🎉 Thank you for your feedback! Redirecting...
            </Text>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Feedback;
