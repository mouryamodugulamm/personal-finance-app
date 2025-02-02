import { Heading } from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import LumpsumTab from "./LumpsumTab";

interface InterestRateCalculatorProps {}

const InterestRateCaluclator: React.FunctionComponent<
  InterestRateCalculatorProps
> = () => {
  return (
    <div>
      <Heading as="h4" size="md" style={{ marginTop: 15, color: "#189AB4" }}>
        Interest Rate Calculator
      </Heading>
      <Tabs
        variant="soft-rounded"
        colorScheme="green"
        style={{ marginTop: 15, color: "#189AB4" }}
      >
        <TabList>
          <Tab>Lumpsum</Tab>
          <Tab>SIP</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <LumpsumTab />
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default InterestRateCaluclator;
