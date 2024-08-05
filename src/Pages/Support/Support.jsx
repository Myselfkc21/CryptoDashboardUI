import { Button, Card, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import DashBoardLayout from "../../Components/DashBoardLayout";
import { FiDownload } from "react-icons/fi";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMail } from "react-icons/io5";
import InfoCard from "../DashBoard/Components/InfoCard";
import { FiMessageSquare } from "react-icons/fi";
const Support = () => {
  return (
    <Card bg="#EEEEF4">
      <DashBoardLayout title="Support">
        <SupportCard
          leftComponent={<ContactCard></ContactCard>}
          title="Contact Us"
          question="Have a question or just want to know more? Feel free to reach out to
          us"
          icon={IoMail}
        ></SupportCard>
        <SupportCard
          leftComponent={<InfoCard IMGurl="public/Visual2.svg" Btntag="Chatbot" text="Chat with us now" inverted=""  />}
          title="Live Chat"
          question="Don’t have time to wait for the answer? You can just Chat with us now."
          icon={FiMessageSquare}
        ></SupportCard>
      </DashBoardLayout>
    </Card>
  );
};

export default Support;
