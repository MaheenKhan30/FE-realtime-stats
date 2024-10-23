import { Button } from "@mui/material";

interface TextButtonPropsInterface {
  text: string;
  icon?: JSX.Element;
}
const TextButton: React.FC<TextButtonPropsInterface> = (props) => {
  const { text, icon } = props;
  return (
    <Button
      sx={{
        color: "#555657",
        fontSize: "large",
        textTransform: "none",
        "&:hover": {
          color: "#7146b3",
        },
      }}
    >
      {icon && icon}
      {text}
    </Button>
  );
};

export default TextButton;
