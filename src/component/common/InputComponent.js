import PropTypes from "prop-types";
import { TextField } from "@mui/material";
const InputComponent = (props) => {
  const { label, value, setValue, className, autoFocus, error } = props;
  return (
    <TextField
      value={value}
      variant="outlined"
      fullWidth
      label={label}
      autoFocus={autoFocus}
      className={className}
      onChange={(e) => setValue(e.target.value)}
      error={error ? true : false}
      helperText={error}
    />
  );
};

InputComponent.propTypes = {
  label: PropTypes.string,
  setValue: PropTypes.func,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
};
InputComponent.defaultProps = {
  className: "",
  autoFocus: false,
};

export default InputComponent;
