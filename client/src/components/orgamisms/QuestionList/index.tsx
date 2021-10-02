import * as S from './style'
import ListItem, { Props as ListProps } from '../../molecules/ListItem'
import Pagination from '../../molecules/Pagination'
import { ColumnSADiv } from '../../atoms/Div'

export interface Props {
  data: ListProps[]
}

const QuestionList = ({ data, ...props }: Props) => {
  return (
    <S.List>
      {data.map((d, idx) => (
        <ListItem
          title={d.title}
          desc={d.desc}
          check={d.check}
          answer_cnt={d.answer_cnt}
          like_cnt={d.like_cnt}
          view_cnt={d.view_cnt}
          tag={d.tag}
          create_time={d.create_time}
          key={idx}
          {...props}
        />
      ))}
      <ColumnSADiv height="110px">
        <Pagination
          onFront={() => console.log('front')}
          onBack={() => console.log('back')}
          page={1}
        />
      </ColumnSADiv>
    </S.List>
  )
}

export default QuestionList
