import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { DatePicker, Header, TimePicker } from "./component";

const useStyle = makeStyles(theme => ({
  root: {
    // width: 620,
    // maxWidth: 620,
    // borderRadius: 8
    // boxSizing: "content-box"
  },
  dialogTitle: {
    padding: 0,
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8
    overflow: "hidden",
    backgroundColor: "#0277bd"
  },
  dialogContent: {
    padding: 0
  },
  dialogActions: {
    backgroundColor: "#ffffff",
    minHeight: 60
  },
  paper: {
    borderRadius: 8,
    backgroundColor: "#0277bd",
    width: 620,
    maxWidth: 620,
    minWidth: 620
  },
  button: {
    width: 57,
    height: 36,
    borderRadius: 4,
    marginRight: 8
  },
  confirm: { color: theme.palette.primary.main },
  cancel: { color: "rgba( 255 255 255, 0.01)" },
  now: { color: theme.palette.secondary.main }
}));

const DateTimePicker = props => {
  const { open, value, components, onChange, onClose, ...others } = props;
  const classes = useStyle();
  const [last, setLast] = useState(value);
  useEffect(() => {
    setLast(value);
  }, [value]);

  return (
    <Dialog
      open={open}
      className={clsx(classes.root)}
      PaperProps={{ className: clsx(classes.paper) }}
    >
      <DialogTitle
        className={clsx(classes.dialogTitle)}
        disableTypography={true}
      >
        <Header value={last} />
      </DialogTitle>
      <DialogContent className={clsx(classes.dialogContent)}>
        <Grid container>
          <Grid item>
            <DatePicker
              value={last}
              components={components}
              onChange={e => {
                setLast(e);
              }}
            />
          </Grid>
          <Grid item>
            <TimePicker
              value={last}
              onChange={e => {
                setLast(e);
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions className={clsx(classes.dialogActions)}>
        <Grid container justify={"space-between"} alignItems={"center"}>
          <Grid item>
            <Button
              className={clsx(classes.button)}
              onClick={() => {
                setLast(moment());
              }}
            >
              <Typography variant={"h5"} className={clsx(classes.now)}>
                {"현재"}
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button className={clsx(classes.button)} onClick={() => onClose()}>
              <Typography variant={"h5"} className={clsx(classes.cancel)}>
                {"취소"}
              </Typography>
            </Button>
            <Button
              className={clsx(classes.button)}
              onClick={() => onChange(last)}
            >
              <Typography variant={"h5"} className={clsx(classes.confirm)}>
                {"확인"}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default DateTimePicker;
