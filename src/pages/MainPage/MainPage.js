import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddPlayer from "../../component/AddPlayer"; //Compose Team
import CreateTeam from "../../component/CreateTeam"; //First Quarter

function MainPage() {
  const [value, setValue] = React.useState("1");
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Compose Team" value="1" />
            <Tab label="First Quarter" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <AddPlayer />
        </TabPanel>
        <TabPanel value="2">
          <CreateTeam />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default MainPage;
