import React from 'react';
import atomize from "@quarkly/atomize";
const Container = atomize.div({
	effects: {
		hover: ":hover"
	}
});

const ImageWrapper = ({
	children,
	...props
}) => <Container
	{...props}
	w={props.defWidth}
	gmd-w={props.mdWidth}
	gsm-w={props.smWidth}
	fz={props.defFontSize}
	gmd-fz={props.mediumFontSize}
	gsm-fz={props.smallFontSize}
>
	    
	{children}
	  
  
</Container>;

export default atomize(ImageWrapper)({
	name: "ImageWrapper",
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "ImageWrapper — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		defWidth: {
			description: {
				en: "defaultWidth"
			},
			control: "input"
		},
		mdWidth: {
			description: {
				en: "mediumWidth"
			},
			control: "input"
		},
		smWidth: {
			description: {
				en: "smallWidth"
			},
			control: "input"
		},
		magLeft: {
			description: {
				en: "marginLeft"
			},
			control: "input"
		},
		transform: {
			description: {
				en: "transform"
			},
			control: "transform"
		},
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
		}
	}
});