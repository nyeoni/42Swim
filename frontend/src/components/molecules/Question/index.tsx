import Text from "../../atoms/Text";
import Title from "../../atoms/Title";
import Profile, { ProfileProps } from "../Profile";
import Tag from "../../atoms/Tag";

import {
  QuestionTitleWrapper,
  QuestionWrapper,
  TagWrapper,
  QuestionMain,
} from "./sytle";
import dateChange from "../../../utils/dateChange";

interface tagType {
  name: string;
}

export interface QuestionProps {
  user: ProfileProps;
  title: string;
  created_at: string;
  hashtag?: Array<tagType>;
  text: string;
}

const Question = ({
  user,
  created_at,
  title,
  hashtag,
  text,
}: QuestionProps) => {
  const createAt = dateChange(created_at);
  const tagComponent = hashtag?.map((tag) => (
    <Tag key={tag.name} name={tag.name} />
  ));
  return (
    <QuestionWrapper>
      <QuestionTitleWrapper>
        <Title size="h1">{title}</Title>
        <Text size="14" color="lightgray">
          {createAt}
        </Text>
      </QuestionTitleWrapper>
      <QuestionTitleWrapper>
        <Profile {...user} size="sm" />
        <TagWrapper>{tagComponent}</TagWrapper>
      </QuestionTitleWrapper>
      <QuestionMain size="18" color="black">
        {text}
      </QuestionMain>
    </QuestionWrapper>
  );
};

export default Question;
