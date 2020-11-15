import React from 'react';
import atomize from "@quarkly/atomize"; // Import the keyframes

import styled, { keyframes } from "styled-components"; // Create the keyframes

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`; // Here we create a component that will rotate everything we with an interval of 2 seconds

const Container = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
`;
let Con = atomize.div({});

const Rotate = ({
	children,
	...props
}) => <Container {...props}>
	  
	<Con g700-w="95px" g700-h="95px">
		    
		{children}
		 
  
	</Con>
	  
</Container>;

export default atomize(Rotate)({
	name: "Rotate Animation",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here the description for your component
		en: "Rotate Animation Component"
	},
	propInfo: {
		// paste here the props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});