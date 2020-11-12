import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box min-height="1080px" justify-content="center" align-items="center" background="#181818">
			<Components.Card quarkly-title="Header">
				<Image width="198px" height="58px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/logo%20dark.svg?v=2020-11-12T17:13:59.894Z" />
				<Components.HeaderList>
					<Components.HeaderLink href="#">
						<Text>
							Contact
						</Text>
					</Components.HeaderLink>
				</Components.HeaderList>
				<Components.HeaderButton font="16px ">
					<Text font="17px/25px Inter" margin="0 0px 0 0px">
						Login
					</Text>
				</Components.HeaderButton>
			</Components.Card>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});