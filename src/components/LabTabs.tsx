import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Details from "./Details";
import Invoice from "./Invoice";
import Status from "./Status";

import { BiDetail } from "react-icons/bi";
import { AiOutlineFileText } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const size = 20;

  return (
    <Box sx={{ width: "90%", typography: "body1", marginLeft: '40px', marginTop: '5px' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label={
                <span>
                  <BiDetail style={{ marginBottom: '-5px' }} size={size} /> Details
                </span>
              }
              value="1"
            />
            <Tab
              label={
                <span>
                  <AiOutlineFileText style={{ marginBottom: '-5px' }} size={size} /> Invoice
                </span>
              }
              value="2"
            />
            <Tab
              label={
                <span>
                  <BsTruck style={{ marginBottom: '-5px' , }} size={size} /> Status
                </span>
              }
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Details />
        </TabPanel>
        <TabPanel value="2">
          <Invoice />
        </TabPanel>
        <TabPanel value="3">
          <Status />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
