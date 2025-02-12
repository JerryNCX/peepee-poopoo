import {
  Box,
  HStack,
  Image,
  Container,
  Text,
  TableScrollArea,
  TableRoot,
  TableBody,
  TableRow,
  TableCell,
} from "@chakra-ui/react";
import { Switch } from "../components/ui/switch";
import React from "react";
import { useState, useEffect } from "react";

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/schedule");
      const data = await res.json();
      setSchedule(data.schedule);
    };
    fetchData();
  }, []);
  return (
    <>
      <Box>
        <TableScrollArea>
          <TableRoot>
            <TableBody>
              {schedule.map((item, index) => (
                <TableRow key={item} value={index} color="white">
                  <TableCell>
                    <Image
                      src={item.driverPic}
                      alt="driver"
                      maxH="150px"
                      maxW="150px"
                    />
                  </TableCell>
                  <TableCell>{item.driverDetails}</TableCell>
                  <TableCell>
                    <Switch>{item.driverStatus}</Switch>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableRoot>
        </TableScrollArea>
      </Box>
    </>
  );
}
