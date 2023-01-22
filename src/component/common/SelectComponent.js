import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectComponent = (props) => {
  const { label, value, setValue, className, menuList, type, playerName } =
    props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ width: "100%" }} error>
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
    </FormControl>
  );
};

export default SelectComponent;
