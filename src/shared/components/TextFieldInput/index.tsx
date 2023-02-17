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
      <InputLabel htmlFor="textAreaId">{labelText}</InputLabel>
      <CustomTextField
        id="textAreaId"
        type={typeInput}
        className="textInput"
        placeholder={placeholderText}
        maxRows={maxRowsNumber}
        multiline={multilineOption}
        InputProps={{sx: {height: inputHeight}}}
      />
    </ContentTextAreaInput>
  );
};

export default TextFieldInput;
