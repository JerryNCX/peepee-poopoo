import React from "react";
import { ProgressBar, ProgressRoot } from "@/components/ui/progress";

function TowingProcessing() {
  return (
    <ProgressRoot maxW="240px" value={null}>
      <ProgressBar />
    </ProgressRoot>
  );
}

export default TowingProcessing;
