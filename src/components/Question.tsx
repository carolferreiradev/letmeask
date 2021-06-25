import { ReactNode } from 'react';
import '../styles/question.scss';

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
    <div className={cn(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlighted && !isAnswered}
    )}>

      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  )
}