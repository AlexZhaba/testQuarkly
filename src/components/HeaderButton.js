import React from 'react';
import atomize from "@quarkly/atomize";
const Container = atomize.div({});

const HeaderButton = ({
	children,
	...props
}) => <Container
	{...props}
	p='13.5px 46px'
	c="#FFF"
	bd="1px solid #FFF"
	lh="25px"
	filter='drop-shadow(0px 4px 31px rgba(0, 0, 0, 0.15))'
>
	{children}
</Container>;

export default atomize(HeaderButton)({
	name: 'HeaderButton',
	description: {
		en: "HeaderButton"
	},
	propInfo: {}
});