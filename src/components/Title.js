import React from 'react';
import atomize from "@quarkly/atomize";
import AdaptiveText from './AdaptiveText';
const Container = atomize.div({
	effects: {
		hover: ":hover"
	}
});

const Title = ({
	children,
	...props
}) => <Container {...props} mt="60px" d="flex" jc="center">
	    
	{children}
	  
</Container>;

export default atomize(Title)({
	name: "Title",
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Title — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});