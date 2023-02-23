import { ContentFooter } from "./styles";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const DashboardFooter = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ContentFooter>
      <img src="../../../../public/assets/motors-shop-white.png" alt="motors-shop-logo" />
      <p>© 2022 - Todos os direitos reservados.</p>

      <IconButton
        sx={{
          backgroundColor: "#212529",
          borderRadius: 1,
          "&:hover": {
            backgroundColor: "#212529",
          },
        }}
        onClick={() => handleClick}
      >
        <KeyboardArrowUpIcon sx={{ color: "#fff" }} />
      </IconButton>
    </ContentFooter>
  );
};

export default DashboardFooter;
