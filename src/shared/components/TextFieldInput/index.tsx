import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { ContentTextAreaInput, CustomTextField } from "./styles";

interface Props {
  labelText: string;
  placeholderText: string;
  maxRowsNumber?: number;
  typeInput?: string;
  inputHeight?: number;
  multilineOption?: boolean;
}

const TextFieldInput: React.FC<Props> = ({
  labelText,
  placeholderText,
  maxRowsNumber,
  typeInput,
  inputHeight,
  multilineOption,
}) => {
  return (
    <ContentTextAreaInput>
      <InputLabel htmlFor="textFieldId">{labelText}</InputLabel>
      <CustomTextField
        id="textFieldId"
        type={typeInput}
        className="textInput"
        placeholder={placeholderText}
        maxRows={maxRowsNumber}
        multiline={multilineOption}
        InputProps={{sx: {height: inputHeight} }}/>
    </ContentTextAreaInput>
  );
};

export default TextFieldInput;
