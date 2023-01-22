import { React, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ADD_NEW_PLAYER_REQUEST } from "../redux/actions";
import {
  Grid,
  Checkbox,
  Button,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  FormHelperText,
} from "@mui/material";
import InputComponent from "./common/InputComponent";
import Snackbar from "./common/Snackbar";
import "./AddPlayer.scss";
const AddPlayer = (props) => {
  const { isLoading, playerPositions, addPlayerData, listPlayers } = props;
  const [position, setPosition] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [height, setHight] = useState(0);
  const [errorBoxOpen, setErrorBoxOpen] = useState(false);
  const [errorBoxMsg, setErrorBoxMsg] = useState({
    msg: "",
    type: "",
  });
  const [error, setError] = useState({});

  //   set position value
  const handlePositionSet = (event) => {
    const {
      target: { value },
    } = event;
    setError((prev) => {
      return { ...prev, position: null };
    });
    setPosition(typeof value === "string" ? value.split(",") : value);
  };

  const handleSumbmit = (e) => {
    e.preventDefault();
    if (!firstName?.trim()) {
      setError((prev) => {
        return { ...prev, firstName: "Please enter firstname" };
      });
      return;
    }
    if (!lastName?.trim()) {
      setError((prev) => {
        return { ...prev, lastName: "Please enter lastname" };
      });
      return;
    }
    if (+height <= 0) {
      setError((prev) => {
        return {
          ...prev,
          height: "Height must be positive number.",
        };
      });
      setErrorBoxOpen(true);
      setErrorBoxMsg({
        msg: "Height must be positive number.",
        type: "error",
      });
      return;
    } else if (!position?.length) {
      setError((prev) => {
        return {
          ...prev,
          position: "Please select player position.",
        };
      });
      setErrorBoxOpen(true);
      setErrorBoxMsg({
        msg: "Please select player position.",
        type: "error",
      });
      return;
    }
    let playerData = {
      firstName: firstName,
      lastName: lastName,
      height: height,
      position: position,
    };
    let playerInclude = listPlayers.filter(
      (item) => item.firstName === firstName && item.lastName === lastName
    );
    if (playerInclude.length) {
      setError((prev) => {
        return {
          ...prev,
          firstName: "Player already exists.",
          lastName: "Player already exists.",
        };
      });
      setErrorBoxOpen(true);
      setErrorBoxMsg({
        msg: "Player already exists",
        type: "error",
      });
    } else {
      addPlayerData(playerData);
      setError({});
      setErrorBoxOpen(true);
      setErrorBoxMsg({
        msg: "Player Add Successfully",
        type: "success",
      });
    }
  };
  return (
    <>
      <form onSubmit={(e) => handleSumbmit(e)}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <InputComponent
              value={firstName}
              label="First Name"
              autoFocus={true}
              setValue={(value) => {
                setFirstName(value);
                setError((prev) => {
                  return { ...prev, firstName: null };
                });
              }}
              error={error?.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputComponent
              value={lastName}
              label="Last Name"
              setValue={(value) => {
                setLastName(value);
                setError((prev) => {
                  return { ...prev, lastName: null };
                });
              }}
              error={error?.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputComponent
              value={height}
              label="Height"
              setValue={(value) => {
                !isNaN(value) && setHight(value);
                setError((prev) => {
                  return { ...prev, height: null };
                });
              }}
              error={error?.height}
            />
          </Grid>
          {playerPositions && (
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ width: "100%" }} error={error?.position}>
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
                {error?.position && (
                  <FormHelperText>{error?.position}</FormHelperText>
                )}
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
          <Grid item xs={12} sm={12} className="btn-ctn">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              className="btn"
            >
              Add Player
            </Button>
          </Grid>{" "}
        </Grid>
      </form>
    </>
  );
};

AddPlayer.propTypes = {
  isLoading: PropTypes.bool,
  playerPositions: PropTypes.array,
  addPlayerData: PropTypes.func,
};

// Get state to props
const mapStateToProps = (state) => ({
  playerPositions: state.playerReducer.PostionList,
  isLoading: state.playerReducer.isLoading,
  listPlayers: state.playerReducer.listPlayers,
});

const mapDispatchToProps = (dispatch) => ({
  addPlayerData: (data) =>
    dispatch({ type: ADD_NEW_PLAYER_REQUEST, payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);
