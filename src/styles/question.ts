import styled from 'styled-components';

export const QuestionDiv = styled.div`
  background: ${props => props.theme.colors.primary};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  &+.question {
    margin-top: 8px;
  }

  &.highlighted {
    background: #87a5b6;
    border: 1px solid #87a5b6;

    footer .user-info span {
      color: ${props => props.theme.colors.textlight};
    }
   
  }

  &.answered {
    background: #565656;
  }

  p {
    color: ${props => props.theme.colors.textlight};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    >div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      cursor: pointer;
      background: transparent;
      gap: 8px;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${props => props.theme.colors.textlight};

        &.liked {
          color: ${props => props.theme.colors.textlight};
          
          svg path {
            background:${props => props.theme.colors.secundary} ;
            stroke: ${props => props.theme.colors.textlight};
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`
export const UserInfo = styled.div`
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: ${props => props.theme.colors.textlight};
        font-size: 14px;
      }
`