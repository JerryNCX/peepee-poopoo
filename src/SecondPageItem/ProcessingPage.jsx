import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import { Group } from "@chakra-ui/react";
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "../components/ui/steps";
import { useNavigate } from "react-router-dom";

function ProcessingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep >= 3) { // Redirect when all steps are done
      setTimeout(() => {
        navigate("/feedback");
      }, 1000); // Delay for smooth transition
    }
  }, [currentStep, navigate]);

  return (
    <Box padding="10%">
      <StepsRoot
        count={3}
        value={currentStep} // Ensure current step is tracked
        onChange={(step) => setCurrentStep(step)} // Update current step
      >
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
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentStep((prev) => prev + 1)} // Ensure step updates
            >
              Next
            </Button>
          </StepsNextTrigger>
        </Group>
      </StepsRoot>
    </Box>
  );
}

export default ProcessingPage;
