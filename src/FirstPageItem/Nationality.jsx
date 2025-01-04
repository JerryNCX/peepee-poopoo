import React from "react";
import { NativeSelectRoot, NativeSelectField, Field, Input } from "@chakra-ui/react";

function Nationality() {
  return (
    <>
    <option value="Malaysia">Malaysia</option>
    <option value="Thailand">Thaland</option>
    <option value="Singapore">Singapore</option>
    <option value="Indonesia">Indonesia</option>
    <option value="China">China</option>
    <option value="Pakisthan">Pakisthan</option>
    <option valur="Other">Other</option>
    if (Other) {
      <Input _placeholder="List" variant="flushed"></Input>
    }
    </>
  );
}

export default Nationality;
