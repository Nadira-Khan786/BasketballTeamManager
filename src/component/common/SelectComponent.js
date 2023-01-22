import * as React from "react";
import {
  Select,
  FormHelperText,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";

const SelectComponent = (props) => {
  const {
    label,
    value,
    setValue,
    className,
    menuList,
    type,
    playerName,
    error,
  } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ width: "100%" }} error={error ? true : false}>
      <InputLabel id="demo-select-small">{label && label}</InputLabel>
      {type === "player" ? (
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={value}
          label="Select Player Name"
          onChange={(e) => handleChange(e)}
        >
          {menuList?.length ? (
            menuList.map((item, index) => {
              return (
                <MenuItem
                  value={`${item.firstName}-${item.lastName}`}
                  key={index}
                >
                  {`${item.firstName}  ${item.lastName}`}
                </MenuItem>
              );
            })
          ) : (
            <MenuItem value="none">
              <em>None</em>
            </MenuItem>
          )}
        </Select>
      ) : (
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={value}
          label="Select Player Name"
          onChange={(e) => handleChange(e)}
        >
          {playerName && menuList?.length ? (
            menuList
              .filter(
                (item) => `${item.firstName}-${item.lastName}` === playerName
              )?.[0]
              ?.position.map((item, index) => {
                return (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                );
              })
          ) : (
            <MenuItem value="none">
              <em>None</em>
            </MenuItem>
          )}
        </Select>
      )}
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectComponent;
