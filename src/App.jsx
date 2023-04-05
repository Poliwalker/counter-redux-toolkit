import { useContext } from 'react';
import SwitchTheme from './components/SwitchTheme/SwitchTheme';
import Counter from './components/counter/Counter';
import GlobalStyles from './styles/GlobalStyles';
import { CounterContext } from './context/Context';

function App() {
	const { dark } = useContext(CounterContext);

	return (
		<>
			<SwitchTheme />
			<GlobalStyles isDark={dark} />
			<Counter />
		</>
	);
}

export default App;
