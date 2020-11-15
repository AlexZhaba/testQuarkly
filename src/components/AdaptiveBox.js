import React from 'react';
import Theme from "@quarkly/theme";
import atomize from '@quarkly/atomize';
const Container = atomize.div({});
const theme = {
	breakpoints: {
		// sm: [{ type: "max-width", value: 576 }],
		// md: [{ type: "max-width", value: 768 }],
		hdmd: [{
			type: "max-width",
			value: 1250
		}],
		gmd: [{
			type: "max-width",
			value: 992
		}],
		gsm: [{
			type: "max-width",
			value: 479
		}],
		g1300: [{
			type: "max-width",
			value: 1300
		}]
	}
};

const AdaptiveBox = ({
	children,
	...props
}) => <Container {...props}>
	    
	<Theme theme={theme}>
		      
		{children}
		    
	</Theme>
	    
</Container>;

export default atomize(AdaptiveBox)({
	name: "Adaptive Box",
	description: "AdaptiveBox",
	propInfo: {}
});