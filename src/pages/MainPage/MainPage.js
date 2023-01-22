import * as React from "react";
import { Box, Typography, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddPlayer from "../../component/AddPlayer"; //Compose Team
import CreateTeam from "../../component/CreateTeam"; //First Quarter
import PlayerList from "../../component/PlayerList";
import TeamList from "../../component/FirstQuarterPlayer";
import "./MainPage.scss";

const MainPage = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="main-ctn">
      <Box>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="tablist"
          >
            <Tab label="Compose Team" value="1" className="tab" />
            <Tab label="First Quarter" value="2" className="tab" />
          </TabList>
          <TabPanel value="1" className="tab-panel">
            <div className="card-ctn mt-5">
              <Typography component="h1" className="title">
                Add Player
              </Typography>
              <div className="card-body">
                <AddPlayer />
              </div>
            </div>
            <div className="card-ctn">
              <Typography component="h1" className="title">
                Player List
              </Typography>
              <div className="card-body1">
                <PlayerList />
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2" className="tab-panel">
            <div className="card-ctn">
              <Typography component="h1" className="title">
                First Quarter Player Selection
              </Typography>
              <div className="card-body">
                <CreateTeam
                />
              </div>
            </div>
            <div className="card-ctn">
              <Typography component="h1" className="title">
                First Quarter Players{" "}
              </Typography>
              <div className="card-body1">
                <TeamList />
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default MainPage;
