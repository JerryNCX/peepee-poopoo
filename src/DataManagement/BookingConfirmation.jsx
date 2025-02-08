import React from "react";
import { Center, Image } from "@chakra-ui/react";
import { Button, Table, TableScrollArea } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Switch } from "../components/ui/switch";

const detail = [
  {
    value: "0",
    number: "1",
    details: "Accident",
    payment: File,
    verification: Boolean,
    delete: Boolean,
  },
  {
    value: "1",
    number: "2",
    details: "Towing",
    payment: File,
    verification: Boolean,
    delete: Boolean,
  },
  {
    value: "2",
    number: "3",
    details: "Towing",
    payment: File,
    verification: Boolean,
    delete: Boolean,
  },
  {
    value: "3",
    number: "4",
    details: "Accident",
    payment: File,
    verification: Boolean,
    delete: Boolean,
  },
  {
    value: "4",
    number: "5",
    details: "Accident",
    payment: File,
    verification: Boolean,
    delete: Boolean,
  },
];

export default function BookingConfirmation() {
  const [bookingConfirmation, setBookingConfirmation] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/booking");
      const data = await res.json();
      setBookingConfirmation(data.bookingConfirmation);
    };
    fetchData();
  }, []);
  return (
    <>
      <TableScrollArea>
        <Table.Root >
          <Table.Header bg="black">
            <Table.ColumnHeader>No</Table.ColumnHeader>
            <Table.ColumnHeader>Details</Table.ColumnHeader>
            <Table.ColumnHeader>Payment</Table.ColumnHeader>
            <Table.ColumnHeader>Time</Table.ColumnHeader>
            <Table.ColumnHeader>Verification</Table.ColumnHeader>
            <Table.ColumnHeader>Delete</Table.ColumnHeader>
          </Table.Header>
          <Table.Body>
            {bookingConfirmation.map((item, index) => (
              <Table.Row key={item} value={index}>
                <Table.Cell>{item.number}</Table.Cell>
                <Table.Cell>{item.detail}</Table.Cell>
                <Table.Cell>
                  <Image src={item.image} />
                </Table.Cell>
                <Table.Cell>{item.time}</Table.Cell>
                <Table.Cell>{item.verification}</Table.Cell>
                <Switch>
                  <Center>{item.delete}</Center>
                </Switch>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </TableScrollArea>
    </>
  );
}
