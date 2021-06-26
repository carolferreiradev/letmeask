import { ReactNode } from 'react';
import { QuestionDiv, UserInfo } from '../styles/question';

import cn from 'classnames';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode,
  isHighlighted?: boolean,
  isAnswered?: boolean
}

export function Question({
  content,
  author,
  isHighlighted = false,
  isAnswered = false,
  children
}: QuestionProps) {
  return (
    <QuestionDiv className={cn(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlighted && !isAnswered }
    )}>

      <p>{content}</p>
      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>
          {children}
        </div>
      </footer>
    </QuestionDiv>
  )
}