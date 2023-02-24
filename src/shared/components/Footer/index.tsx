import { ContentFooter } from "./styles";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 0);
  };

  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ContentFooter>
      <img
        src="../../../../public/assets/motors-shop-white.png"
        alt="motors-shop-logo"
      />
      <p>© 2022 - Todos os direitos reservados.</p>

      {showButton && (
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
      )}
    </ContentFooter>
  );
};
 
export default Footer;
