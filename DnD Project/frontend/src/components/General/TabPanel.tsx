interface PanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function TabPanel(props: PanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <>{children}</>}
    </div>
  );
}
