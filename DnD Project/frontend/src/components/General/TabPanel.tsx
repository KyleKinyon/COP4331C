import { Box } from "@mui/material";

interface PanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}

export default function TabPanel(props: PanelProps) {
  const { children, value, index, ...other } = props;

  const hidden = {
    visibility: "hidden",
  };
  const shown = {
    height: 1,
  };

  return (
    <Box className="tab-panel" {...other} sx={value === index ? shown : hidden}>
      {value === index && <>{children}</>}
    </Box>
  );
}
