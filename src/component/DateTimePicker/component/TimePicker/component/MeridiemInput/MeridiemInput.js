import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const useStyle = makeStyles(theme => ({
  root: {
    padding: "16px",
    boxSizing: "border-box"
  },
  meridiem: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    textDecoration: "underline",
    textDecorationColor: "#01579b",
    userSelect: "none",
    cursor: "pointer",
    "& *": {
      color: "#01579b"
    }
  },
  selected: {
    backgroundColor: "#40c4ff",
    textDecorationColor: "#ffffff",
    "& *": {
      color: "#ffffff"
    }
  }
}));

const MeridiemInput = props => {
  const { value, onChange } = props;
  const classes = useStyle();
  const [meridiem, setMeridiem] = useState(value.hours() >= 12 ? 0 : 1);
  useEffect(() => {
    setMeridiem(value.hours() >= 12 ? 1 : 0);
  }, [value]);
  return (
    <Grid
      className={clsx(classes.root)}
      item
      container
      justify={"space-between"}
      alignItems={"center"}
    >
      <Grid
        item
        className={clsx(classes.meridiem, {
          [classes.selected]: meridiem === 0
        })}
        container
        justify={"center"}
        alignItems={"center"}
        onClick={e => {
          if (value.hours() >= 12) {
            let _res = value.clone().subtract(12, "hours");
            onChange && onChange(_res);
          }
        }}
      >
        <Typography variant={"h5"}>AM</Typography>
      </Grid>
      <Grid
        item
        className={clsx(classes.meridiem, {
          [classes.selected]: meridiem === 1
        })}
        container
        justify={"center"}
        alignItems={"center"}
        onClick={e => {
          if (value.hours() < 12) {
            let _res = value.clone().add(12, "hours");
            onChange && onChange(_res);
          }
        }}
      >
        <Typography variant={"h5"}>PM</Typography>
      </Grid>
    </Grid>
  );
};
export default MeridiemInput;
