import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashBoardLayout = ({ title, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex>
        <Box
          overflowY="auto"
          overflowX="hidden"
          scrollBehavior="unset"
          display={{ base: "none", lg: "block" }}
          shadow="lg"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <SideNav></SideNav>
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose}></SideDrawer>
        <Box flexGrow="1">
          <TopNav title={title} onOpen={onOpen}></TopNav>
          <Box overflowY="auto" overflowX="hidden">
            {children}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashBoardLayout;
