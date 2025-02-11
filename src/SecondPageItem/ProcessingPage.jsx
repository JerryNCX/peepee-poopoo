import React from "react";
import { Container } from "@chakra-ui/react";
import { Group, Box } from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "../components/ui/steps";

function ProcessingPage() {
  return (
    <>
    <Box padding="10% 10% 10% 10%">

      <StepsRoot defaultValue={1} count={3}>
        <StepsList>
          <StepsItem index={0} title="Step 1" />
          <StepsItem index={1} title="Step 2" />
          <StepsItem index={2} title="Step 3" />
        </StepsList>

        <StepsContent index={0}>Step 1</StepsContent>
        <StepsContent index={1}>Step 2</StepsContent>
        <StepsContent index={2}>Step 3</StepsContent>
        <StepsCompletedContent>All steps are complete!</StepsCompletedContent>

        <Group>
          <StepsPrevTrigger asChild>
            <Button variant="outline" size="sm">
              Prev
            </Button>
          </StepsPrevTrigger>
          <StepsNextTrigger asChild>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </StepsNextTrigger>
        </Group>
      </StepsRoot>
    </Box>
    </>
  );
}

export default ProcessingPage;