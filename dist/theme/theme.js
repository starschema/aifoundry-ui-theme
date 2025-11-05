"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hclTheme = exports.getThemeOptions = exports.colors = void 0;
var styles_1 = require("@mui/material/styles");
var CustomComponents_1 = require("../components/CustomComponents");
var react_1 = require("react");
exports.colors = {
    purple: {
        50: "#E2D9FB",
        100: "#C5B4F7",
        200: "#A98EF4",
        300: "#8C69F0",
        400: "#8258E8",
        500: "#7647DD",
        600: "#6B35D3",
        700: "#5F1EBE",
        800: "#4c189e",
        900: "#411482",
    },
    blue: {
        50: "#D7ECFD",
        100: "#B4DBFC",
        200: "#8CC8FA",
        300: "#6EB8F9",
        400: "#4B9EF9",
        500: "#3C91FF",
        600: "#3282FA",
        700: "#2874f0",
        800: "#0f5fdc",
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
        800: "#007873",
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
        700: "#0fa069",
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
        800: "#c8870a",
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
        800: "#c3325f",
        900: "#aa1f51",
    },
    bronze: {
        50: "#FAF0E6",
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
var getThemeOptions = function () { return ({
    cssVariables: true,
    palette: {
        primary: {
            main: exports.colors.purple[700],
            light: exports.colors.purple[500],
            dark: exports.colors.purple[900],
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: exports.colors.blue[500],
            light: exports.colors.blue[400],
            dark: exports.colors.blue[800],
            contrastText: "#FFFFFF",
        },
        error: {
            main: exports.colors.coral[600],
            light: exports.colors.coral[400],
            dark: exports.colors.coral[800],
            contrastText: "#FFFFFF",
        },
        warning: {
            main: exports.colors.yellow[500],
            light: exports.colors.yellow[300],
            dark: exports.colors.yellow[800],
            contrastText: exports.colors.grey.A400,
        },
        info: {
            main: exports.colors.blue[600],
            light: exports.colors.blue[300],
            dark: exports.colors.blue[900],
            contrastText: "#FFFFFF",
        },
        success: {
            main: exports.colors.green[600],
            light: exports.colors.green[400],
            dark: exports.colors.green[800],
            contrastText: "#FFFFFF",
        },
        grey: exports.colors.grey,
        text: {
            primary: exports.colors.grey.A400,
            secondary: exports.colors.grey[900],
            disabled: exports.colors.grey[700],
        },
        background: {
            default: exports.colors.grey[50],
            paper: exports.colors.grey[50],
        },
        divider: exports.colors.grey[300],
        action: {
            active: exports.colors.purple[700],
            hover: exports.colors.purple[50],
            selected: exports.colors.purple[100],
            disabled: exports.colors.grey[500],
            disabledBackground: exports.colors.grey[200],
        },
    },
    typography: {
        fontFamily: '"HclTechRoobert", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
            lineHeight: 1.2,
            color: exports.colors.grey.A400,
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 700,
            lineHeight: 1.3,
            color: exports.colors.grey.A400,
        },
        h3: {
            fontSize: "1.75rem",
            fontWeight: 600,
            lineHeight: 1.4,
            color: exports.colors.grey.A400,
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: 600,
            lineHeight: 1.4,
            color: exports.colors.grey.A400,
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: 600,
            lineHeight: 1.5,
            color: exports.colors.grey.A400,
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 600,
            lineHeight: 1.6,
            color: exports.colors.grey.A400,
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
            styleOverrides: "\n        @font-face {\n          font-family: 'HclTechRoobert';\n          font-style: normal;\n          font-weight: 300;\n          font-display: swap;\n          src: url('/assets/fonts/hcltechroobert-light.woff2') format('woff2');\n        }\n        @font-face {\n          font-family: 'HclTechRoobert';\n          font-style: italic;\n          font-weight: 300;\n          font-display: swap;\n          src: url('/assets/fonts/hcltechroobert-lightitalic.woff2') format('woff2');\n        }\n        @font-face {\n          font-family: 'HclTechRoobert';\n          font-style: normal;\n          font-weight: 400;\n          font-display: swap;\n          src: url('/assets/fonts/hcltechroobert-regular.woff2') format('woff2');\n        }\n        @font-face {\n          font-family: 'HclTechRoobert';\n          font-style: italic;\n          font-weight: 400;\n          font-display: swap;\n          src: url('/assets/fonts/hcltechroobert-regularitalic.woff2') format('woff2');\n        }\n        @font-face {\n          font-family: 'HclTechRoobert';\n          font-style: normal;\n          font-weight: 500;\n          font-display: swap;\n          src: url('/assets/fonts/hcltechroobert-medium.woff2') format('woff2');\n        }\n        @font-face {\n          font-family: 'HclTechRoobert';\n          font-style: italic;\n          font-weight: 500;\n          font-display: swap;\n          src: url('/assets/fonts/hcltechroobert-mediumitalic.woff2') format('woff2');\n        }\n        @font-face {\n          font-family: 'HclTechRoobert';\n          font-style: normal;\n          font-weight: 600;\n          font-display: swap;\n          src: url('/assets/fonts/hcltechroobert-semibold.woff2') format('woff2');\n        }\n        @font-face {\n          font-family: 'HclTechRoobert';\n          font-style: normal;\n          font-weight: 700;\n          font-display: swap;\n          src: url('/assets/fonts/hcltechroobert-bold.woff2') format('woff2');\n        }\n        @font-face {\n          font-family: 'HclTechRoobert';\n          font-style: italic;\n          font-weight: 700;\n          font-display: swap;\n          src: url('/assets/fonts/hcltechroobert-bolditalic.woff2') format('woff2');\n        }\n        @font-face {\n          font-family: 'HclTechRoobert';\n          font-style: normal;\n          font-weight: 800;\n          font-display: swap;\n          src: url('/assets/fonts/hcltechroobert-extrabold.woff2') format('woff2');\n        }\n        @font-face {\n          font-family: 'HclTechRoobert';\n          font-style: italic;\n          font-weight: 800;\n          font-display: swap;\n          src: url('/assets/fonts/hcltechroobert-extrabolditalic.woff2') format('woff2');\n        }\n        @font-face {\n          font-family: 'HclTechRoobert';\n          font-style: normal;\n          font-weight: 900;\n          font-display: swap;\n          src: url('/assets/fonts/hcltechroobert-heavy.woff2') format('woff2');\n        }\n        @font-face {\n          font-family: 'HclTechRoobert';\n          font-style: italic;\n          font-weight: 900;\n          font-display: swap;\n          src: url('/assets/fonts/hcltechroobert-heavyitalic.woff2') format('woff2');\n        }\n      ",
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
                        backgroundColor: exports.colors.purple[700],
                        border: "none",
                        "&:hover": {
                            backgroundColor: exports.colors.purple[700],
                            boxShadow: "0px 0px 0px 3px ".concat(exports.colors.purple[200]),
                        },
                        "&:focus": {
                            backgroundColor: exports.colors.purple[700],
                            boxShadow: "0px 0px 0px 3px ".concat(exports.colors.grey[400]),
                        },
                        "&:not(.MuiButton-loading):disabled": {
                            backgroundColor: exports.colors.purple[200],
                            color: "white",
                        },
                    },
                    "&.MuiButton-contained.MuiButton-colorSecondary": {
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "0px 0px 0px 1px ".concat(exports.colors.purple[700]),
                        color: exports.colors.grey.A400,
                        "&:hover": {
                            boxShadow: "0px 0px 0px 2px ".concat(exports.colors.purple[700]),
                        },
                        "&:focus": {
                            boxShadow: "0px 0px 0px 3px ".concat(exports.colors.purple[700]),
                        },
                        "&:disabled": {
                            backgroundColor: exports.colors.grey[100],
                            boxShadow: "none",
                            color: exports.colors.grey[800],
                        },
                    },
                    "&.MuiButton-outlined": {
                        backgroundColor: "transparent",
                        border: "1px solid ".concat(exports.colors.grey[200]),
                        boxShadow: "0px 1px 2px -1px #0000001A",
                        color: exports.colors.grey.A400,
                        "&:hover": {
                            boxShadow: "0px 1px 3px 0px #0000001A",
                        },
                        "&:focus": {
                            boxShadow: "0px 0px 0px 3px #D4D4D4",
                        },
                        "&:disabled": {
                            borderColor: exports.colors.grey[100],
                            color: exports.colors.grey[800],
                        },
                    },
                    "&.MuiButton-ghost": {
                        border: "3px solid transparent",
                        "&:hover": {
                            backgroundColor: exports.colors.grey[200],
                        },
                        "&:focus": {
                            backgroundColor: "transparent",
                            boxShadow: "0px 0px 0px 3px ".concat(exports.colors.grey[200]),
                        },
                        "&:disabled": {
                            color: exports.colors.grey[800],
                        },
                    },
                    "&.MuiButton-destructive": {
                        backgroundColor: exports.colors.red[900],
                        border: "none",
                        color: "white",
                        "&:hover": {
                            backgroundColor: exports.colors.red[900],
                        },
                        "&:focus": {
                            backgroundColor: exports.colors.red[900],
                            boxShadow: "0px 0px 0px 3px ".concat(exports.colors.red[800]),
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
                            background: "linear-gradient(90deg, ".concat(exports.colors.purple[800], " 10%, ").concat(exports.colors.purple[800], " 100%)"),
                            boxShadow: "0px 0px 0px 3px ".concat(exports.colors.grey[200]),
                        },
                        "&:disabled": {
                            background: exports.colors.purple[200],
                            borderColor: exports.colors.purple[200],
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
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
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
                            backgroundColor: exports.colors.purple[200],
                            borderColor: exports.colors.purple[200],
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
                    boxShadow: "0 2px 40px #00000014",
                },
            },
        },
        MuiAlert: {
            defaultProps: {
                iconMapping: {
                    info: react_1.default.createElement(CustomComponents_1.AlertNeutralIcon),
                },
            },
            styleOverrides: {
                root: {
                    display: "flex",
                    background: "white",
                    border: "1px solid ".concat(exports.colors.grey[200]),
                    borderRadius: 6,
                    boxShadow: "none",
                    minHeight: "53px",
                    maxWidth: "400px",
                    width: "100%",
                    "&.MuiAlert-colorError": {
                        borderColor: exports.colors.red[900],
                        color: exports.colors.red[900],
                        "& .MuiSvgIcon-root": {
                            color: exports.colors.red[900],
                        },
                    },
                    "& .MuiAlert-icon": {
                        marginTop: "4px",
                    },
                    "&.MuiAlert-iconFlipped": {
                        flexDirection: "row",
                        "& .MuiAlert-message": {
                            order: 1,
                            marginRight: "auto",
                        },
                        "& .MuiAlert-icon": {
                            order: 2,
                        },
                        "& .MuiAlert-action": {
                            order: 3,
                            marginLeft: 0,
                            paddingLeft: 0,
                        },
                    },
                    "& .MuiSvgIcon-root": {
                        color: exports.colors.grey.A400,
                        fontSize: "16px",
                    },
                    "& .MuiButtonBase-root": {
                        border: "1px solid ".concat(exports.colors.grey[200]),
                        boxShadow: "0px 1px 3px 0px #0000001A",
                        color: exports.colors.grey.A400,
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
                    background: exports.colors.grey[100],
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
                    color: exports.colors.grey.A400,
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
                        boxShadow: "0 1px 2px -1px rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);",
                        color: "inherit",
                    },
                    "&.Mui-focusVisible": {
                        borderColor: exports.colors.grey[200],
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
                    backgroundColor: exports.colors.grey.A400,
                    padding: "6px 8px",
                },
                arrow: {
                    color: exports.colors.grey.A400,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: exports.colors.grey.A400,
                    fontSize: "14px",
                    fontWeight: 500,
                    marginBottom: "5px",
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: exports.colors.grey.A400,
                    fontSize: "14px",
                    fontWeight: 500,
                    marginBottom: "5px",
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    border: "1px solid ".concat(exports.colors.grey[200]),
                    borderRadius: "8px",
                    color: exports.colors.grey.A400,
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
                        borderColor: "transparent",
                        background: "linear-gradient(to right, white, white),linear-gradient(to right, #7ABEF7 14.04% , #572AC2 83.84%)",
                        backgroundClip: "padding-box, border-box",
                        backgroundOrigin: "padding-box, border-box",
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    border: "none",
                    borderRadius: "8px",
                    fontStyle: "normal",
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid ".concat(exports.colors.grey[200]),
                    },
                    "&:hover": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid ".concat(exports.colors.grey[200]),
                        },
                    },
                    "&.Mui-focused": {
                        backgroundColor: "red",
                        border: "none",
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid ".concat(exports.colors.grey[200]),
                        },
                        "& .MuiSelect-icon": {
                            color: exports.colors.grey[200],
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
                    border: "1px solid ".concat(exports.colors.grey[200]),
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
            styleOverrides: {
                root: {
                    "&.Mui-checked": {},
                    "& .MuiSvgIcon-root": {
                        borderRadius: "4px",
                        width: "18px",
                        height: "18px",
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
                    width: "26px",
                    height: "16px",
                    backgroundColor: exports.colors.grey[100],
                    borderRadius: "25px",
                    padding: 0,
                },
                switchBase: {
                    padding: 1,
                    "&.Mui-checked": {
                        transform: "translateX(10px)",
                        backgroundColor: exports.colors.purple[800],
                        "& + .MuiSwitch-track": {
                            opacity: 1,
                        },
                    },
                },
                thumb: {
                    width: 14,
                    height: 14,
                    backgroundColor: "white",
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
                root: function (_a) {
                    var theme = _a.theme;
                    return ({
                        borderColor: exports.colors.grey[200],
                        color: theme.vars.palette.text.primary,
                        fontSize: 14,
                        lineHeight: 1.5,
                        "&.Mui-focusVisible": {
                            boxShadow: "0 0 0 3px ".concat(exports.colors.grey[300]),
                        },
                        "&.Mui-disabled": {
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
                    });
                },
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
                    borderBottomColor: exports.colors.grey[200],
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
                expandIcon: react_1.default.createElement(CustomComponents_1.AccordionExpandIcon),
            },
            styleOverrides: {
                root: function (_a) {
                    var theme = _a.theme;
                    return ({
                        borderRadius: "8px",
                        fontWeight: 500,
                        "&.Mui-focusVisible": {
                            boxShadow: "0 0 0 3px ".concat(exports.colors.grey[300]),
                            backgroundColor: "transparent",
                        },
                    });
                },
                expandIconWrapper: function (_a) {
                    var theme = _a.theme;
                    return ({
                        color: theme.vars.palette.text.primary,
                    });
                },
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
                    backgroundColor: exports.colors.purple[700],
                    borderRadius: "6px",
                    color: "white",
                    fontSize: "16.25px",
                    "&:hover": {
                        backgroundColor: exports.colors.purple[700],
                    },
                    "&:focus": {
                        boxShadow: "0px 0px 0px 3px ".concat(exports.colors.grey[400]),
                    },
                    "&:disabled": {
                        backgroundColor: exports.colors.purple[200],
                        borderColor: exports.colors.purple[200],
                        color: "white",
                    },
                    "& .MuiSvgIcon-root": {
                        width: "16.25px",
                    },
                    "&.MuiIconButton-colorSecondary": {
                        backgroundColor: exports.colors.grey[200],
                        color: exports.colors.grey.A400,
                        "&:focus": {
                            boxShadow: "0px 0px 0px 3px ".concat(exports.colors.grey[400]),
                        },
                        "&:disabled": {
                            backgroundColor: exports.colors.grey[100],
                            border: "none",
                            color: exports.colors.grey[800],
                        },
                    },
                    "&.MuiIconButton-outlined": {
                        backgroundColor: "transparent",
                        border: "1px solid ".concat(exports.colors.grey[200]),
                        boxShadow: "0px 1px 2px -1px #0000001A",
                        color: exports.colors.grey.A400,
                        "&:hover": {
                            borderColor: exports.colors.grey[400],
                            boxShadow: "0px 1px 3px 0px #0000001A",
                        },
                        "&:focus": {
                            boxShadow: "0px 0px 0px 3px #D4D4D4",
                        },
                        "&:disabled": {
                            borderColor: exports.colors.grey[100],
                            color: exports.colors.grey[800],
                        },
                    },
                    "&.MuiIconButton-ghost": {
                        backgroundColor: "transparent",
                        border: "none",
                        color: exports.colors.grey.A400,
                        "&:hover": {
                            backgroundColor: exports.colors.grey[200],
                        },
                        "&:focus": {
                            backgroundColor: "transparent",
                            boxShadow: "0px 0px 0px 3px #D4D4D4",
                        },
                        "&:disabled": {
                            color: exports.colors.grey[800],
                        },
                    },
                    "&.MuiIconButton-destructive": {
                        backgroundColor: exports.colors.red[900],
                        border: "none",
                        color: "white",
                        "&:hover": {
                            backgroundColor: exports.colors.red[900],
                        },
                        "&:focus": {
                            backgroundColor: exports.colors.red[900],
                            boxShadow: "0px 0px 0px 3px ".concat(exports.colors.red[800]),
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
                    borderColor: exports.colors.grey[100],
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
                        border: "1px solid ".concat(exports.colors.grey[200]),
                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)",
                    },
                    "&:hover": {
                        backgroundColor: exports.colors.grey[100],
                    },
                    "&.Mui-focusVisible": {
                        boxShadow: "0 0 0 3px ".concat(exports.colors.grey[300]),
                        backgroundColor: "transparent",
                    },
                },
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
    },
}); };
exports.getThemeOptions = getThemeOptions;
exports.hclTheme = (0, styles_1.createTheme)((0, exports.getThemeOptions)());
//# sourceMappingURL=theme.js.map