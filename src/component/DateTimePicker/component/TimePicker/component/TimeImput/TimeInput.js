import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React, { useState } from "react";

const useStyle = makeStyles(
  theme => ({
    root: { width: 310, marginTop: 115, marginBottom: 32 },
    Input: { width: 111, height: 71 },
    input: { fontSize: 48, fontWeight: 500 },
    "@keyframes blink": {
      "50%": { opacity: 0 }
    },
    colon: {
      fontSize: 48,
      color: "#ababab",
      animation: "$blink 2s linear infinite"
    }
  }),
  { name: "TimePicker-TimeInput" }
);

const InputMenuHourItems = function*(count, value) {
  for (let i = 0; i < count; i++) {
    if (value.hours() >= 12) {
      if (i === 11) {
        yield (<MenuItem value={i + 1}>{i + 1}</MenuItem>);
      } else {
        yield (<MenuItem value={i + 1 + 12}>{i + 1}</MenuItem>);
      }
    } else {
      yield (<MenuItem value={(i + 1) % 12}>{i + 1}</MenuItem>);
    }
  }
};

const InputMenuTimeItems = function*(count) {
  for (let i = 0; i < count; i++) {
    yield (<MenuItem value={i}>{i}</MenuItem>);
  }
};
const isPM = value => {
  if (!value) return 0;
  if (value.hours() > 12) {
    return 1;
  } else {
    return 0;
  }
};
const TimeInput = props => {
  const { value, onChange } = props;
  const [meridiem, setMeridiem] = useState(isPM(value));
  // useEffect(() => {
  //   setMeridiem(isPM(value));
  // }, [value]);
  const classes = useStyle();
  console.log(value.hours());
  return (
    <Grid
      className={clsx(classes.root)}
      item
      container
      wrap={"nowrap"}
      justify={"center"}
      alignItems={"center"}
    >
      <Grid item>
        <TextField
          InputProps={{ className: clsx(classes.Input) }}
          inputProps={{ className: clsx(classes.input) }}
          value={value.hours()}
          variant={"outlined"}
          select={true}
          onChange={event => {
            onChange(value.clone().hours(event.target.value));
          }}
        >
          {[...InputMenuHourItems(12, value)]}
        </TextField>
      </Grid>
      <Grid item>
        <Grid container alignItems={"center"}>
          <Typography
            className={clsx(classes.colon)}
            variant={"h2"}
            component={"span"}
          >
            {":"}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <TextField
          InputProps={{ className: clsx(classes.Input) }}
          inputProps={{ className: clsx(classes.input) }}
          value={value.minutes()}
          variant={"outlined"}
          select={true}
          onChange={event => {
            onChange(value.clone().minutes(event.target.value));
          }}
        >
          {[...InputMenuTimeItems(60)]}
        </TextField>
      </Grid>
    </Grid>
  );
};
export default TimeInput;
