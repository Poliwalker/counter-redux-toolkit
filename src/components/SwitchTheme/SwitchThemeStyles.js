import styled from 'styled-components';
import { ImSwitch } from 'react-icons/im';

export const IconSwitch = styled(ImSwitch)`
	color: ${(props) => (props.dark ? '#ffffff' : '#000000')};
	font-size: 2rem;
	margin: 0 1rem;
	position: absolute;
	right: 20px;
	top: 20px;
	cursor: pointer;
`;
