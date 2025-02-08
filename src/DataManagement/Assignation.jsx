import {
  Box,
  Container,
  Stack,
  Image,
  TableScrollArea,
  TableCell,
  TableBody,
} from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { Switch } from "../components/ui/switch";

export default function Assignation() {
  const [assignation, setAssignation] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/assignation");
      const data = await res.json();
      setAssignation(data.assignation);
    };
    fetchData();
  }, []);
  return (
    <>
      <TableScrollArea>
        {assignation.map((item, index) => (
          <TableBody key={item} value={index} >
            <TableCell><Image src={item.assignationTow} /></TableCell>
            <TableCell>{item.assignationTowDetails}</TableCell>
            <TableCell>{item.assignationStatus}</TableCell>
          </TableBody>
        ))}
      </TableScrollArea>
    </>
  );
}
