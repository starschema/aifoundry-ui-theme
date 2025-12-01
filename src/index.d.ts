import { Theme } from "@mui/material";
import { LocalizationProviderProps } from "@mui/x-date-pickers";

export declare const hclTheme: Theme;

type LocalizationProviderComponent = (<TLocale>(
  props: LocalizationProviderProps<TLocale>,
) => React.JSX.Element) & {
  propTypes?: any;
};
export declare const DefaultLocalizationProvider: LocalizationProviderComponent;

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

declare module "@mui/material/Badge" {
  interface BadgePropsVariantOverrides {
    contained: true;
    outlined: true;
    ghost: true;
    destructive: true;
  }
}

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

declare module "@mui/material/Badge" {
  interface BadgePropsVariantOverrides {
    contained: true;
    outlined: true;
    ghost: true;
    destructive: true;
  }
}
