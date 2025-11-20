import type { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import {
  AccordionExpandIcon,
  AlertNeutralIcon,
  BreadcrumbSeparatorIcon,
  SnackbarTransition,
} from "../components/CustomComponents";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import React from "react";
import { Timer10 } from "@mui/icons-material";

// HCL Color Palette - exported for use in custom components
export const colors = {
  purple: {
    50: "#E2D9FB",
    100: "#C5B4F7",
    200: "#A98EF4",
    300: "#8C69F0",
    400: "#8258E8",
    500: "#7647DD", // Mid Purple
    600: "#6B35D3",
    700: "#5F1EBE", // Tech Purple
    800: "#4c189e",
    900: "#411482", // Dark Purple
  },
  blue: {
    50: "#D7ECFD",
    100: "#B4DBFC",
    200: "#8CC8FA",
    300: "#6EB8F9",
    400: "#4B9EF9",
    500: "#3C91FF", // Tech Blue
    600: "#3282FA",
    700: "#2874f0",
    800: "#0f5fdc", // Dark Blue
    900: "#0049B2",
  },
  teal: {
    50: "#d2f2ed",
    100: "#a5e6dc",
    200: "#8adbcf",
    300: "#6fcfbf",
    400: "#4bc3af",
    500: "#33afa0",
    600: "#2ba096",
    700: "#198e88",
    800: "#007873", // Dark Teal
    900: "#006059",
  },
  green: {
    50: "#def5d9",
    100: "#beebb4",
    200: "#a1e596",
    300: "#82dc73",
    400: "#62d16b",
    500: "#49c173",
    600: "#2db26c",
    700: "#0fa069", // Dark Green
    800: "#0a875d",
    900: "#077251",
  },
  yellow: {
    50: "#fff2d9",
    100: "#ffe6b4",
    200: "#ffe18d",
    300: "#ffd970",
    400: "#ffcd41",
    500: "#f2bb33",
    600: "#e2ab30",
    700: "#d8991d",
    800: "#c8870a", // Dark Yellow
    900: "#ad6f0b",
  },
  coral: {
    50: "#ffdeeb",
    100: "#ffbed7",
    200: "#ffaecb",
    300: "#ff94b5",
    400: "#ff789b",
    500: "#f7668f",
    600: "#ed5a88",
    700: "#d64770",
    800: "#c3325f", // Dark Coral
    900: "#aa1f51",
  },
  bronze: {
    50: "#FAF0E6", // Cream
    100: "#eadcd6",
    200: "#e0cdc6",
    300: "#d7beb4",
    400: "#c6aaa1",
    500: "#b79d9a",
    600: "#a88a83",
    700: "#9e7c75",
    800: "#936e64",
    900: "#896056",
  },
  grey: {
    50: "#FFFFFF",
    100: "#E6EBF5",
    200: "#D5DCE5",
    300: "#C8D2DD",
    400: "#B9C3D0",
    500: "#A5AFBE",
    600: "#919EAF",
    700: "#8291A0",
    800: "#6C7882",
    900: "#5B666D",
    A100: "#475156",
    A200: "#333A3D",
    A400: "#1D2123",
    A700: "#000000",
  },
  red: {
    800: "#FCA5A5",
    900: "#DC2626",
  },
};

export const getThemeOptions = (): ThemeOptions => ({
  cssVariables: true,
  palette: {
    primary: {
      main: colors.purple[700], // Tech Purple
      light: colors.purple[500],
      dark: colors.purple[900],
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: colors.blue[500], // Tech Blue
      light: colors.blue[400],
      dark: colors.blue[800],
      contrastText: "#FFFFFF",
    },
    error: {
      main: colors.coral[600],
      light: colors.coral[400],
      dark: colors.coral[800],
      contrastText: "#FFFFFF",
    },
    warning: {
      main: colors.yellow[500],
      light: colors.yellow[300],
      dark: colors.yellow[800],
      contrastText: colors.grey.A400,
    },
    info: {
      main: colors.blue[600],
      light: colors.blue[300],
      dark: colors.blue[900],
      contrastText: "#FFFFFF",
    },
    success: {
      main: colors.green[600],
      light: colors.green[400],
      dark: colors.green[800],
      contrastText: "#FFFFFF",
    },
    grey: colors.grey,
    text: {
      primary: colors.grey.A400,
      secondary: colors.grey[900],
      disabled: colors.grey[700],
    },
    background: {
      default: colors.grey[50],
      paper: colors.grey[50],
    },
    divider: colors.grey[300],
    action: {
      active: colors.purple[700],
      hover: colors.purple[50],
      selected: colors.purple[100],
      disabled: colors.grey[500],
      disabledBackground: colors.grey[200],
    },
  },
  typography: {
    fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      color: colors.grey.A400,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.3,
      color: colors.grey.A400,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.4,
      color: colors.grey.A400,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
      color: colors.grey.A400,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.5,
      color: colors.grey.A400,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.6,
      color: colors.grey.A400,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.43,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: 1.75,
      textTransform: "none",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      lineHeight: 2.66,
      textTransform: "uppercase",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-light.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-lightitalic.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-regular.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-regularitalic.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-medium.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-mediumitalic.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-semibold.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-bold.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-bolditalic.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-extrabold.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: italic;
          font-weight: 800;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-extrabolditalic.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: normal;
          font-weight: 900;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-heavy.woff2') format('woff2');
        }
        @font-face {
          font-family: 'HclTechRoobert';
          font-style: italic;
          font-weight: 900;
          font-display: swap;
          src: url('/assets/fonts/hcltechroobert-heavyitalic.woff2') format('woff2');
        }
        /* TextareaAutosize Overrides */
        .MuiBox-root textarea {
          width: 100%;
          min-height: 76px;
          border: 1px solid #C8D2DD;
          border-radius: 4px;
          box-shadow: 0px 1px 2px 0px #0000000D;
          padding: 8px;
        }
        .MuiBox-root textarea:focus {
          box-shadow: 0px 0px 0px 3px #D4D4D4;
          outline: 0;
        }

        .MuiBox-root textarea.error {
          border-color: #DC2626;
          box-shadow: 0px 0px 0px 3px #FCA5A5;
          outline: 0;
        }

        .MuiBox-root textarea:disabled {
          background-color: transparent;
          border-color: #E6EBF5;
          color: #B5B5B5;
        }
      `,
    },
    MuiButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          borderRadius: "6px",
          boxShadow: "none",
          textTransform: "none",
          fontSize: "14px",
          fontWeight: 500,
          "&:hover": {
            boxShadow: "none",
          },
          "&.MuiButton-contained": {
            backgroundColor: colors.purple[700],
            border: "none",

            "&:hover": {
              backgroundColor: colors.purple[700],
              boxShadow: `0px 0px 0px 3px ${colors.purple[200]}`,
            },
            "&:focus": {
              backgroundColor: colors.purple[700],
              boxShadow: `0px 0px 0px 3px ${colors.grey[400]}`,
            },
            "&:not(.MuiButton-loading):disabled": {
              backgroundColor: colors.purple[200],
              color: "white",
            },
          },
          "&.MuiButton-contained.MuiButton-colorSecondary": {
            backgroundColor: "transparent",
            border: "none",
            boxShadow: `0px 0px 0px 1px ${colors.purple[700]}`,
            color: colors.grey.A400,
            "&:hover": {
              boxShadow: `0px 0px 0px 2px ${colors.purple[700]}`,
            },
            "&:focus": {
              boxShadow: `0px 0px 0px 3px ${colors.purple[700]}`,
            },
            "&:disabled": {
              backgroundColor: colors.grey[100],
              boxShadow: "none",
              color: colors.grey[800],
            },
          },
          "&.MuiButton-outlined": {
            backgroundColor: "transparent",
            border: `1px solid ${colors.grey[200]}`,
            boxShadow: "0px 1px 2px -1px #0000001A",
            color: colors.grey.A400,

            "&:hover": {
              boxShadow: "0px 1px 3px 0px #0000001A",
            },
            "&:focus": {
              boxShadow: "0px 0px 0px 3px #D4D4D4",
            },
            "&:disabled": {
              borderColor: colors.grey[100],
              color: colors.grey[800],
            },
          },
          "&.MuiButton-ghost": {
            //backgroundColor: colors.purple[700],
            border: "3px solid transparent",

            "&:hover": {
              backgroundColor: colors.grey[200],
            },
            "&:focus": {
              backgroundColor: "transparent",
              boxShadow: `0px 0px 0px 3px ${colors.grey[200]}`,
            },
            "&:disabled": {
              color: colors.grey[800],
            },
          },
          "&.MuiButton-destructive": {
            backgroundColor: colors.red[900],
            border: "none",
            color: "white",

            "&:hover": {
              backgroundColor: colors.red[900],
            },
            "&:focus": {
              backgroundColor: colors.red[900],
              boxShadow: `0px 0px 0px 3px ${colors.red[800]}`,
            },
            "&:disabled": {
              backgroundColor: "#ee9292",
              color: "white",
            },
          },
          "&.MuiButton-hcl": {
            background: "linear-gradient(90deg, #5F1EBE 10%, #3C91FF 100%)",
            color: "white",

            "&:hover": {
              background: "linear-gradient(90deg, #5F1EBE 10%, #5F1EBE 100%)",
            },
            "&:focus": {
              background: `linear-gradient(90deg, ${colors.purple[800]} 10%, ${colors.purple[800]} 100%)`,
              boxShadow: `0px 0px 0px 3px ${colors.grey[200]}`,
            },
            "&:disabled": {
              background: colors.purple[200],
              borderColor: colors.purple[200],
              color: "white",
            },
          },
          "&.MuiButton-ai": {
            background: "transparent",
            border: "none",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: "none",
              borderRadius: "inherit",
              padding: "1px",
              background: "linear-gradient(135deg, #7ABEF7 0%, #572AC2 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            },
            "&:hover::before": {
              padding: "2px",
            },
            "&:focus::before": {
              padding: "3px",
            },
            "&:disabled": {
              backgroundColor: colors.purple[200],
              borderColor: colors.purple[200],
              color: "white",
            },
          },
          "&.MuiButton-sizeMini": {
            fontSize: "12px",
            height: "28px",
          },
          "&.MuiButton-sizeSmall": {
            height: "32px",
          },
          "&.MuiButton-sizeMedium": {
            height: "36px",
          },
          "&.MuiButton-sizeLarge": {
            height: "40px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 2px 8px rgba(29, 33, 35, 0.08)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12,
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        //expandIcon: React.createElement(AccordionExpandIcon),
        iconMapping: {
          info: React.createElement(AlertNeutralIcon),
        },
      },
      styleOverrides: {
        root: {
          display: "flex",
          background: "white",
          border: `1px solid ${colors.grey[200]}`,
          borderRadius: 6,
          boxShadow: "none",
          minHeight: "53px",
          maxWidth: "400px",
          width: "100%",

          "&.MuiAlert-colorError": {
            borderColor: colors.red[900],
            color: colors.red[900],

            "& .MuiSvgIcon-root": {
              color: colors.red[900],
            },
          },
          "& .MuiAlert-icon": {
            marginTop: "4px",
          },
          "&.MuiAlert-iconFlipped": {
            flexDirection: "row",
            //justifyContent: "space-between",

            "& .MuiAlert-message": {
              order: 1,
              marginRight: "auto",
            },

            "& .MuiAlert-icon": {
              order: 2,
              //marginRight: 0,
            },

            "& .MuiAlert-action": {
              order: 3,
              marginLeft: 0,
              paddingLeft: 0,
            },
          },
          "& .MuiSvgIcon-root": {
            color: colors.grey.A400,
            fontSize: "16px",
          },

          "& .MuiButtonBase-root": {
            border: `1px solid ${colors.grey[200]}`,
            boxShadow: "0px 1px 3px 0px #0000001A",
            color: colors.grey.A400,
          },
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontWeight: 500,
          marginBottom: 0,
          marginTop: 0,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: "none",
        },
        root: {
          background: colors.grey[100],
          borderRadius: "12px",
          display: "inline-flex",
          alignItems: "center",
          height: "40px",
          minHeight: "auto",
          padding: 0,
          width: "100%",
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          alignItems: "center",
          border: "1px solid transparent",
          borderRadius: "8px",
          color: colors.grey.A400,
          flex: 1,
          fontSize: "12.25px",
          fontWeight: 500,
          margin: "4px 1px",
          minHeight: "32px",
          minWidth: "30px",
          padding: "6px 0",
          textTransform: "capitalize",
          "&.Mui-selected": {
            backgroundColor: "white",
            borderColor: "white",
            boxShadow:
              "0 1px 2px -1px rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);",
            color: "inherit",
          },
          "&.Mui-focusVisible": {
            borderColor: colors.grey[200],
            borderWidth: "1px",
            borderStyle: "solid",
          },
        },
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          "& .MuiTouchRipple-child": {
            backgroundColor: "rgba(0, 0, 0, 0.14)",
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          ".MuiCircularProgress-circle": {
            strokeLinecap: "round",
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 8,
          borderRadius: 4,
          backgroundColor: colors.grey[200],
          ".MuiLinearProgress-bar2": {
            backgroundColor: colors.grey[200],
          },
        },
      },
    },

    MuiTooltip: {
      defaultProps: {
        arrow: true,
        slotProps: {
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -6],
                },
              },
            ],
          },
        },
      },
      styleOverrides: {
        tooltip: {
          backgroundColor: colors.grey.A400,
          fontSize: "12px",
          padding: "6px 8px",
        },
        arrow: {
          color: colors.grey.A400,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.grey.A400,
          fontSize: "14px",
          fontWeight: 500,
          marginBottom: "5px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.grey.A400,
          fontSize: "14px",
          fontWeight: 500,
          marginBottom: "5px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: `1px solid ${colors.grey[300]}`,
          borderRadius: "6px",
          color: colors.grey.A400,
          fontSize: "14px",
          padding: "2.5px 7.5px",
          width: "100%",
          "&::before": {
            display: "none",
          },
          "&::after": {
            display: "none",
          },
          "&.Mui-focused": {
            borderColor: colors.grey.A400,
            boxShadow: "0px 0px 0px 3px #D4D4D4",
          },
          "&.Mui-disabled": {
            border: `1px solid ${colors.grey[100]}`,
          },

          "&.Mui-error": {
            borderColor: colors.red[900],

            "&.Mui-focused": {
              boxShadow: `0px 0px 0px 3px ${colors.red[800]}`,
            },
          },
          "&.MuiInputBase-sizeSmall": {
            height: "24px",
          },
          "&.MuiInputBase-sizeMedium": {
            height: "32px",
          },
          "&.MuiInputBase-sizeLarge": {
            height: "40px",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          position: "relative",
          width: "30px",
          height: "30px",
          //border: `1px solid ${colors.grey.A400}`,
          //boxShadow: "0px 1px 2px 0px #0000000D",
          color: colors.grey.A400,
          padding: 0,
          margin: 0,
          svg: {
            display: "none",
          },

          "&:before": {
            content: '""',
            display: "block",
            width: "16px",
            height: "16px",
            border: "1px solid #D4D4D4",
            boxShadow: "0px 1px 2px 0px #0000000D",
            borderRadius: "50%",
          },
          "&:after": {
            position: "absolute",
            top: "11px",
            left: "11px",
            content: '""',
            display: "block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
          },
          "&.error:before": {
            borderColor: colors.red[900],
          },
          "&.Mui-checked": {
            "&:after": {
              backgroundColor: colors.grey.A400,
            },
          },
          "&.error.Mui-checked": {
            "&:after": {
              backgroundColor: colors.red[900],
            },
          },
          "&.Mui-focused": {
            backgroundColor: "transparent",
            borderColor: colors.grey.A400,
            boxShadow: `0 0 0 3px ${colors.grey[300]}`,
          },
          "&.Mui-error": {
            borderColor: colors.red[900],

            "&.Mui-focused": {
              boxShadow: `0px 0px 0px 3px ${colors.red[800]}`,
            },
          },
          "&.error": {
            borderColor: colors.red[900],

            "&.Mui-focused": {
              boxShadow: `0px 0px 0px 3px ${colors.red[800]}`,
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          position: "relative",
          border: "none",
          borderRadius: "8px",
          fontStyle: "normal",

          svg: {
            display: "none",
          },

          "&:before": {
            position: "absolute",
            top: "calc(50% - 3px)",
            right: "13px",
            content: '""',
            display: "block",
            width: "1.5px",
            height: "7px",
            backgroundColor: colors.grey[800],
            transform: "rotate(45deg)",
          },

          "&:after": {
            position: "absolute",
            top: "calc(50% - 3px)",
            right: "17px",
            content: '""',
            display: "block",
            width: "1.5px",
            height: "7px",
            backgroundColor: colors.grey[800],
            transform: "rotate(135deg)",
          },

          "& .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${colors.grey[300]}`,
          },
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${colors.grey[300]}`,
            },
          },
          "&.Mui-focused": {
            //backgroundColor: "red",
            border: `none`,
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${colors.grey[300]}`,
            },
            "& .MuiSelect-icon": {
              color: colors.grey[300],
            },

            "&:before": {
              transform: "rotate(135deg)",
            },

            "&:after": {
              transform: "rotate(45deg)",
            },
          },
          "&.&.Mui-disabled": {
            border: 0,
          },

          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.grey[100],
            boxShadow: "none",

            "& .MuiSelect-icon": {
              color: colors.grey[100],
            },
          },

          "&.error .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${colors.red[900]}`,
          },

          "&.error.Mui-focused": {
            //backgroundColor: "red",
            boxShadow: `0px 0px 0px 3px ${colors.red[800]}`,
            border: `none`,
            "& .MuiSelect-icon": {
              color: colors.grey[200],
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "4.5px 7.5px",
        },
        root: {
          border: `1px solid ${colors.grey[200]}`,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          marginTop: "5px",
        },
        paper: {
          borderRadius: "8px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontStyle: "normal",
          fontSize: "14px",
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          position: "relative",
          width: "30px",
          height: "30px",
          margin: "5px",
          padding: 0,
          backgroundColor: "transparent",

          /* svg: {
            display: "none",
          }, */

          "& svg path": {
            display: "none",
          },

          "& .MuiSvgIcon-root": {
            width: "16px",
            height: "16px",
            border: "1px solid #D4D4D4",
            boxShadow: "0px 1px 2px 0px #0000000D",
            borderRadius: "4px",
          },

          "&.Mui-checked  .MuiSvgIcon-root": {
            backgroundColor: colors.purple[800],
            borderColor: colors.purple[800],
          },

          "&.error  .MuiSvgIcon-root": {
            borderColor: colors.red[900],
          },

          "&.Mui-checked.error  .MuiSvgIcon-root": {
            backgroundColor: colors.red[900],
          },

          "&.Mui-checked.Mui-disabled  .MuiSvgIcon-root": {
            backgroundColor: colors.grey[800],
            borderColor: colors.grey[800],
          },

          "&:before": {
            position: "absolute",
            top: "11px",
            left: "16px",
            content: '""',
            display: "block",
            width: "1px",
            height: "8px",
            backgroundColor: "white",
            transform: "rotate(45deg)",
          },

          "&:after": {
            position: "absolute",
            top: "14px",
            left: "12px",
            content: '""',
            display: "block",
            width: "1px",
            height: "5px",
            backgroundColor: "white",
            transform: "rotate(135deg)",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "& .MuiFormControlLabel-label": {
            fontSize: "12px",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: "33px",
          height: "18px",
          borderRadius: "25px",
          padding: 0,
          margin: "8px",
        },
        switchBase: {
          backgroundColor: "none",
          padding: 1,
          "&.Mui-checked": {
            transform: "translateX(15px)",
            backgroundColor: colors.purple[800],
            "& + .MuiSwitch-track": {
              opacity: 1,
            },
          },
          "&.Mui-checked.Mui-disabled + .MuiSwitch-track": {
            backgroundColor: "#D4D4D4",
          },
          "&.Mui-disabled.Mui-checked": {
            backgroundColor: "#D4D4D4",
          },
        },
        track: {},
        thumb: {
          width: 16,
          height: 16,
          backgroundColor: "white",
          border: 0,
        },
      },
    },
    MuiToggleButtonGroup: {},
    MuiToggleButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: colors.grey[200],
          color: theme.vars.palette.text.primary,
          fontSize: 14,
          lineHeight: 1.5,
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 3px ${colors.grey[300]}`,
          },
          "&.Mui-disabled": {
            // color: theme.vars.palette.text.disabled,
            opacity: 0.5,
          },
          "&.MuiToggleButton-sizeMedium": {
            minHeight: "36px",
            gap: "8px",
            padding: "7.5px 8px",
          },
          "&.MuiToggleButton-sizeSmall": {
            minHeight: "32px",
            gap: "6px",
            padding: "5.5px 6px",
          },
          "&.MuiToggleButton-sizeLarge": {
            minHeight: "40px",
            gap: "8px",
            padding: "9.5px 12px",
          },
          "&.MuiToggleButton-sizeMini": {
            minHeight: "24px",
            gap: "4px",
            padding: "3px 4px",
            fontSize: 12,
          },
        }),
      },
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          borderBottomColor: colors.grey[200],
          backgroundColor: "transparent",
          "&::before": {
            display: "none",
          },
          "&:last-of-type": {
            borderBottom: "none",
          },
        },
      },
    },
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: React.createElement(AccordionExpandIcon),
      },
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontWeight: 500,
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 3px ${colors.grey[300]}`,
            backgroundColor: "transparent",
          },
        },
        expandIconWrapper: ({ theme }) => ({
          color: theme.vars.palette.text.primary,
        }),
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          width: "36px",
          height: "36px",
          backgroundColor: colors.purple[700],
          borderRadius: "6px",
          color: "white",
          fontSize: "16.25px",
          "&:hover": {
            backgroundColor: colors.purple[700],
          },
          "&:focus": {
            boxShadow: `0px 0px 0px 3px ${colors.grey[400]}`,
          },

          "&:disabled": {
            backgroundColor: colors.purple[200],
            borderColor: colors.purple[200],
            color: "white",
          },

          "& .MuiSvgIcon-root": {
            width: "16.25px",
          },

          "&.MuiIconButton-colorSecondary": {
            backgroundColor: colors.grey[200],
            color: colors.grey.A400,
            "&:focus": {
              boxShadow: `0px 0px 0px 3px ${colors.grey[400]}`,
            },
            "&:disabled": {
              backgroundColor: colors.grey[100],
              border: "none",
              color: colors.grey[800],
            },
          },
          "&.MuiIconButton-outlined": {
            backgroundColor: "transparent",
            border: `1px solid ${colors.grey[200]}`,
            boxShadow: "0px 1px 2px -1px #0000001A",
            color: colors.grey.A400,

            "&:hover": {
              borderColor: colors.grey[400],
              boxShadow: "0px 1px 3px 0px #0000001A",
            },
            "&:focus": {
              boxShadow: "0px 0px 0px 3px #D4D4D4",
            },
            "&:disabled": {
              borderColor: colors.grey[100],
              color: colors.grey[800],
            },
          },
          "&.MuiIconButton-ghost": {
            backgroundColor: "transparent",
            border: "none",
            color: colors.grey.A400,

            "&:hover": {
              backgroundColor: colors.grey[200],
            },
            "&:focus": {
              backgroundColor: "transparent",
              boxShadow: "0px 0px 0px 3px #D4D4D4",
            },
            "&:disabled": {
              color: colors.grey[800],
            },
          },
          "&.MuiIconButton-destructive": {
            backgroundColor: colors.red[900],
            border: "none",
            color: "white",

            "&:hover": {
              backgroundColor: colors.red[900],
            },
            "&:focus": {
              backgroundColor: colors.red[900],
              boxShadow: `0px 0px 0px 3px ${colors.red[800]}`,
            },
            "&:disabled": {
              backgroundColor: "#ee9292",
              borderColor: "#ee9292",
              color: "white",
            },
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          ".MuiTableCell-root": {
            padding: "0px 8px",
            lineHeight: "20px",
            height: "40px",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 8,
          borderColor: colors.grey[100],
        },
      },
    },
    MuiPagination: {
      defaultProps: {
        shape: "rounded",
        variant: "text",
        color: "standard",
      },
    },
    MuiPaginationItem: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          minHeight: 36,
          width: 34,
          padding: "7.5px 4px",
          gap: 8,
          "&.Mui-selected": {
            backgroundColor: "rgba(255, 255, 255, 0.10)",
            border: `1px solid ${colors.grey[200]}`,
            boxShadow:
              "0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)",
          },
          "&:hover": {
            backgroundColor: colors.grey[100],
          },
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 3px ${colors.grey[300]}`,
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiBreadcrumbs: {
      defaultProps: {
        maxItems: 5,
        itemsAfterCollapse: 2,
        separator: React.createElement(BreadcrumbSeparatorIcon),
      },
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 400,
          color: colors.grey[800],
          a: {
            color: "inherit",
            textDecoration: "none",
          },
          p: {
            color: "inherit",
            fontWeight: "inherit",
            fontSize: "inherit",
          },
          button: {
            backgroundColor: "transparent",
            margin: 0,
          },
          ".MuiBreadcrumbs-li:last-of-type": {
            color: colors.purple[300],
            fontWeight: "500",
          },
          ".MuiBreadcrumbs-separator": {
            fontSize: 16,
            svg: {
              fontSize: "inherit",
            },
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          ".MuiStepLabel-iconContainer ": {
            "&.Mui-active": {
              svg: {
                fill: colors.purple[200],
                // strokeWidth: 2,
                stroke: colors.purple[600],
                text: {
                  stroke: "none",
                },
              },
            },
            "&.Mui-disabled": {
              svg: {
                fill: colors.grey[400],
                // strokeWidth: 2,
                stroke: colors.grey[600],
                text: {
                  stroke: "none",
                },
              },
            },
          },
        },
      },
    },
    MuiStepIcon: {
      defaultProps: {
        viewBox: "-1 -1 26 26",
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&.MuiSkeleton-wave::after": {
            backgroundImage: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          ".MuiDialog-paper": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiSnackbar: {
      defaultProps: {
        autoHideDuration: 4000,
        slots: { transition: SnackbarTransition },
        anchorOrigin: { horizontal: "right", vertical: "bottom" },
      },
    },
    MuiSnackbarContent: {
      defaultProps: {
        elevation: 3,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: "#FFF",
          color: theme.vars.palette.text.primary,
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#193CB8",
          fontSize: "14px",
          fontWeight: 500,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
          "&:focus": {
            fontSize: "16px",
            textDecoration: "underline",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.grey[100],
          color: colors.grey.A400,
          fontSize: "14px",

          "&.MuiAvatar-rounded": {
            backgroundColor: colors.grey[100],
            borderRadius: "10px",
            color: colors.grey.A400,
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          "& .MuiBadge-badge": {
            backgroundColor: "white",
            borderRadius: "4px",
            boxShadow: "none",
            textTransform: "none",
            fontSize: "12px",
            fontWeight: 500,
          },
          "& .MuiBadge-badge:hover": {
            boxShadow: "none",
          },
          "& .MuiBadge-contained": {
            backgroundColor: colors.purple[700],
            border: "none",

            "&:hover": {
              backgroundColor: colors.purple[700],
              boxShadow: `0px 0px 0px 3px ${colors.purple[200]}`,
            },
            "&:focus": {
              backgroundColor: colors.purple[700],
              boxShadow: `0px 0px 0px 3px ${colors.grey[400]}`,
            },
            "&:not(.MuiBadge-loading):disabled": {
              backgroundColor: colors.purple[200],
              color: "white",
            },
          },
          "& .MuiBadge-contained.MuiBadge-colorSecondary": {
            backgroundColor: "white",
            border: "none",
            boxShadow: `0px 0px 0px 1px ${colors.purple[700]}`,
            color: colors.grey.A400,
            "&:hover": {
              boxShadow: `0px 0px 0px 2px ${colors.purple[700]}`,
            },
            "&:focus": {
              boxShadow: `0px 0px 0px 3px ${colors.purple[700]}`,
            },
            "&:disabled": {
              backgroundColor: colors.grey[100],
              boxShadow: "none",
              color: colors.grey[800],
            },
          },
          "& .MuiBadge-outlined": {
            backgroundColor: "white",
            border: `1px solid ${colors.grey[200]}`,
            boxShadow: "0px 1px 2px -1px #0000001A",
            color: colors.grey.A400,

            "&:hover": {
              boxShadow: "0px 1px 3px 0px #0000001A",
            },
            "&:focus": {
              boxShadow: "0px 0px 0px 3px #D4D4D4",
            },
            "&:disabled": {
              borderColor: colors.grey[100],
              color: colors.grey[800],
            },
          },
          "& .MuiBadge-ghost": {
            //backgroundColor: colors.purple[700],
            border: "3px solid transparent",

            "&:hover": {
              backgroundColor: colors.grey[200],
            },
            "&:focus": {
              backgroundColor: "transparent",
              boxShadow: `0px 0px 0px 3px ${colors.grey[200]}`,
            },
            "&:disabled": {
              color: colors.grey[800],
            },
          },
          "& .MuiBadge-destructive": {
            backgroundColor: colors.red[900],
            border: "none",
            color: "white",

            "&:hover": {
              backgroundColor: colors.red[900],
            },
            "&:focus": {
              backgroundColor: colors.red[900],
              boxShadow: `0px 0px 0px 3px ${colors.red[800]}`,
            },
            "&:disabled": {
              backgroundColor: "#ee9292",
              color: "white",
            },
          },
        },
      },
    },
    MuiDrawer: {
      defaultProps: {
        anchor: "bottom",
      },
      styleOverrides: {
        paper: {
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
          padding: 8,
        },
      },
    },
    MuiPickersTextField: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },
    MuiPickersInputBase: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },
    MuiInputAdornment: {
      defaultProps: {
        // variant: "outlined",
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiDatePicker: {
      defaultProps: {
        slotProps: {
          openPickerButton: {
            // variant: "ghost"
            className: "MuiIconButton-ghost",
          },
          inputAdornment: {
            // component: DatePickerInputAdornment,
          },
        },
      },
    },
    MuiTimePicker: {
      defaultProps: {
        slotProps: {
          openPickerButton: {
            className: "MuiIconButton-ghost",
          },
        },
      },
    },
    MuiDateTimePicker: {
      defaultProps: {
        slotProps: {
          openPickerButton: {
            className: "MuiIconButton-ghost",
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          height: 6,
          "&.MuiSlider-vertical": {
            height: "100%",
          },
          ".MuiSlider-thumb": {
            backgroundColor: "#FFF",
            outline: "1px solid",
            width: 12,
            height: 12,
          },
          ".MuiSlider-rail": {
            backgroundColor: colors.grey[400],
          },
        },
      },
    },
    // ... all component customizations
  },
});

export const hclTheme = createTheme(getThemeOptions());
