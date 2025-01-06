import React from "react";
import { ProgressBar, ProgressRoot } from "../components/Progress";

const Demo = () => {
  return (
    <ProgressRoot maxW="240px" value={null}>
      <ProgressBar />
    </ProgressRoot>
  );
};

function TowingProcessing() {
  return (
    <>
      <Demo />
    </>
  );
}

export default TowingProcessing;
