import React from 'react';
import atomize from "@quarkly/atomize";
import TextLoopReact from 'react-text-loop';
import { Text, Box } from '@quarkly/widgets';
const Container = atomize.div({
	effects: {
		hover: ":hover"
	}
});

const TextLoop = ({
	text
}) => <Text fz="80px" c="#02E4C0">
	    
	{text}
	  
</Text>;

const MainTitle = ({ ...props
}) => <Container {...props} w="100%" mt="100px">
	    
	<Text
		c="#FFF"
		fz="80px"
		w="100%"
		d="flex"
		jc="center"
	>
		Work
	</Text>
	    
    
	<Box w="100%" d="flex" jc="center" mt="-10px">
		    
		<TextLoopReact>
			      
			<TextLoop text="fast" />
			      
			<TextLoop text="smart" />
			      
			<TextLoop text="effectively" />
			      
			<TextLoop text="on&nbsp;the&nbsp;team" />
			      
			<TextLoop text="independently" />
			  
    
		</TextLoopReact>
		    
	</Box>
	  
</Container>;

export default atomize(MainTitle)({
	name: "MainTitle",
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});