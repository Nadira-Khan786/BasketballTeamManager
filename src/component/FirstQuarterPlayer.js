import { React } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TableView from "./common/TableView";
const FirstQuarterPlayer = (props) => {
 const { teamListData } = props;
 const tableHead = ["playerName", "position"];
  return (
    <>
      <TableView tableheader={tableHead} tablebody={teamListData} />
    </>
  );
};

FirstQuarterPlayer.propTypes = {
  teamListData: PropTypes.array,
};

// Get state to props
const mapStateToProps = (state) => ({
  teamListData: state.teamReducer.teamList,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FirstQuarterPlayer);
