export { hclTheme } from "./theme/theme";
declare module "@mui/material/ToggleButtonGroup" {
  interface ToggleButtonGroupPropsSizeOverrides {
    mini: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    mini: true;
  }

  interface ButtonPropsVariantOverrides {
    ghost: true;
    destructive: true;
    hcl: true;
    ai: true;
  }
}

declare module "@mui/material/Alert" {
  interface AlertPropsVariantOverrides {
    iconFlipped: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsSizeOverrides {
    mini: true;
  }

  interface IconButtonPropsVariantOverrides {
    ghost: true;
    destructive: true;
  }
}

declare module "@mui/material/PaginationItem" {
  interface PaginationItemOwnProps {
    disableFocusRipple?: boolean;
    disableRipple?: boolean;
    disableTouchRipple?: boolean;
  }
}

export declare module "@mui/material/Badge" {
  interface BadgePropsVariantOverrides {
    contained: true;
    outlined: true;
    ghost: true;
    destructive: true;
  }
}
