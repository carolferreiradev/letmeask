import { ButtonHTMLAttributes } from 'react';

import { ButtonStyled } from '../styles/button';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <ButtonStyled
      className={`button ${isOutlined ? 'outlined' : ''}`}{...props}
    />
  )
}