const popperWidth = 340;
const adornedPadding = 8;

export default {
  root: {},
  popper: {},
  paper: {
    maxHeight: popperWidth,
    minWidth: popperWidth,
    width: popperWidth,
    overflow: "auto",
    opacity: 0.9,
    backgroundColor: "rgba(0, 0, 0, 0.54)"
  },
  endAdornment: {},
  hasPopupIcon: {},
  hasClearIcon: {},
  noOptions: { color: "white" },
  input: {},
  inputRoot: {
    '&[class*="MuiOutlinedInput-root"]': {
      padding: "14px 10px",
      "$hasPopupIcon &, $hasClearIcon &": {
        paddingRight: adornedPadding
      },
      "$hasPopupIcon$hasClearIcon &": {
        paddingRight: adornedPadding
      },
      "& $input": {
        padding: 0
      },
      "& $endAdornment": {
        right: adornedPadding
      },
      '&[class*="MuiOutlinedInput-marginDense"]': {
        padding: "8px 10px",
        "& $input": {
          padding: 0
        }
      }
    }
  }
};
