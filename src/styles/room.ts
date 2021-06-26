import styled from 'styled-components';

export const PageRoom = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid ${props => props.theme.colors.secundary};

    .content {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > svg {
        max-height: 45px;
      }

      >svg path:nth-child(-n + 5){
          fill: ${props => props.theme.colors.text};
        }

      >div {
        display: flex;
        gap: 16px;

        button {
          height: 40px;
        }
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;

    .room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: ${props => props.theme.colors.text};
      }

      span {
        margin-left: 16px;
        background: ${props => props.theme.colors.primary};
        border-radius: 9999px;
        padding: 8px 16px;
        color: #FFF;
        font-weight: 500;
        font-size: 14px;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: ${props => props.theme.colors.secundary};
        color:  ${props => props.theme.colors.text};
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: none;
        min-height: 130px;
      }
      textarea::placeholder{
        color:  ${props => props.theme.colors.text};
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;

        .user-info {
          display: flex;
          align-items: center;

          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }

          span {
            margin-left: 8px;
            color: ${props => props.theme.colors.text};
            font-weight: 500;
            font-size: 14px;
          }
        }

        >span {
          font-size: 14px;
          color:  ${props => props.theme.colors.text};
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: ${props => props.theme.colors.primary};
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    .question-list {
      margin-top: 32px;
    }
  }
`