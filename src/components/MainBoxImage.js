import React from 'react';
import atomize from "@quarkly/atomize";
const Container = atomize.div({
	effects: {
		hover: ":hover"
	}
});

const BottonShadow = () => <Container
	pos="absolute"
	top="calc(50% - 50px)"
	left="0px"
	w="100%"
	h="calc(50% + 50px)"
	bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0E0E0E 66.15%);" // bgc="red"

	gmd-top="447px"
	gmd-h="336px"
	gsm-top="127px"
	gsm-h="328px"
>
	  
</Container>;

const MainBoxImage = ({
	children,
	...props
}) => <Container
	{...props}
	mt="35px"
	position="relative"
	h="1000px"
	gmd-h="754px"
	gsm-h="470px"
	overflow="hidden"
>
	    
	<Container pos="absolute" left="50%" trf="translate(-50%)">
		    
		{children}
		    
	</Container>
	    
	<BottonShadow />
	  
</Container>;

export default atomize(MainBoxImage)({
	name: "MainBoxImage",
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "MainBoxImage — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});