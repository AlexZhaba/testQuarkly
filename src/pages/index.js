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
		<Components.AdaptiveBox>
			<Box
				justify-content="center"
				align-items="center"
				background="#181818"
				as="aside"
				display="block"
				font="16px Inter"
				height="4000px"
			>
				<Components.Card quarkly-title="Header">
					<Components.HeaderImage>
						<Image width="198px" height="58px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/logo%20dark.svg?v=2020-11-12T17:13:59.894Z" margin="0px 0 0px 0px" />
					</Components.HeaderImage>
					<Components.HeaderList>
						<Components.HeaderLink href="/Home">
							<Text>
								Home
							</Text>
						</Components.HeaderLink>
						<Components.HeaderLink href="/Product">
							<Text>
								Product
							</Text>
						</Components.HeaderLink>
						<Components.HeaderLink href="/About">
							<Text>
								About
							</Text>
						</Components.HeaderLink>
						<Components.HeaderLink href="/Contact">
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
					<Components.Burger />
				</Components.Card>
				<Box width="100%" display="flex" justify-content="center">
					<Components.MainTitle />
				</Box>
				<Box display="flex" justify-content="center" align-items="center">
					<Components.MainSubtitle display="flex" justify-content="center" />
				</Box>
				<Box display="flex" justify-content="center">
					<Components.ColorButton>
						<Text margin="0 0px 0 0px">
							Try for free
						</Text>
					</Components.ColorButton>
					<Components.DefButton />
				</Box>
				<Components.MainBoxImage>
					<Components.ImageWrapper defWidth="1550px" mdWidth="1550px" smWidth="754px">
						<Image
							src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/screens.png?v=2020-11-14T15:59:22.400Z"
							width="100%"
							position="relative"
							margin="0px 0px 0px 50%"
							transform="translateX(-50%)"
							display="block"
						/>
					</Components.ImageWrapper>
				</Components.MainBoxImage>
				<Box />
			</Box>
		</Components.AdaptiveBox>
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