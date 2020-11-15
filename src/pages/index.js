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
				<Components.Title>
					<Components.AdaptiveText defFontSize="52px" color="#ffffff">
						<Text margin="0 0px 0 0px">
							Features{"\n\n"}
						</Text>
					</Components.AdaptiveText>
				</Components.Title>
				<Components.SubTitle>
					<Components.AdaptiveText defFontSize="20px" color="#ffffff" width="574px" display="flex">
						<Text margin="0 0px 0 0px" font="20px/30px Inter" text-align="center">
							Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule{"\n\n"}
							<br />
							{"\n\n"}
						</Text>
					</Components.AdaptiveText>
				</Components.SubTitle>
				<Components.BoxPlus def_fxDir="row" def_JC="center" g1300_fxDir="column" g1300_AI="center">
					<Components.ImageWrapper defWidth="696px" margin="100px 0px 0px 0px" mdWidth="100%" position="relative">
						<Image width="100%" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/Chat%20Bot.png?v=2020-11-15T10:40:47.206Z" />
						<Components.Rotate position="absolute" left="50px" top="400px">
							<Image width="190px" height="190px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/circle-ribbon.svg?v=2020-11-15T12:44:36.616Z" position="relative" />
						</Components.Rotate>
					</Components.ImageWrapper>
					<Components.BoxPlus
						margin="100px 0px 0px 0px"
						def_fxDir="column"
						min-width="500px"
						g1300_fxDir="row"
						md_fxDir="column"
					>
						<Box width="300Px" margin="0px 0px 50px 50px" height="200px">
							<Image width="30px" height="30px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/icon-round-restaurant-menu.svg?v=2020-11-15T11:17:13.428Z" />
							<Text color="#ffffff" margin="20px 0px 0 0px" font="20px/30px Inter" width="150px">
								A single source of truth{"\n\n"}
							</Text>
							<Text color="#ffffff" margin="20px 0px 16px 0px" font="16px/24px Inter" height="96px">
								When you add work to your Slate calendar we automatically calculate useful insights{"\n\n"}
							</Text>
						</Box>
						<Box width="300Px" height="200px" margin="0px 0px 50px 50px">
							<Image width="30px" height="30px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/icon-alien-outline.svg?v=2020-11-15T11:16:01.214Z" />
							<Text color="#ffffff" margin="20px 0px 0 0px" font="20px/30px Inter" width="170px">
								Intuitive interface
								<br />
								{"\n\n"}
							</Text>
							<Text color="#ffffff" margin="20px 0px -50px 0px" font="16px/24px Inter" height="96px">
								When you add work to your Slate calendar we automatically calculate useful insights{"\n\n"}
							</Text>
						</Box>
						<Box width="300Px" height="200px" margin="0px 0px 50px 50px">
							<Image width="30px" height="30px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/icon-all-inclusive.svg?v=2020-11-15T11:09:58.309Z" />
							<Text color="#ffffff" margin="20px 0px 0 0px" font="20px/30px Inter" width="150px">
								Or with rules{"\n\n"}
							</Text>
							<Text color="#ffffff" margin="20px 0px 16px 0px" font="16px/24px Inter" height="96px">
								When you add work to your Slate calendar we automatically calculate useful insights{"\n\n"}
							</Text>
						</Box>
					</Components.BoxPlus>
				</Components.BoxPlus>
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