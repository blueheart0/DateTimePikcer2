import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";

const useStyle = makeStyles(
  theme => ({
    root: {
      backgroundColor: "#0277bd",
      padding: "4px 0"
      // borderTopLeftRadius: 8,
      // borderTopRightRadius: 8
    },
    typo: {
      color: theme.palette.common.white
    }
  }),
  { name: "DateTimePicker-Header" }
);

const Header = props => {
  const { value, ...others } = props;
  const classes = useStyle();
  return (
    <Box className={clsx(classes.root)}>
      <Grid container justify={"center"} alignItems={"center"}>
        <Grid item>
          <Typography className={clsx(classes.typo)} variant={"h4"}>
            {/*{value.format("dddd D MMMM YYYY, hh:mm A")}*/}
            {value.format("LLLL")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
