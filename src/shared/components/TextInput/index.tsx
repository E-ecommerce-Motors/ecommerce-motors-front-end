import TextField from "@mui/material/TextField";
// import { ContentTextAreaInput } from "./styles";

interface Props {
  labelText: string;
  placeholderText: string;
}

const TextFieldInput: React.FC<Props> = ({ labelText, placeholderText }) => {
  return (
    <>
      <label htmlFor="textAreaId">{labelText}</label>
      <TextField
        id="textAreaId"
        className="textInput"
        placeholder={placeholderText}
      />
    </>
  );
};

export default TextFieldInput;
