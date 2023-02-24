import { Button } from "@mui/material";
import { ContentButtons, ContentFilter, ContentText } from "./styles";

export const VehiclesFilter = () => {
  return (
    <ContentFilter>
      <ContentText>
        <h2>Velocidade e experiência em um lugar feito para você</h2>
        <span>Um ambiente feito para você explorar o seu melhor</span>
      </ContentText>
      <ContentButtons>
        <Button
          variant="outlined"
          sx={{
            color: "#FDFDFD",
            border: "1px solid #ffff",
            width: 180,
            height: 48,
            "&:hover": {
              border: "1px solid #ffff",
              backgroundColor: "#ffff",
              color: "#000",
            },
          }}
        >
          Carros
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#FDFDFD",
            border: "1px solid #ffff",
            width: 180,
            height: 48,
            "&:hover": {
              border: "1px solid #ffff",
              backgroundColor: "#ffff",
              color: "#000",
            },
          }}
        >
          Motos
        </Button>
      </ContentButtons>
    </ContentFilter>
  );
};
