import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
const Portfolio = () => {
    return (
        <HStack bg="white" borderRadius="md" p="24px" justifyContent="space-around" align={{
            base: "flex-start", xl: "center"
        }} flexDir={{ base: "column", xl: "row",md:"column" }}>
           
           <Stack>
                <HStack>
                    <Text color="#535D66" fontSize="14px" fontWeight="semi-bold">Total Portfolio Value</Text>
                    <Icon as={AiOutlineInfoCircle} />
                </HStack>
                <Text color="black" fontSize="24px" fontWeight="bold">₹ 112,312.24</Text>
            </Stack>

            <Stack>
                <HStack>
                    <Text color="#535D66" fontSize="14px" fontWeight="semi-bold">Wallet Balances</Text>
                    <Icon as={AiOutlineInfoCircle} />
                </HStack>
                <HStack display="flex" justifyContent="space-around">
                    <Text color="black" fontSize="24px" fontWeight="bold">22.39401000 </Text><Tag fontSize="12px" w="35px" h="22px" borderRadius="xl" fontWeight="semi-bold">BTC  </Tag>


                    <HStack>
                        <Text color="black" fontSize="24px" fontWeight="bold">₹1,300.00</Text>
                        <Tag fontSize="12px" w="35px" h="22px" borderRadius="xl" fontWeight="semi-bold">BTC</Tag>
                    </HStack>
                </HStack>


            </Stack>
            <Stack>
                <HStack>
                    <Button bg="#5F00D9" color="white"><IoIosArrowRoundDown fontSize="25px" /><Text fontWeight="normal">Deposit</Text></Button>
                    <Button bg="#5F00D9" color="white"><IoIosArrowRoundUp fontSize="25px" /><Text fontWeight="normal">Withdraw</Text></Button>
                </HStack>

            </Stack>

        </HStack>
    )
}

export default Portfolio
