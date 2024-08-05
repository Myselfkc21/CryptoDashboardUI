import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { SiBitcoinsv } from "react-icons/si";
const Transactions = () => {
  const transaction = [
    {
      icon: AiFillDollarCircle,
      text: "INR Deposite",
      amount: "+ ₹ 81,123,10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      icon: SiBitcoinsv,
      text: "INR Deposite",
      amount: "+ ₹ 81,123,10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      icon: AiFillDollarCircle,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <Flex
      width="100%"
      flexDirection="column"
      bg="white"
      borderRadius="md"
      p="24px"
      // align={{
      //   base: "flex-start",
      //   xl: "center",
      // }}
      // flexDir={{ base: "column", md: "column" }}

      flexDir={{ base: "column", md: "column" }}
    >
      <Text
        pb="20px"
        pl="9px"
        fontSize="14px"
        color="#535D66"
        fontWeight="bold"
      >
        Recent Transactions
      </Text>
      <Stack gap="18px">
        {transaction.map((items, i) => (
          <Fragment key={i}>
            {i != 0 && <Divider />}
            <Flex justifyContent="space-between">
              <Flex gap="16px">
                <Box
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  boxSize="40px"
                  borderRadius="50%"
                  bgColor="#F3F3F7"
                >
                  <Icon as={items.icon} fontSize="18px"></Icon>
                </Box>
                <Stack spacing="0">
                  <Text fontSize="16px">{items.text}</Text>
                  <Text fontSize="14px" color="#797E82">
                    {items.timestamp}
                  </Text>
                </Stack>
              </Flex>
              <Text fontSize="18px" color="#171717" fontWeight="600">
                {items.amount}
              </Text>
            </Flex>
          </Fragment>
        ))}
        <Button mt="8px" bgColor="#EEEEF4" fontWeight="bold" color="black">
          View All
        </Button>
      </Stack>
    </Flex>
  );
};

export default Transactions;
