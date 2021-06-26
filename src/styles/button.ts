import styled from 'styled-components';

export const ButtonStyled = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textlight};
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;
  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }
  &.outlined{
    background:${props => props.theme.colors.textlight};
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
  &:disabled{
    cursor: not-allowed;
    opacity: 0.6;
  }
`