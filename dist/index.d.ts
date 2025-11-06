import * as _mui_material_styles from '@mui/material/styles';

declare const hclTheme: _mui_material_styles.Theme;

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

export { hclTheme };
