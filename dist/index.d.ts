import { Theme } from '@mui/material';

// import { PaginationItemProps } from "@mui/material/PaginationItem";

declare const hclTheme: Theme;

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}

declare module "@mui/material/ToggleButtonGroup" {
  interface ToggleButtonGroupPropsSizeOverrides {
    mini: true;
  }
}

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

// declare module "@mui/material/PaginationItem" {
//   interface PaginationItemTypeMap<
//     AdditionalProps = {disableFocusRipple?: boolean;
//     disableRipple?: boolean;
//     disableTouchRipple?: boolean;},
//     RootComponent extends React.ElementType = "div",
//   > {
//     props: AdditionalProps & PaginationItemOwnProps;
//     defaultComponent: RootComponent;
//   }
// }
// declare module "@mui/material/PaginationItem" {
//   type PaginationItemProps = {
//     disableFocusRipple?: boolean;
//     disableRipple?: boolean;
//     disableTouchRipple?: boolean;
//   };
// }

declare module "@mui/material/Badge" {
  interface BadgePropsVariantOverrides {
    contained: true;
    outlined: true;
    ghost: true;
    destructive: true;
  }
}

declare module "@mui/material/Badge" {
  interface BadgePropsVariantOverrides {
    contained: true;
    outlined: true;
    ghost: true;
    destructive: true;
  }
}

export { hclTheme };
