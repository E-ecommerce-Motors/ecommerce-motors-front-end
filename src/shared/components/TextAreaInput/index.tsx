import Textarea from "@mui/material/TextareaAutosize";
import { ContentTextAreaInput } from "./styles";

const TextAreaInput = () => {
  return (
    <ContentTextAreaInput>
      <Textarea className="textInput" maxRows={4} placeholder="Digite algo..."/>
    </ContentTextAreaInput>
  );
};

export default TextAreaInput;

