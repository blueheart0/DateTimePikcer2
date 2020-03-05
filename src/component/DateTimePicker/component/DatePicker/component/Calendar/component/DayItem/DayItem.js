import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";

const useDayItemStyle = makeStyles(
  theme => ({
    root: {
      width: 36,
      height: 36,
      backgroundColor: "transparent",
      borderRadius: "50%",
      userSelect: "none",
      cursor: "pointer",
      "& p": {
        color: theme.palette.common.black
      },
      "&:hover": {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.secondary.main,
        "& p": {
          color: theme.palette.common.white
        }
      }
    },
    selected: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.main,
      "& p": {
        color: theme.palette.common.white
      }
    }
  }),
  { name: "Calendar-DayItem" }
);
const DayItem = props => {
  const { value, selected, onChange } = props;
  const classes = useDayItemStyle();
  return (
    <Grid
      item
      container
      className={clsx(classes.root, {
        [classes.selected]:
          value.isSame(selected, "year") &&
          value.isSame(selected, "month") &&
          value.isSame(selected, "day")
      })}
      justify={"center"}
      alignItems={"center"}
      onClick={event => {
        onChange &&
          onChange(selected.clone().dayOfYear(Number(value.format("DDD"))));
      }}
    >
      <Typography variant={"body1"}>{value.format("D")}</Typography>
    </Grid>
  );
};

export default DayItem;
