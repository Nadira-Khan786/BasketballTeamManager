import { React } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TableView from "./common/TableView";
const PlayerList = (props) => {
  const { listPlayers } = props;
  const tableHead = ["firstName", "lastName", "height", "position"];
  return (
    <>
      <TableView tableheader={tableHead} tablebody={listPlayers} />
    </>
  );
};

PlayerList.propTypes = {
  listPlayers: PropTypes.array,
};

// Get state to props
const mapStateToProps = (state) => ({
  listPlayers: state.playerReducer.listPlayers,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
