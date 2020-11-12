import React from 'react';
import atomize from '@quarkly/atomize';
const Container = atomize.div({// effects: {
	//   hover: ':hover'
	// }
});

const Header = ({
	theme,
	children,
	...props
}) => <Container
	{...props} // sm-m='16px'
	// md-m='20px'
	// m='24px'

	p='24px'
	d="flex"
	jc="center"
	ai="center"
	ff="Inter" // style={{display: "flex", justifyContent: "center"}}

>
	    
	{children}
	  
</Container>;

export default atomize(Header)({
	name: "Header",
	description: {
		en: "Header - My cool com"
	},
	propInfo: {// theme: {
		//   description: {
		//     en: "Theme"
		//   },
		//   control: "radio-group",
		//   variants: [
		//     'light', 'dark'
		//   ],
		//   weight: 1
		// }
	}
} // {theme: "light"}
);