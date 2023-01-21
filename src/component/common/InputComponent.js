import PropTypes from "prop-types";
import { TextField } from "@mui/material";
const InputComponent = (props) => {
  const { label, value, setValue, className, autoFocus } = props;
  return (
    <TextField
      value={value}
      variant="outlined"
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      className={className}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
};
InputComponent.defaultProps = {
  className: "",
  autoFocus: false,
};

export default InputComponent;
