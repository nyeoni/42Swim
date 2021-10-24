import MoreBtn from "../../atoms/MoreBtn";
import Text from "../../atoms/Text";
import { ProfileProps } from "../Profile";
import dateChange from "../../../utils/dateChange";
import {
  CommentHeaderWrapper,
  CommentTextWrapper,
  CommentWrapper,
} from "./style";

export interface CommentProps {
  id: number;
  user: ProfileProps;
  created_at: string;
  text: string;
}

const Comment = ({ created_at, user, text, id }: CommentProps) => {
  const createAt = dateChange(created_at);
  return (
    <CommentWrapper key={id}>
      <CommentHeaderWrapper>
        <Text weight="bold" size="18">
          {user.nickname}
        </Text>
        <Text size="14" color="lightgray">
          {createAt}
        </Text>
      </CommentHeaderWrapper>
      <CommentTextWrapper>
        <Text size="18" color="lightgray">
          {text}
        </Text>
        <MoreBtn />
      </CommentTextWrapper>
    </CommentWrapper>
  );
};

export default Comment;
