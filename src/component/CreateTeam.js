import { React, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CREATE_NEW_TEAM_REQUEST } from "../redux/actions";
import {
  Grid,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Typography,
  Select,
  OutlinedInput,
  Checkbox,
} from "@mui/material";
import Snackbar from "./common/Snackbar";
const CreateTeam = (props) => {
  const { isLoading, playerPositions, listPlayers } = props;
  const [position, setPosition] = useState([]);
  const [errorBoxOpen, setErrorBoxOpen] = useState(false);
  const [errorBoxMsg, setErrorBoxMsg] = useState({
    msg: "",
    type: "success",
  });

  //   set position value
  const handlePositionSet = (event) => {
    const {
      target: { value },
    } = event;
    setPosition(typeof value === "string" ? value.split(",") : value);
  };
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSumbmit = (e) => {
    e.preventDefault();
    // let playerData = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   height: height,
    //   position: position,
    // };
    // let playerInclude = listPlayers.filter(
    //   (item) => item.firstName === firstName && item.lastName === lastName
    // );
    // if (playerInclude.length) {
    //   setErrorBoxOpen(true);
    //   setErrorBoxMsg({
    //     msg: "Player already exists",
    //     type: "error",
    //   });
    // } else {
    //   addPlayerData(playerData);
    //   setErrorBoxOpen(true);
    //   setErrorBoxMsg({
    //     msg: "Player Add Successfully",
    //     type: "success",
    //   });
    // }
  };
  return (
    <>
      <form onSubmit={(e) => handleSumbmit(e)}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5">
              First Quarter Player Selection
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-select-small">Select Player Name</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Select Player Name"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {listPlayers &&
                  listPlayers.map((item, index) => {
                    return (
                      <MenuItem value={item.firstName} key={index}>
                        {item.firstName}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Grid>
          {playerPositions && (
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Position
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={position}
                  onChange={handlePositionSet}
                  input={<OutlinedInput label="Position" />}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {playerPositions?.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={position.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}
          <Snackbar
            open={errorBoxOpen}
            handleClose={() => {
              setErrorBoxOpen(false);
              setErrorBoxMsg("");
            }}
            message={errorBoxMsg}
          />
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
};

// Get state to props
const mapStateToProps = (state) => ({
  playerPositions: state.playerReducer.PostionList,
  isLoading: state.playerReducer.isLoading,
  listPlayers: state.playerReducer.listPlayers,
});

const mapDispatchToProps = (dispatch) => ({
  //   addPlayerData: (data) =>
  //     dispatch({ type: ADD_NEW_PLAYER_REQUEST, payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam);
