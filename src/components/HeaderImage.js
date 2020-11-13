import React from 'react';
import atomize from "@quarkly/atomize";
const Container = atomize.div({
	effects: {
		hover: ":hover"
	}
});

const HeaderImage = ({
	children,
	...props
}) => <Container {...props} mr="144px" hdmd-mr="0px" w="auto">
	  
	{children}
	  
</Container>;

export default atomize(HeaderImage)({
	name: "HeaderImage",
	description: {
		en: "HeaderImage — my awesome component"
	},
	propInfo: {// yourCustomProps: {
		//   control: "input"
		// }
	}
});