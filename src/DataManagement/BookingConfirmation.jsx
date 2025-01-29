import React from "react";
import { Table, TableScrollArea } from "@chakra-ui/react";
import { useState, useEffect } from "react";

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
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000");
      const data = await res.json();
      setAdmin(data.admin);
    };
    fetchData();
  }, []);
  return (
    <>
      <TableScrollArea>
        <Table.Root interactive>
          <Table.Header bg="black">
            <Table.ColumnHeader>No</Table.ColumnHeader>
            <Table.ColumnHeader>Details</Table.ColumnHeader>
            <Table.ColumnHeader>Payment</Table.ColumnHeader>
            <Table.ColumnHeader>Time</Table.ColumnHeader>
            <Table.ColumnHeader>Verification</Table.ColumnHeader>
            <Table.ColumnHeader>Delete</Table.ColumnHeader>
          </Table.Header>
          <Table.Body>
            {detail.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>{item.number}</Table.Cell>
                <Table.Cell>{item.details}</Table.Cell>
                <Table.Cell>{item.payment}</Table.Cell>
                <Table.Cell>{item.time}</Table.Cell>
                <Table.Cell>{item.verification}</Table.Cell>
                <Table.Cell>{item.delete}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </TableScrollArea>
    </>
  );
}
