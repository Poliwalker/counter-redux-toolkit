import React, { useContext } from 'react';
import {
	CounterButtonContainer,
	CounterContainer,
	CounterSpan,
} from './CounterStyles';
import Add from '../add/Add';
import Sustrac from '../sustract/Sustrac';
import Reset from '../reset/Reset';
import { useSelector } from 'react-redux';
import { CounterContext } from '../../context/Context';

const Counter = () => {
	const count = useSelector((state) => state.count);
	const { dark } = useContext(CounterContext);

	return (
		<CounterContainer>
			<CounterButtonContainer>
				<Sustrac />
				<CounterSpan isDark={dark}>{count}</CounterSpan>
				<Add />
			</CounterButtonContainer>
			<Reset />
		</CounterContainer>
	);
};

export default Counter;
