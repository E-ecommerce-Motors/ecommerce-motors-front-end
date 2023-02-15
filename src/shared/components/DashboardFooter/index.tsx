import { ContentFooter } from "./styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { AccountCircle } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const DashboardFooter = () => {
  return (
    <ContentFooter>
      <img src="../../../../public/assets/Motors shop.png" alt="motors-shop" />
      <p>© 2022 - Todos os direitos reservados.</p>
      <Tooltip title="Account settings">
        <IconButton size="small" sx={{ ml: 0 }} aria-haspopup="true">
          <AccountCircle />
        </IconButton>
      </Tooltip>
    </ContentFooter>
  );
};

export default DashboardFooter;
