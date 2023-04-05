import styled, { css } from 'styled-components';
import { RiNumber5 } from 'react-icons/ri';

export const CounterButton = styled.button`
	padding: 10px 30px;
	background: linear-gradient(
		134.59deg,
		rgba(255, 255, 255, 0.05) 7.23%,
		rgba(255, 255, 255, 0.25) 100%
	);
	border: ${(props) =>
		props.isDark ? '2px solid #ffffff' : '2px solid #000000'};
	${(props) =>
		props.last &&
		css`
			border-top-right-radius: 9px;
			border-bottom-right-radius: 9px;
		`}
	cursor: pointer;
	color: ${(props) => (props.isDark ? '#ffffff' : '#000000')};

	&& p {
		color: ${(props) => (props.isDark ? '#ffffff' : '#000000')};
	}
`;

export const IconFive = styled(RiNumber5)`
	color: ${(props) => (props.isDark ? '#ffffff' : '#000000')};
`;
