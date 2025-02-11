import { Box, HStack, Image, Container, Text } from "@chakra-ui/react";
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
        {schedule.map((item, index) => (
          <HStack key={item} calue={index} gap="20">
            <Image src={item.driverPic} maxW="100px" />
            <Container color="black">
              <Text>Details:{item.driverDetails}</Text>
              <Text>Status:{item.driverStatus}</Text>
            </Container>
          </HStack>
        ))}
      </Box>
    </>
  );
}
