import { ContentFooter } from "./styles";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const DashboardFooter = () => {
  return (
    <ContentFooter>
      <img src="../../../assets/Motors shop.png" alt="motors-shop" />
      <p>© 2022 - Todos os direitos reservados.</p>

      <IconButton
        sx={{
          backgroundColor: "#212529",
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: "#212529",
          },
        }}
      >
        <KeyboardArrowUpIcon sx={{ color: "#fff" }} />
      </IconButton>
    </ContentFooter>
  );
};

export default DashboardFooter;
