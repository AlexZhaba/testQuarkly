import React from 'react';
import atomize from "@quarkly/atomize";
import { Link } from '@quarkly/widgets';
const Container = atomize.div({});

const HeaderButton = ({
	href,
	children,
	...props
}) => <Container
	{...props}
	p='13.5px 46px'
	c="#FFF"
	bd="1px solid #FFF"
	lh="25px"
	filter='drop-shadow(0px 4px 31px rgba(0, 0, 0, 0.15))'
	ml="185px"
>
	<Link c="#FFF" td="none" to={href}>
		{children}
	</Link>
</Container>;

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