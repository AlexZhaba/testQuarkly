import React, { useState } from 'react';
import atomize from "@quarkly/atomize";
import { Link } from '@quarkly/widgets';
const Container = atomize.div({});

const HeaderButton = ({
	href,
	children,
	...props
}) => {
	return <Container
		{...props}
		p='13.5px 46px'
		c="#FFF"
		bd="1px solid #FFF"
		lh="25px"
		filter='drop-shadow(0px 4px 31px rgba(0, 0, 0, 0.15))'
		ml="185px"
		hdmd-ml="0px"
		gmd-w="0px"
		gmd-h="0px"
		gmd-p="0px"
		gmd-bd="none"
		ov="hidden"
	>
		<Link c="#FFF" td="none" to={href} onClick={() => setIsPressed(true)}>
			{children}
		</Link>
	</Container>;
};

export default atomize(HeaderButton)({
	name: 'HeaderButton',
	description: {
		en: "HeaderButton"
	},
	propInfo: {
		href: {
			description: "href",
			control: "input"
		}
	}
}, {
	href: "#"
});