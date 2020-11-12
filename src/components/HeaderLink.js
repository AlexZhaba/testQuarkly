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
}) => <Container {...props} // p='20px'
c="#FFF" hover-c='red' trs='all .3s ease'>
	<Link to={href} c="#FFF" td="none">
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