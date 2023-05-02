import { ContentFooter } from "./styles";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const Footer = () => {
  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <ContentFooter>
      <img
        src="../../../../src/assets/motors-shop-white.png"
        alt="motors-shop-logo"
      />
      <p>© 2022 - Todos os direitos reservados.</p>

      <IconButton
        sx={{
          backgroundColor: "#212529",
          borderRadius: 1,
          "&:hover": {
            backgroundColor: "#212529",
          },
        }}
        onClick={handleButtonClick}
      >
        <KeyboardArrowUpIcon sx={{ color: "#fff" }} />
      </IconButton>
    </ContentFooter>
  );
};
