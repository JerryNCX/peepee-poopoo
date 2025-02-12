import { TableScrollArea,TableRoot,TableHeader,TableBody,TableRow,TableCell } from '@chakra-ui/react';
import React, { useEffect,useState } from 'react';
import { Rating } from '../components/ui/rating';
import { TableColumnHeader } from '@chakra-ui/react';

export default function Feedback  ()  {
    const [feedback,setFeedback] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch("http://localhost:3000/feedback");
          const data = await res.json();
          setFeedback(data.feedback);
        };
        fetchData();
      }, []); 
  return (
    <>
    <TableScrollArea>
            <TableRoot>
              <TableHeader bg="black">
                <TableColumnHeader>Name</TableColumnHeader>
                <TableColumnHeader>Email</TableColumnHeader>
                <TableColumnHeader>Feedback</TableColumnHeader>
                <TableColumnHeader>Rating</TableColumnHeader>
              </TableHeader>
    
              {feedback.map((item, index) => (
                <TableBody>
                  <TableRow key={item} value={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.feedback}</TableCell>
                    <TableCell><Rating value={item.rating}/></TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </TableRoot>
          </TableScrollArea>
    </>
  )
}
