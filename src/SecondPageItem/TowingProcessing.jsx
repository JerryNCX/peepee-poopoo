import React from "react";
import {
  AbsoluteCenter,
  Box,
  Center,
  Flex,
  HStack,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  ProgressCircleRoot,
  ProgressCircleRing,
} from "../components/ui/progress-circle";

function TowingProcessing() {
  return (
    <>
      <Box>
        <AbsoluteCenter>
          <VStack>
            <Text>Processing Your Submission</Text>
            <ProgressCircleRoot value={null}>
              <ProgressCircleRing />
            </ProgressCircleRoot>
          </VStack>
        </AbsoluteCenter>
      </Box>
    </>
  );
}

export default TowingProcessing;
