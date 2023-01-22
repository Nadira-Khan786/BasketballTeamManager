import PropTypes from "prop-types";
import { TextField } from "@mui/material";
const InputComponent = (props) => {
  const { label, value, setValue, className, autoFocus, type } = props;
  return (
    <TextField
      value={value}
      variant="outlined"
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      className={className}
      type={type}
      onChange={(e) => setValue(e.target.value)}
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
