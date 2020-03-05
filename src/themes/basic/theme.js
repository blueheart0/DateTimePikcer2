import { palette as commonPalette } from "../common";
import overrides from "../overrides";
import { default as basicPalette } from "./palette";
import typography from "./typography";

const palette = { ...basicPalette, ...commonPalette };
const theme = {
  themeName: "Basic Theme",
  spacing: 8,
  palette,
  typography,
  overrides
};

export default theme;
