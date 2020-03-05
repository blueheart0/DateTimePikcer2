import Grid from "@material-ui/core/Grid";
import React from "react";
import { DayItem, NoopDayItem, WeekHeader } from "./component";

const DayItemSeries = function*(value, selected, onChange, components) {
  let _value = value.clone().startOf("week");
  let _endOfWeek = value.clone().endOf("week");
  do {
    // console.log(_value.toString());
    if (_value.isSame(value, "month")) {
      if (components && components.dayItem) {
        yield (
          <Grid
            item
            style={{ width: 36, height: 36 }}
            justify={"center"}
            alignItems={"center"}
          >
            <components.dayItem
              key={"Calender-dayItem-" + _value.toString()}
              value={_value.clone()}
              selected={selected}
              onChange={onChange}
            />
          </Grid>
        );
      } else {
        yield (
          <DayItem
            key={"Calender-dayItem-" + _value.toString()}
            value={_value.clone()}
            selected={selected}
            onChange={onChange}
          />
        );
      }
    } else {
      yield (<NoopDayItem key={"Calender-dayItem-" + _value.toString()} />);
    }
    _value.add(1, "day");
  } while (_value.isSameOrBefore(_endOfWeek));
};
const WeekRow = function*(value, onChange, components) {
  let _value = value.clone().startOf("month");
  let _endOfMonth = value.clone().endOf("month");
  do {
    // console.log(_value.toString());
    yield (
      <Grid
        key={"Calender-WeekRow-" + _value.toString()}
        item
        container
        justify={"center"}
      >
        {[...DayItemSeries(_value, value, onChange, components)]}
      </Grid>
    );
    _value.add(1, "week").startOf("week");
  } while (_value.isSameOrBefore(_endOfMonth));
};

const Calendar = props => {
  const { value, onChange, components } = props;
  return (
    <Grid container item>
      <WeekHeader />
      {[...WeekRow(value, onChange, components)]}
    </Grid>
  );
};
export default Calendar;
