import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import MuiAlert from "@mui/material/Alert";

const SimpleSnackbar = (props) => {
  const { open, handleClose, message } = props;

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      action={action}
    >
      <Alert
        onClose={handleClose}
        severity={message?.type}
        sx={{ width: "100%" }}
      >
        {message?.msg}
      </Alert>
    </Snackbar>
  );
};
SimpleSnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default SimpleSnackbar;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
