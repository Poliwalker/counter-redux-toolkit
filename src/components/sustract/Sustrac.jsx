import React, { useContext } from 'react';
import { CounterButton } from './SustracStyles';
import { FiDivideCircle } from 'react-icons/fi';
import { RiNumber5 } from 'react-icons/ri';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { decrement, decrement_5, divide } from '../../features/counterSlice';
import { useDispatch } from 'react-redux';
import { CounterContext } from '../../context/Context';

const Sustrac = () => {
	const dispatch = useDispatch();
	const { dark } = useContext(CounterContext);
	return (
		<>
			<CounterButton last onClick={() => dispatch(divide())} isDark={dark}>
				<FiDivideCircle size="32px" />
			</CounterButton>
			<CounterButton onClick={() => dispatch(decrement_5())} isDark={dark}>
				<p>
					-<RiNumber5 size="32px" isDark={dark} />
				</p>
			</CounterButton>
			<CounterButton onClick={() => dispatch(decrement())} isDark={dark}>
				<AiOutlineMinusCircle size="32px" />
			</CounterButton>
		</>
	);
};

export default Sustrac;
