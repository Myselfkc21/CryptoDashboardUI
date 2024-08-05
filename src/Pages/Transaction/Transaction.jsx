import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  HStack,
  Icon,
  Input,
  InputLeftElement,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  InputGroup,
  InputRightElement,
  CheckboxIcon,
  TabIndicator,
} from "@chakra-ui/react";
import React from "react";
import DashBoardLayout from "../../Components/DashBoardLayout";
import { FiDownload } from "react-icons/fi";

import TransactionTabel from "./Components/TransactionTabel";
import { IoIosSearch } from "react-icons/io";

const Transaction = () => {
  const TopLabel = [
    {
      name: "All",
      count: 346,
    },
    {
      name: "Deposite",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];
  return (
    <Card bg="#EEEEF4" >
      <DashBoardLayout title="Transaction">
        <Flex justifyContent="end" mt="6" mb="3" mr="130px">
          <Button leftIcon={<Icon as={FiDownload}></Icon>} bg="purple.600" color="white">Export CSV</Button>
        </Flex>
        <Container
          maxW="1125px"
          alignItems="center"
          mt="7"
          bg="white"
          borderRadius="md"
        >
          <Grid
            gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(1,1fr)" }}
            gap="6"
          >
            <Tabs p="20px">
              <TabList
                display="flex"
                alignItems="center"
                w="100%"
                justifyContent="space-between"
              >
                <HStack>
                  {TopLabel.map((item) => (
                    <>
                      <Tab p="4" variant='unstyled'>{item.name}</Tab>
                      <Tag
                        w="40px"
                        h="25px"
                        fontSize="12px"
                        borderRadius="full"
                        bg="lightgrey"
                        pl="11px"
                        
                      >
                        {item.count}
                      </Tag>
                    </>
                  ))}
                </HStack>

                <HStack maxW="200px" h="30px">
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <IoIosSearch
                        color="#797E82"
                        fontSize="30px"
                        fontWeight="bold"
                      />
                    </InputLeftElement>
                    <Input type="tel" placeholder="Search.." />
                  </InputGroup>
                </HStack>
              </TabList>
              <TabIndicator mt='-1.5px' height='2px' bg='purple.500' borderRadius='1px' />
              <TabPanels>
                <TabPanel>
                  <TransactionTabel></TransactionTabel>
                </TabPanel>
                <TabPanel>
                  <TransactionTabel></TransactionTabel>
                </TabPanel>
                <TabPanel>
                  <TransactionTabel></TransactionTabel>
                </TabPanel>
                <TabPanel>
                  <TransactionTabel></TransactionTabel>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Grid>
        </Container>
      </DashBoardLayout>
    </Card>
  );
};

export default Transaction;
