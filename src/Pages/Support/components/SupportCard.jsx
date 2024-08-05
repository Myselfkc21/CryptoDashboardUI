import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { IoMail } from "react-icons/io5";
import InfoCard from "../../DashBoard/Components/InfoCard";
const SupportCard = ({ leftComponent,title,icon,question }) => {
  return (
    <Flex
      flexDirection="row"
      borderRadius="md"
      p="24px"
      justifyContent="space-evenly"
      align={{
        base: "start",
        xl: "start",
      }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Stack>
        <Icon w="24px" h="24px" color="violet.300" as={icon}></Icon>
        <Text fontSize="32px" fontWeight="medium" color="black">
         {title}
        </Text>
        <Text fontSize="14px" fontWeight="normal" color="#535D66">
          {question}
        </Text>
      </Stack>

      {leftComponent}
    </Flex>
  );
};

export default SupportCard;
