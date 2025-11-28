import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoneIcon from "@mui/icons-material/Done";
import { ChevronRight } from "@mui/icons-material";
import { Slide, SlideProps } from "@mui/material";
import { PickersTextField, PickersTextFieldProps } from "@mui/x-date-pickers";
import React from "react";

export const AccordionExpandIcon = () => {
  return <ExpandMoreIcon />;
};

export const AlertNeutralIcon = () => {
  return <DoneIcon />;
};

export const BreadcrumbSeparatorIcon = () => {
  return <ChevronRight />;
};

export const SnackbarTransition = (props: SlideProps) => {
  return <Slide {...props} direction="up" />;
};
export const DateDefaultInput = React.forwardRef(
  (props: PickersTextFieldProps, ref: React.Ref<HTMLDivElement>) => (
    <PickersTextField
      {...props}
      ref={ref}
      size="small"
      variant="outlined"
      InputProps={{
        ...props.InputProps,
        sx: { fontSize: 14 },
      }}
    />
  ),
);
