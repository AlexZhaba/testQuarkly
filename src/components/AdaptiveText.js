import React from 'react';
import atomize from "@quarkly/atomize";
const Container = atomize.div({
	effects: {
		hover: ":hover"
	}
});

const AdaptiveText = ({
	children,
	...props
}) => <Container
	{...props}
	fz={props.defFontSize}
	gmd-fz={props.mediumFontSize}
	gsm-fz={props.smallFontSize}
	c={props.color}
	w={props.width}
>
	    
	{children}
	  
  
</Container>;

export default atomize(AdaptiveText)({
	name: "ImageWrapper",
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "ImageWrapper — my awesome component"
	},
	propInfo: {
		defFontSize: {
			description: {
				en: "fontSize"
			},
			control: "input"
		},
		mediumFontSize: {
			description: {
				en: "fontSize"
			},
			control: "input"
		},
		smallFontSize: {
			description: {
				en: "fontSize"
			},
			control: "input"
		},
		color: {
			description: {
				en: "color"
			},
			control: "input"
		}
	}
});