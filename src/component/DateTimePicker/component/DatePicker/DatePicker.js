import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Calendar, Header } from "./component";

const useStyle = makeStyles(theme => ({
  root: {
    width: 310,
    boxSizing: "border-box",
    paddingTop: 8,
    backgroundColor: "#ffffff",
    height: 316
  }
}));
const DatePicker = props => {
  const { value, onChange, components, ...others } = props;
  const classes = useStyle();

  return (
    <Grid className={classes.root} container direction={"column"}>
      <Grid item container justify={"center"} alignItems={"center"}>
        <Header value={value} onChange={onChange} />
      </Grid>
      <Grid item container justify={"center"} alignItems={"center"}>
        <Calendar value={value} onChange={onChange} components={components} />
      </Grid>
    </Grid>
  );
};
export default DatePicker;
