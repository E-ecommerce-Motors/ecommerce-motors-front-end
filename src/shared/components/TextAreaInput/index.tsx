import Textarea from "@mui/material/TextareaAutosize";
import { ContentTextAreaInput } from "./styles";

interface Props {
  labelText: string;
  placeholderText: string;
}

const TextAreaInput:React.FC<Props> = ({labelText, placeholderText}) => {
  return (
    <ContentTextAreaInput>
      <label htmlFor="textAreaId">{labelText}</label>
      <Textarea id="textAreaId" className="textInput" placeholder={placeholderText} maxRows={4}/>
    </ContentTextAreaInput>
  );
};

export default TextAreaInput;

