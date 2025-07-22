export const allThemeProps = {
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    unit: "px",
  },
  direction: "ltr",
  components: {
    MuiAccordion: {
      defaultProps: {},
      styleOverrides: {
        root: {
          "&.Mui-expanded": {
            "&:before": {
              opacity: 1,
            },
            margin: "16px 0",
          },
          "&.Mui-disabled": {
            backgroundColor: "rgba(0, 0, 0, 0.12)",
            color: "rgba(0, 0, 0, 0.26)",
          },
          "&:before": {
            backgroundColor: "rgba(0, 0, 0, 0.12)",
            content: '""',
            height: 1,
            left: 0,
            opacity: 1,
            position: "absolute",
            right: 0,
            top: -1,
            transition: "opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          },
          backgroundColor: "#fff",
          backgroundImage: "none",
          boxShadow: "none",
          color: "rgba(0, 0, 0, 0.87)",
          position: "relative",
          transition: "margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        rounded: {
          "&:first-of-type": {
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          },
          "&:last-of-type": {
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          },
        },
        gutters: {
          "&.Mui-expanded": {
            margin: "16px 0",
          },
        },
        region: {},
      },
      variants: [],
    },
    MuiAccordionActions: {
      defaultProps: {},
      styleOverrides: {
        root: {
          display: "flex",
          padding: 8,
          alignItems: "center",
          justifyContent: "flex-end",
        },
        spacing: {
          "& > :not(:first-of-type)": {
            marginLeft: 8,
          },
        },
      },
      variants: [],
    },
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: "rgba(0, 0, 0, 0.26)",
            boxShadow: "none",
            backgroundColor: "rgba(0, 0, 0, 0.12)",
          },
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: 4,
          transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: "0.875rem",
          fontWeight: 500,
          lineHeight: 1.75,
          letterSpacing: "0.02857em",
          textTransform: "uppercase",
          color: "rgba(0, 0, 0, 0.87)",
        },
      },
      variants: [],
    },
    MuiTextField: {
      defaultProps: {},
      styleOverrides: {},
      variants: [],
    },
    MuiTooltip: {
      defaultProps: {
        arrow: false,
        placement: "bottom",
      },
      styleOverrides: {
        tooltip: {
          backgroundColor: "rgba(97, 97, 97, 0.92)",
          borderRadius: 4,
          color: "#fff",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: "0.6875rem",
          fontWeight: 500,
          lineHeight: 1.6,
          letterSpacing: "0.02857em",
          padding: "4px 8px",
        },
        arrow: {
          color: "rgba(97, 97, 97, 0.92)",
        },
      },
      variants: [],
    },
    MuiAccordionDetails: {
      defaultProps: {},
      styleOverrides: {
        root: {
          padding: "8px 16px 16px",
        },
      },
      variants: [],
    },
    MuiAccordionSummary: {
      defaultProps: {},
      styleOverrides: {
        root: {
          "&.Mui-expanded": {
            minHeight: 64,
          },
          "&.Mui-focusVisible": {
            backgroundColor: "rgba(0, 0, 0, 0.12)",
          },
          "&.Mui-disabled": {
            opacity: 0.38,
          },
          "&:hover": {
            cursor: "pointer",
          },
          display: "flex",
          minHeight: 48,
          padding: "0 16px",
          transition: "min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        gutters: {
          "&.Mui-expanded": {
            margin: "12px 0",
          },
        },
        content: {
          "&.Mui-expanded": {
            margin: "12px 0",
          },
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          margin: "12px 0",
          transition: "margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        expandIconWrapper: {
          "&.Mui-expanded": {
            transform: "rotate(180deg)",
          },
          color: "rgba(0, 0, 0, 0.54)",
          transform: "rotate(0deg)",
          transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
      },
      variants: [],
    },
    MuiAlert: {
      defaultProps: {},
      styleOverrides: {
        root: {
          display: "flex",
          padding: "6px 16px",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: "0.875rem",
          fontWeight: 400,
          lineHeight: 1.43,
          letterSpacing: "0.01071em",
          borderRadius: 4,
        },
        action: {
          alignItems: "flex-start",
          display: "flex",
          marginRight: -8,
          marginLeft: "auto",
          marginTop: -4,
          padding: "4px 0 0 16px",
        },
        icon: {
          display: "flex",
          fontSize: 22,
          marginRight: 12,
          opacity: 0.9,
          padding: "7px 0",
        },
        message: {
          display: "flex",
          flex: "1 1 auto",
          padding: "8px 0",
        },
        filled: {
          color: "#fff",
        },
        filledSuccess: {
          backgroundColor: "#2e7d32",
        },
        filledInfo: {
          backgroundColor: "#0288d1",
        },
        filledWarning: {
          backgroundColor: "#ed6c02",
        },
        filledError: {
          backgroundColor: "#d32f2f",
        },
        outlined: {
          border: "1px solid",
        },
        outlinedSuccess: {
          color: "#2e7d32",
          borderColor: "rgba(46, 125, 50, 0.5)",
        },
        outlinedInfo: {
          color: "#0288d1",
          borderColor: "rgba(2, 136, 209, 0.5)",
        },
        outlinedWarning: {
          color: "#ed6c02",
          borderColor: "rgba(237, 108, 2, 0.5)",
        },
        outlinedError: {
          color: "#d32f2f",
          borderColor: "rgba(211, 47, 47, 0.5)",
        },
        standard: {},
        standardSuccess: {
          backgroundColor: "rgb(237, 247, 237)",
          color: "rgb(30, 70, 32)",
        },
        standardInfo: {
          backgroundColor: "rgb(229, 246, 253)",
          color: "rgb(1, 67, 97)",
        },
        standardWarning: {
          backgroundColor: "rgb(255, 244, 229)",
          color: "rgb(102, 60, 0)",
        },
        standardError: {
          backgroundColor: "rgb(253, 237, 237)",
          color: "rgb(95, 33, 32)",
        },
      },
      variants: [],
    },
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    mode: "light",
    primary: {
      main: "rgba(0, 0, 0, 0.87)",
      light: "rgba(0, 0, 0, 0.87)",
      dark: "rgba(0, 0, 0, 0.87)",
      contrastText: "#fff",
    },
    secondary: {
      main: "rgba(0, 0, 0, 0.87)",
      light: "rgba(0, 0, 0, 0.87)",
      dark: "rgba(0, 0, 0, 0.87)",
      contrastText: "#fff",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#fff",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#fff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#fff",
      default: "#fff",
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  shape: {
    borderRadius: 4,
  },
  unstable_sxConfig: {
    border: {
      themeKey: "borders",
      transform: "borders",
    },
    borderTop: {
      themeKey: "borders",
      transform: "borders",
    },
    borderRight: {
      themeKey: "borders",
      transform: "borders",
    },
    borderBottom: {
      themeKey: "borders",
      transform: "borders",
    },
    borderLeft: {
      themeKey: "borders",
      transform: "borders",
    },
    borderColor: {
      themeKey: "palette",
    },
    borderTopColor: {
      themeKey: "palette",
    },
    borderRightColor: {
      themeKey: "palette",
    },
    borderBottomColor: {
      themeKey: "palette",
    },
    borderLeftColor: {
      themeKey: "palette",
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: "borderRadius",
    },
    boxShadow: {
      themeKey: "shadows",
    },
    color: {
      themeKey: "palette",
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
    },
    backgroundColor: {
      themeKey: "palette",
    },
    p: {
      themeKey: "spacing",
    },
    pt: {
      themeKey: "spacing",
    },
    pr: {
      themeKey: "spacing",
    },
    pb: {
      themeKey: "spacing",
    },
    pl: {
      themeKey: "spacing",
    },
    px: {
      themeKey: "spacing",
    },
    py: {
      themeKey: "spacing",
    },
    padding: {
      themeKey: "spacing",
    },
    paddingTop: {
      themeKey: "spacing",
    },
    paddingRight: {
      themeKey: "spacing",
    },
    paddingBottom: {
      themeKey: "spacing",
    },
    paddingLeft: {
      themeKey: "spacing",
    },
    paddingX: {
      themeKey: "spacing",
    },
    paddingY: {
      themeKey: "spacing",
    },
    m: {
      themeKey: "spacing",
    },
    mt: {
      themeKey: "spacing",
    },
    mr: {
      themeKey: "spacing",
    },
    mb: {
      themeKey: "spacing",
    },
    ml: {
      themeKey: "spacing",
    },
    mx: {
      themeKey: "spacing",
    },
    my: {
      themeKey: "spacing",
    },
    margin: {
      themeKey: "spacing",
    },
    marginTop: {
      themeKey: "spacing",
    },
    marginRight: {
      themeKey: "spacing",
    },
    marginBottom: {
      themeKey: "spacing",
    },
    marginLeft: {
      themeKey: "spacing",
    },
    marginX: {
      themeKey: "spacing",
    },
    marginY: {
      themeKey: "spacing",
    },
    typography: {
      themeKey: "typography",
    },
    fontFamily: {
      themeKey: "typography",
    },
    fontSize: {
      themeKey: "typography",
    },
    fontStyle: {
      themeKey: "typography",
    },
    fontWeight: {
      themeKey: "typography",
    },
    letterSpacing: {
      themeKey: "typography",
    },
    lineHeight: {
      themeKey: "typography",
    },
    textAlign: {
      themeKey: "typography",
    },
    textTransform: {
      themeKey: "typography",
    },
    display: {},
    gridAutoFlow: {},
    gridTemplateColumns: {},
    gridTemplateAreas: {},
    gridArea: {},
    gap: {
      themeKey: "spacing",
    },
    rowGap: {
      themeKey: "spacing",
    },
    columnGap: {
      themeKey: "spacing",
    },
    width: {},
    maxWidth: {},
    minWidth: {},
    height: {},
    maxHeight: {},
    minHeight: {},
    boxSizing: {},
    position: {},
    top: {},
    left: {},
    bottom: {},
    right: {},
    visibility: {},
    zIndex: {
      themeKey: "zIndex",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 48,
      },
      "@media (min-width:600px)": {
        minHeight: 64,
      },
    },
  },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};
