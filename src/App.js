import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { DateTimePicker } from "component/DateTimePicker";
import moment from "moment";
import "moment/locale/ko";
import React, { useState } from "react";
import { basicTheme } from "themes";

function App() {
  const theme = {
    ...basicTheme,
    typography: {
      ...basicTheme.typography,
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Noto Sans",
        "Roboto"
      ].join(",")
    }
  };
  console.log(moment.locale("ko"));
  const components = {
    // dayItem: props => {
    //   console.log(props);
    //   return (
    //     <Grid
    //       container
    //       justify={"center"}
    //       alignItems={"center"}
    //       onClick={() => console.log(props.value.toString())}
    //     >
    //       A
    //     </Grid>
    //   );
    // }
  };
  const [open, setOpen] = useState(true);
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <div className="App">
        <DateTimePicker
          open={open}
          onChange={e => console.log(e.toString())}
          onClose={() => setOpen(false)}
          value={moment()}
          components={components}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
