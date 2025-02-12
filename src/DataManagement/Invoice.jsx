import {
    Image,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRoot,
  TableRow,
  TableScrollArea,
} from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";

export default function Invoice() {
  const [invoice, setInvoice] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/invoice");
      const data = await res.json();
      setInvoice(data.invoice);
    };
    fetchData();
  }, []);

  return (
    <>
      <TableScrollArea>
        <TableRoot>
          <TableHeader bg="black">
            <TableColumnHeader>ID</TableColumnHeader>
            <TableColumnHeader>Status</TableColumnHeader>
            <TableColumnHeader>File</TableColumnHeader>
            <TableColumnHeader>Amount</TableColumnHeader>
          </TableHeader>

          {invoice.map((item, index) => (
            <TableBody>
              <TableRow key={item} value={index}>
                <TableCell>{item.invoiceID}</TableCell>
                <TableCell>{item.invoiceStatus}Arrived</TableCell>
                <TableCell><Image src={item.invoiceFile} /></TableCell>
                <TableCell>{item.invoiceAmount}</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </TableRoot>
      </TableScrollArea>
    </>
  );
}
