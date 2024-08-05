import React from "react";
import DashBoardLayout from "../../Components/DashBoardLayout";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Portfolio from "./Components/Portfolio";
import PriceSection from "./Components/PriceSection";
import Transactions from "./Components/Transactions";
import InfoCard from "./Components/InfoCard";
const DashBoard = () => {
  return (
    <DashBoardLayout title="DashBoard">
      <Container maxW="1125px" alignItems="center" mt="7">
        <Grid
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
          gap="6"
        >
          <GridItem colSpan={2}>
            <Portfolio></Portfolio>
          </GridItem>
          <GridItem colSpan={1}>
            <PriceSection></PriceSection>
          </GridItem>

          <GridItem colSpan={{ base: "2", md: "1" }}>
            <Transactions></Transactions>
          </GridItem>

          <GridItem colSpan={{ base: "2", md: "1" }}>
            <InfoCard
              IMGurl="public/Visual.svg"
              Btntag="Loans"
              text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
              inverted="white"
            ></InfoCard>
          </GridItem>

          <GridItem colSpan={{ base: "2", md: "1" }}>
            <InfoCard
              IMGurl="public/Visual2.svg"
              Btntag="Contacts"
              text="Learn more about our real estate, mortgage, and  corporate account services"
              inverted=""
            ></InfoCard>
          </GridItem>
        </Grid>
      </Container>
    </DashBoardLayout>
  );
};

export default DashBoard;
//  maxW="1125px" alignItems="center" mt="7"
