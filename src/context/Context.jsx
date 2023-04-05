import { createContext, useState } from 'react';

export const CounterContext = createContext();

export const ModeProvider = ({ children }) => {
	const [dark, setIsDark] = useState(false);

	return (
		<CounterContext.Provider value={{ dark, setIsDark }}>
			{children}
		</CounterContext.Provider>
	);
};
