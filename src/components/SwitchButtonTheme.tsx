import { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import {ButtonSwitch} from '../styles/auth'

interface Props {
  toggleTheme(): void
}

const SwitchButtonTheme: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  return (
    <ButtonSwitch className="button-switch">
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.30, colors.primary)}
        onColor={colors.secundary}
      />
    </ButtonSwitch>
  )
}
export default SwitchButtonTheme;