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
import { ProgressBar, ProgressRoot } from "../components/ui/progress.jsx";

function TowingProcessing() {
  return (
    <>
      <Box>
        <AbsoluteCenter>
          <VStack>
            <Text textStyle="5xl" paddingBottom="30px">
              Processing Your Submission
            </Text>
            <ProgressCircleRoot value={null} size="xl">
              <ProgressCircleRing />
            </ProgressCircleRoot>
          </VStack>
        </AbsoluteCenter>
      </Box>
    </>
  );
}

export default TowingProcessing;
