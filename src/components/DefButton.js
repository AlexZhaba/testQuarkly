import React from 'react';
import atomize from "@quarkly/atomize";
import { Text } from "@quarkly/widgets";
const Container = atomize.div({
	effects: {
		hover: ":hover"
	}
});

const DefButton = props => <Container
	{...props} // bgc="#4452FE"

	ml="35px"
	color='#FFF'
	p="20px 40px"
	fz="17px"
	fh="25px"
	bxsh="0px 4px 31px rgba(0, 0, 0, 0.15)"
	mt="85px"
	hover-trf="translateY(-5px)"
	trs=".3s all"
	cur="pointer"
	bd="2px solid #FFF"
>
	    
	<Text p="0" m="0">
		Learn more
	</Text>
	  
</Container>;

export default atomize(DefButton)({
	name: "DefButton",
	description: {
		// past here description for your component
		en: "DefButton — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});