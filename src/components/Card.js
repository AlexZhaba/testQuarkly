import React from 'react';
import atomize from '@quarkly/atomize';
const Container = atomize.div({
	effects: {
		hover: ':hover'
	}
});

const Card = ({
	theme,
	children,
	...props
}) => <Container {...props} // sm-m='16px'
// md-m='20px'
// m='24px'
p='24px' style={{
	display: "flex",
	justifyContent: "space-around"
}}>
	    
	{children}
	  
</Container>;

export default atomize(Card)({
	name: "Card",
	description: {
		en: "Card - My cool com"
	},
	propInfo: {
		theme: {
			description: {
				en: "Theme"
			},
			control: "radio-group",
			variants: ['light', 'dark'],
			weight: 1
		}
	}
}, {
	theme: "light"
});