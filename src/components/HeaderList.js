import React from 'react';
import atomize from "@quarkly/atomize";
const Container = atomize.div({
	effects: {
		hover: ":hover"
	}
});

const HeaderList = ({
	children,
	...props
}) => <Container {...props} d="flex" jc="center" // p="20px"
>
	  
	{children}
	  
</Container>;

export default atomize(HeaderList)({
	name: "HeaderList",
	description: {
		// past here description for your component
		en: "HeaderList — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});