import { Button, Container, Flex, Heading, Menu, MenuButton,MenuList, MenuItem, Text, Icon, Box } from '@chakra-ui/react'
import { LuUserCircle2 } from "react-icons/lu";
import React from 'react'
import { FaBars } from "react-icons/fa";

const TopNav = ({title,onOpen}) => {
    return (
        <Box justifyContent="space-around">
        <Flex boxShadow="xl" h="64px" justifyContent="space-between" alignItems="center">
        <Icon ml="20px" as={FaBars} onClick={onOpen} display={{base:"block", lg:"none"}}>

        </Icon>
        <Container maxWidth="85%" display="flex" alignItems="center" justifyContent="space-between">
                <Heading  fontSize="28px" fontWeight="bold">
                    {title}
                </Heading>
                <Box>
                <Menu>
                    <MenuButton >
                        <Icon  as={LuUserCircle2} fontSize="xx-large" mt="5px"></Icon>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Log out</MenuItem>
                        <MenuItem>Support</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
                </Box>
                </Container>    
        </Flex>
        </Box>
    )
}

export default TopNav
