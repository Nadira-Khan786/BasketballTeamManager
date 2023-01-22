import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CREATE_NEW_TEAM_REQUEST } from "../redux/actions";
import { Grid, Button, Typography } from "@mui/material";
import Snackbar from "./common/Snackbar";
import SelectComponent from "./common/SelectComponent";
import { teamData } from "../constants/constants";

const CreateTeam = (props) => {
  const { isLoading, listPlayers, addTeamData } = props;
  const [errorBoxOpen, setErrorBoxOpen] = useState(false);
  const [errorBoxMsg, setErrorBoxMsg] = useState({
    msg: "",
    type: "success",
  });

  const [createTeam, SetCreateTeam] = useState(teamData);

  const handleSumbmit = (e) => {
    e.preventDefault();
    // let playerInclude = listPlayers.filter(
    //   (item) => item.firstName === firstName && item.lastName === lastName
    // );
    // if (playerInclude.length) {
    //   setErrorBoxOpen(true);
    //   setErrorBoxMsg({
    //     msg: "Player already exists",
    //     type: "error",
    //   });
    // } else
    addTeamData(createTeam);
    setErrorBoxOpen(true);
    setErrorBoxMsg({
      msg: "First Quarter Add Successfully",
      type: "success",
    });
  };

  const handleChange = (value, type, ind) => {
    let data = [...createTeam];
    data[ind] = {
      ...data[ind],
      playerName: type === "player" ? value : data[ind].playerName,
      position: type === "position" ? value : data[ind].position,
    };
    SetCreateTeam([...data]);
  };
  return (
    <>
      <Snackbar
        open={errorBoxOpen}
        handleClose={() => {
          setErrorBoxOpen(false);
          setErrorBoxMsg("");
        }}
        message={errorBoxMsg}
      />
      <form onSubmit={(e) => handleSumbmit(e)}>
        <Grid container spacing={4}>
          {createTeam.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Grid item xs={12} sm={6}>
                  <SelectComponent
                    label="Select Player Name"
                    menuList={listPlayers}
                    setValue={(value) => handleChange(value, "player", index)}
                    className=""
                    value={item.playerName}
                    type="player"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SelectComponent
                    label="Select Player Position"
                    menuList={listPlayers}
                    value={item.position}
                    type="position"
                    disabled={!item.playerName}
                    playerName={item.playerName}
                    setValue={(value) => handleChange(value, "position", index)}
                    className=""
                  />
                </Grid>
              </React.Fragment>
            );
          })}
          <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              disabled={isLoading}
            >
              Create Team
            </Button>
          </Grid>{" "}
        </Grid>
      </form>
    </>
  );
};

CreateTeam.propTypes = {
  isLoading: PropTypes.bool,
  playerPositions: PropTypes.array.isRequired,
  addTeamData: PropTypes.func,
};

// Get state to props
const mapStateToProps = (state) => ({
  playerPositions: state.playerReducer.PostionList,
  isLoading: state.playerReducer.isLoading,
  listPlayers: state.playerReducer.listPlayers,
});

const mapDispatchToProps = (dispatch) => ({
  addTeamData: (data) =>
    dispatch({ type: CREATE_NEW_TEAM_REQUEST, payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam);
