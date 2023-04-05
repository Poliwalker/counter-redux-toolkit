import React, { useContext } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { multiply, increment, increment_5 } from '../../features/counterSlice';
import { CounterButton, IconFive } from './AddStyles';
import { RiNumber5 } from 'react-icons/ri';
import { FaRegTimesCircle } from 'react-icons/fa';
import { CounterContext } from '../../context/Context';

const Add = () => {
	const dispatch = useDispatch();
	const { dark } = useContext(CounterContext);

	return (
		<>
			<CounterButton isDark={dark} onClick={() => dispatch(increment())}>
				<AiOutlinePlusCircle size="32px" />
			</CounterButton>
			<CounterButton onClick={() => dispatch(increment_5())} isDark={dark}>
				<p>
					+<IconFive size="32px" isDark={dark} />
				</p>
			</CounterButton>
			<CounterButton onClick={() => dispatch(multiply())} isDark={dark}>
				<FaRegTimesCircle size="32px" />
			</CounterButton>
		</>
	);
};

export default Add;
