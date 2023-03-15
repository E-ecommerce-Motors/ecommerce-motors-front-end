import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../providers/UserProvider";
import {
  Container,
  Icon,
  Name,
  User,
  Options,
  Text,
  PreMade,
  Content,
  TextArea,
} from "../CommentCreate/styles";
import * as yup from "yup";
import { ButtonBig } from "../Button/styles";
import { theme } from "../../../styles/theme";
import { updateAuth } from "../../providers/authProvider";

interface EditComment {
  text: string;
  userId: number;
  commentId: number;
  AnnouncementId: number;
}

export const CommentEdit = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [annData, setAnnData] = useState<any>({} as any);
  const { getAnn, announcements, comments, getComments } = updateAuth();
  const token = localStorage.getItem("@MotorsShop:token");

  const { userData } = useContext(UserContext);

  userData.id = 1;

  const schema = yup.object().shape({
    text: yup.string(),
  });

  const getThem = async () => {
    useEffect(() => {
      setAnnData(announcements);
    }, []);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Comment>({
    resolver: yupResolver(schema),
  });

  const submit = (data: EditComment) => {
    data.userId = userData.id;
    data.text = annData.text;
    data.announcementId = annData.id;
    data.commentId = annData.editComment(data, id, commentId);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setCommentText("This is a comment.");
    setIsEditing(false);
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentText(event.target.value);
  };

  if (isEditing) {
    return (
      <div>
        <TextArea>
          <Text
            value={commentText}
            placeholder={"Digite seu novo comentário..."}
            {...register("text")}
            onChange={handleTextareaChange}
          />
        </TextArea>
        <button onClick={handleSaveClick}>Save</button>
        <ButtonBig
          bg={theme.colors.brand1}
          button={theme.button.medium}
          color={theme.colors.whiteFixed}
          size={theme.size.button_medium_text}
          weight={theme.weight.button_medium_text}
          border={theme.colors.brand1}
          bgHover={theme.colors.brand2}
          borderHover={theme.colors.brand2}
          colorHover={theme.colors.whiteFixed}
          // style={{ position: "absolute", marginTop: "100px" }}
          type="submit"
          disabled={token ? false : true}
          onClick={handleSaveClick}
        >
          Salvar alterações
        </ButtonBig>
        <ButtonBig
          bg={theme.colors.brand1}
          button={theme.button.big}
          color={theme.colors.whiteFixed}
          size={theme.size.button_big_text}
          weight={theme.weight.button_big_text}
          border={theme.colors.brand1}
          bgHover={theme.colors.brand2}
          borderHover={theme.colors.brand2}
          colorHover={theme.colors.whiteFixed}
          disable="sim"
          type="button"
          onClick={handleCancelClick}
        >
          Cancelar
        </ButtonBig>
      </div>
    );
  } else {
    return (
      <div>
        <p>{commentText}</p>
        <button onClick={handleEditClick}>Edit</button>
      </div>
    );
  }
};
