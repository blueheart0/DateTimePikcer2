import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import moment from "moment";
import React from "react";
import SmalldownIcon from "themes/common/icons/SmalldownIcon";
import SmallupIcon from "themes/common/icons/SmallupIcon";

const useStyle = makeStyles(theme => ({
  root: {},
  end__adornment: {
    flexDirection: "column",
    margin: 0,
    height: "auto",
    "&:hover": {
      cursor: "pointer"
    }
  },
  up: {
    marginBottom: "5px",
    color: theme.palette.icon
  },
  down: {
    color: theme.palette.icon
  },
  monthInput: {
    width: 104,
    minHeight: 36
  },
  yearInput: {
    width: 54,
    minHeight: 20
  }
}));
const DatePicker = props => {
  const classes = useStyle();
  const { value, onChange, ...others } = props;
  return (
    <>
      <TextField
        variant={"outlined"}
        margin={"dense"}
        value={value.format("YYYY")}
        inputProps={{
          className: clsx(classes.yearInput),
          "aria-readonly": "true",
          readOnly: true
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" className={classes.end__adornment}>
              <SmallupIcon
                className={classes.up}
                onClick={event => {
                  onChange && onChange(value.clone().add(1, "year"));
                }}
              />
              <SmalldownIcon
                className={classes.down}
                onClick={event => {
                  onChange && onChange(value.clone().subtract(1, "year"));
                }}
              />
            </InputAdornment>
          )
        }}
      />
      <TextField
        variant={"outlined"}
        value={value.format("M")}
        select
        margin={"dense"}
        InputProps={{ className: clsx(classes.monthInput) }}
        onChange={event => {
          onChange && onChange(value.clone().month(event.target.value - 1));
        }}
      >
        {moment
          .localeData()
          .months()
          .map((item, index) => {
            return (
              <MenuItem value={index + 1} key={index + item}>
                {item}
              </MenuItem>
            );
          })}
      </TextField>
    </>
  );
};
export default DatePicker;
