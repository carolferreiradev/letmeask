import styled from 'styled-components';

export const RoomCodeButton = styled.button`
height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: ${props => props.theme.colors.textlight};
  border: 1px solid  ${props => props.theme.colors.secundary};
  cursor: pointer;

  display: flex;

  div{
    background:  ${props => props.theme.colors.secundary};
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
  }

  span{
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 230px;
    font-size: 14px;
    font-weight: 500;

    strong{ 
      color: ${props => props.theme.colors.primary};
    }
  }
  `