import React from "react";
import {
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
const SideNav = () => {
  const navLinks = [
    {
      icon: HiOutlineSquares2X2,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transaction",
      link: "/transaction",
    },
  ];
  return (
    <Stack maxW="256px" height="100vh" justifyContent="space-between">
      <Box>
        {/* <Heading textAlign="center" as="h1" fontSize="20px" marginTop="56px">@DoSomeCoading</Heading>                                      Stack-it has css props= flex,flex-direction:column  */}
        {navLinks.map((Item) => (
          <Link to={Item.link}>
            <HStack
              mx="12px"
              paddingY="3"
              paddingX="4"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              rounded="lg"
              color="#797E82"
              my="20px"
              key={Item.text}
            >
              {" "}
              {/*Hstack-it has css props= flex,aling-items:center  */}
              <Icon as={Item.icon} fontSize="x-large"></Icon>
              <Text fontWeight="normal">{Item.text}</Text>
            </HStack>
          </Link>
        ))}
      </Box>
      <Link to="/support">
        <Box mb="4">
          <HStack
            mx="12px"
            paddingY="3"
            paddingX="4"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            rounded="lg"
            color="#797E82"
            mt="550px"
          >
            {" "}
            {/*Hstack-it has css props= flex,aling-items:center  */}
            <Icon as={BiSupport} fontSize="x-large"></Icon>
            <Text fontWeight="normal">Support</Text>
          </HStack>
        </Box>
      </Link>
    </Stack>
  );
};

export default SideNav;
