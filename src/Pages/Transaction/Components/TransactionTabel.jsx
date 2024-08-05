import { Box, Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const TransactionTabel = () => {
    const Data=[
        {
            id: "HD82NA2H",
            Date: "2023-06-20",
            time: "07:00 AM",
            type: "INR Deposit",
            subtype: "E-Transfer",
            amount: "+ ₹81,123",
            status: "Pending",
            color: "#797E82",
          },
          {
            id: "HD82NA4H",
            Date: "2023-06-18",
            time: "07:00 AM",
            type: "INR Widthdraw",
            subtype: "Wire Transfer",
            amount: "- ₹55,123",
            status: "Processing",
            color: "#F5A50B",
          },
          {
            id: "HD82NA5H",
            Date: "2023-06-18",
            time: "07:00 AM",
            type: "Buy",
            subtype: "BTC",
            amount: "12.0554484 BTC",
            status: "Cancelled",
            color: "#DC2626",
          },
          {
            id: "HD82NA6H",
            Date: "2023-06-18",
            time: "07:00 AM",
            type: "Sell",
            subtype: "BTC",
            amount: "- 2.0554484 BTC",
            status: "Completed",
            color: "#059669",
          },
          {
            id: "HD82NA7H",
            Date: "2023-06-20",
            time: "07:00 AM",
            type: "BTC Deposit",
            subtype: "",
            amount: "+ 15.5000000",
            status: "Pending",
            color: "#797E82",
          },
          {
            id: "HD82NA8H",
            Date: "2023-06-18",
            time: "07:00 AM",
            type: "BTC Widthdraw",
            subtype: "",
            amount: "- 5.05555544",
            status: "Completed",
            color: "#059669",
          },
        ];
  return (
    <div>
    <TableContainer >
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Date & Time</Th>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Status</Th>
      </Tr>
    </Thead>
    <Tbody>
    {Data.map((data)=>(
        <Tr>
        <Td>{data.id}</Td>
        <Td>{data.Date} <br /> <Text color="#797E82" fontSize="12px">{data.time}</Text></Td>
        
        
       
        
        <Td>{data.type} <br /> <Text color="#797E82" fontSize="12px">{data.subtype}</Text> </Td>
        
        
       
        <Td>{data.amount}</Td>

        <Td><Button bg={data.color} color="white" w="72px" h="22px" fontSize="12px" borderRadius="xl">{data.status}</Button></Td>
        
        </Tr>
    ))}
    </Tbody>
  </Table>
</TableContainer>  
    </div>
  )
}

export default TransactionTabel
