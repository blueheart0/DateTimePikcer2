import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React from "react";
import { MeridiemInput, TimeInput } from "./component";

const useStyle = makeStyles(theme => ({
  root: { height: 316, backgroundColor: "#ffffff" }
}));

const TimePicker = props => {
  const { value, onChange } = props;
  const classes = useStyle();
  return (
    <Grid
      className={clsx(classes.root)}
      container
      direction={"column"}
      wrap={"nowrap"}
    >
      <TimeInput value={value.clone()} onChange={onChange} />
      <MeridiemInput value={value.clone()} onChange={onChange} />
    </Grid>
  );
};
export default TimePicker;
