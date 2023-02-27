import InputLabel from "@mui/material/InputLabel";
import { ContentTextAreaInput, CustomTextField } from "./styles";
import { ChangeEvent } from "react";

interface Props {
  labelText: string;
  placeholderText: string;
  maxRowsNumber?: number;
  typeInput?: string;
  inputHeight?: number;
  multilineOption?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldInput: React.FC<Props> = ({
  labelText,
  placeholderText,
  maxRowsNumber,
  typeInput,
  inputHeight,
  multilineOption,
  onChange
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
        InputProps={{sx: {height: inputHeight} }}
        onChange={onChange}
        />
    </ContentTextAreaInput>
  );
};

export default TextFieldInput;
