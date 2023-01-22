import PropTypes from "prop-types";
import { TextField } from "@mui/material";
const InputComponent = (props) => {
  const { label, value, setValue, className, autoFocus, type, error } = props;
  return (
    <TextField
      value={value}
      variant="outlined"
      //required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      className={className}
      type={type}
      onChange={(e) => setValue(e.target.value)}
      error={error?true:false}
      helperText={error}
    />
  );
};

InputComponent.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  type: PropTypes.string,
};
InputComponent.defaultProps = {
  className: "",
  autoFocus: false,
};

export default InputComponent;
