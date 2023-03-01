
import { ContentTextAreaInput, CustomTextField } from "./styles";
import { ChangeEvent } from "react";

interface Props {
  labelText: string;
  placeholderText: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: any;
}

const TextFieldInput: React.FC<Props> = ({
  labelText,
  placeholderText,
  type,
  onChange,
  value,
}) => {
  return (
    <ContentTextAreaInput>
      <label htmlFor="textFieldId">{labelText}</label>
      <input
        id="textFieldId"
        type={type}
        className="textInput"
        placeholder={placeholderText}
        onChange={onChange}
        value={value}
        />
    </ContentTextAreaInput>
  );
};

export default TextFieldInput;
