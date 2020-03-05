import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import moment from "moment";
import React from "react";

const useStyle = makeStyles(
  () => ({
    root: { userSelect: "none" }
  }),
  { name: "Calendar-WeekHeader" }
);
const WeekHeader = () => {
  const classes = useStyle();
  return (
    <Grid className={clsx(classes.root)} item container justify={"center"}>
      {moment
        .localeData()
        .weekdaysMin()
        .map(item => {
          return (
            <Grid
              key={"WeekHeader" + item}
              item
              style={{ width: 36, height: 36 }}
              container
              justify={"center"}
              alignItems={"center"}
            >
              <Typography variant={"body1"}>
                {item.toUpperCase().charAt(0)}
              </Typography>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default WeekHeader;
