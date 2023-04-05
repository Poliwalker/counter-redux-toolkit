import React, { useContext } from 'react';
import { IconSwitch } from './SwitchThemeStyles';
import { CounterContext } from '../../context/Context';

const SwitchTheme = () => {
	const { dark, setIsDark } = useContext(CounterContext);

	const toggleMode = () => {
		setIsDark(!dark);
	};

	return <IconSwitch onClick={toggleMode} dark={dark} />;
};

export default SwitchTheme;
