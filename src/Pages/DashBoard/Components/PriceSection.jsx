import {
  Button,
  Flex,
  HStack,
  Icon,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import React from "react";
import { CgArrowTopRight } from "react-icons/cg";
const PriceSection = () => {
  const timestamps = ["7:15 AM", "8:15 AM", "9:15 AM", "10:15 AM", "11:15 AM"];
  return (
    <Flex
      flexDirection="column"
      bg="white"
      borderRadius="md"
      p="24px"
      justifyContent="space-between"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{ base: "column", md: "column" }}
    >
      <HStack>
        <Stack>
          <HStack>
            <Text color="#535D66" fontSize="14px" fontWeight="semi-bold">
              Total Portfolio Value
            </Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <HStack>
            <Text color="black" fontSize="24px" fontWeight="bold">
              ₹ 112,312.24
            </Text>
            <HStack>
              <Icon as={CgArrowTopRight} color="#059669" fontSize="20px"></Icon>
              <Text fontSize="14px" color="#059669" pt="10px" pr="20px">
                0.004%
              </Text>
            </HStack>
          </HStack>
        </Stack>

        <Stack>
          <HStack>
            <Button bg="#5F00D9" gap="10px" color="white">
              <FaPlusCircle fontSize="14px" />
              <Text fontWeight="normal">Buy</Text>
            </Button>
            <Button bg="#5F00D9" gap="10px" color="white">
              <FaMinusCircle fontSize="14px" />
              <Text fontWeight="normal">Sell</Text>
            </Button>
          </HStack>
        </Stack>
      </HStack>
      {/*          */}
      <HStack width="100%" pt="20px">
        <Tabs variant="soft-rounded">
          <Flex justify="end">
            <TabList bg="#F3F3F7" p="3px" _selected={{ bg: "white" }}>
              {["1H", "1D", "1W", "1M"].map((tab) => (
                <Tab fontSize="sm" p="6px" borderRadius="4">
                  {tab}
                </Tab>
              ))}
            </TabList>
          </Flex>
          <TabPanels>
            <TabPanel>
              <img src="public\graph.svg" alt="" />
              <HStack gap="52px">
                {timestamps.map((time) => (
                  <Text color="#797E82" fontSize="14px">
                    {time}
                  </Text>
                ))}
              </HStack>
            </TabPanel>
            <TabPanel>
              <img src="public\graph.svg" alt="" />
              <HStack gap="52px">
                {timestamps.map((time) => (
                  <Text color="#797E82" fontSize="14px">
                    {time}
                  </Text>
                ))}
              </HStack>
            </TabPanel>

            <TabPanel>
              <img src="public\graph.svg" alt="" />
              <HStack gap="52px">
                {timestamps.map((time) => (
                  <Text color="#797E82" fontSize="14px">
                    {time}
                  </Text>
                ))}
              </HStack>
            </TabPanel>

            <TabPanel>
              <img src="public\graph.svg" alt="" />
              <HStack gap="52px">
                {timestamps.map((time) => (
                  <Text color="#797E82" fontSize="14px">
                    {time}
                  </Text>
                ))}
              </HStack>
            </TabPanel>

            <TabPanel>
              <img src="public\graph.svg" alt="" />
              <HStack gap="52px">
                {timestamps.map((time) => (
                  <Text color="#797E82" fontSize="14px">
                    {time}
                  </Text>
                ))}
              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </HStack>
    </Flex>
  );
};

export default PriceSection;
