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
const ContactCard = () => {
  return (
    <Flex flexDir="column" p="24px" bg="white" borderRadius="5px">
        <Flex  paddingBottom="32px" flexDir="column">
          <HStack>
            <Card>
              <Text fontSize="16px" textAlign="left" fontWeight="semibold">

                You will receive response within 24 hours of time of submit.
              </Text>

              <HStack pt="32px" bg="white" border="none">
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input type="Text" />
                </FormControl>

                <FormControl>
                  <FormLabel>Surname</FormLabel>
                  <Input type="Text" />
                </FormControl>
              </HStack>
            </Card>
          </HStack>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>

          <label>Message</label>
          <Textarea></Textarea>
        </Flex>
        <Box maxW="100%" display="flex" flexDir="row" paddingBottom="32px">
          <Checkbox></Checkbox>
          <Text fontSize="12px">I agree with</Text>
          <Text fontSize="12px" color="#5F00D9">
            Terms & Conditions.
          </Text>
        </Box>
        <Box display="flex" gap="10px" flexDir="column">
        <Button bg="#5F00D9" color="white">Send a message</Button>
        <Button bg="#5F00D9" color="white">Book a meeting</Button>
        </Box>

      </Flex>
  )
}

export default ContactCard
