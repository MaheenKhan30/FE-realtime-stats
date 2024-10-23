import { AppBar, Box, Toolbar } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";

import TextButton from "./reusableComponents/TextButton";

const Header: React.FC = () => {
  return (
    <>
      <AppBar component="nav" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              component="img"
              src="/assets/logo.png"
              alt="Logo"
              sx={{ height: 100 }}
            />
            <Box>
              {["Dashboard"].map((item) => (
                <TextButton
                  key={item}
                  text={item}
                  icon={<SpaceDashboardIcon sx={{ mr: 1 }} />}
                />
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
