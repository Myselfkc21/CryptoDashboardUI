import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const InfoCard = ({ IMGurl, Btntag, text, inverted }) => {
  return (
    <Flex
      width="550px"
      height="130px"
      flexDirection="column"
      bg={inverted == "white" ? "white" : "#8B49F7"}
      borderRadius="md"
      p="24px"
      flexDir={{ base: "column", md: "column" }}
      backgroundImage={IMGurl}
      mb="30px"
    >
      <Stack>
        <Button
          w="65px"
          h="25px"
          borderRadius="xl"
          fontSize="14px"
          fontWeight="bold"
          bg={inverted == "white" ? "#5F00D9" : "white"}
          color={inverted == "white" ? "white" : "#8B49F7"}
        >
          <Text p="12px">{Btntag}</Text>
        </Button>

        <Text
          fontSize="20px"
          fontWeight="semi-bold"
          pt="16px"
          color={inverted == "white" ? "black" : "white"}
        >
          {text}
        </Text>
      </Stack>
    </Flex>
  );
};

export default InfoCard;
