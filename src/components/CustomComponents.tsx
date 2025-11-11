import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoneIcon from "@mui/icons-material/Done";
import { ChevronRight } from "@mui/icons-material";
import { Slide, SlideProps } from "@mui/material";

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
