import { Box } from "@mui/material";

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        p: 3,
        m: 1,
        borderRadius: 5,
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
