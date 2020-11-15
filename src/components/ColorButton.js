import React from 'react';
import atomize from "@quarkly/atomize";
import { Text } from "@quarkly/widgets";
const Container = atomize.div({
	effects: {
		hover: ":hover"
	}
});

const ColorButton = ({ ...props
}) => <Container
	{...props}
	bgc="#4452FE"
	color='#FFF'
	p="20px 40px"
	fz="17px"
	fh="25px"
	bxsh="0px 4px 31px rgba(0, 0, 0, 0.15)"
	mt="85px"
	hover-bgc="#4578FB"
	hover-trf="translateY(-5px)"
	trs=".3s all"
	cur="pointer"
>
	    
	<Text p="0" m="0">
		Try for free
	</Text>
	  
</Container>;

export default atomize(ColorButton)({
	name: "ColorButton",
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "ColorButton — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});