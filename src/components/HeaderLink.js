import React from "react";
import { Link } from "@quarkly/widgets";
import atomize from "@quarkly/atomize";
const Container = atomize.div({
	effects: {
		hover: ':hover'
	}
});

const HeaderLink = ({
	children,
	href,
	...props
}) => <Container {...props} p='10px' c="#FFF" m="0 30px">
	<Link
		to={href}
		c="#FFF"
		td="none"
		hover-c='#02E4C0'
		trs='all .3s ease'
	>
		{children}
	</Link>
</Container>;

export default atomize(HeaderLink)({
	name: "HeaderLink",
	description: {
		en: "Header - My cool com"
	},
	propInfo: {
		href: {
			description: {
				en: "href"
			},
			control: "input"
		}
	}
}, {
	href: "##"
});