import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section, GoogleMap } from "@quarkly/components";
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
				font="52px/62px Inter"
				box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15);"
				margin="0px 0px 0px 0px"
			>
				<Components.Card quarkly-title="Header">
					<Components.HeaderImage>
						<Image width="198px" height="58px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/logo%20dark.svg?v=2020-11-12T17:13:59.894Z" margin="0px 0 0px 0px" />
					</Components.HeaderImage>
					<Components.HeaderList>
						<Components.HeaderLink href="/Home">
							<Text font="16px/62px Inter">
								Home
							</Text>
						</Components.HeaderLink>
						<Components.HeaderLink href="/Product">
							<Text font="16px/62px Inter">
								Product
							</Text>
						</Components.HeaderLink>
						<Components.HeaderLink href="/About">
							<Text font="16px/62px Inter">
								About
							</Text>
						</Components.HeaderLink>
						<Components.HeaderLink href="/Contact">
							<Text font="16px/62px Inter">
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
						<Text margin="0 0px 0 0px" font="17px/24px Inter">
							Try for free
						</Text>
					</Components.ColorButton>
					<Components.DefButton font="17px/24px Inter" />
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
					<Components.AdaptiveText defFontSize="52px" color="#ffffff" g700size="36px">
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
				<Components.BoxPlus
					def_fxDir="row"
					def_JC="center"
					g1300_fxDir="column"
					g1300_AI="center"
					def_AI="flex-start"
				>
					<Components.ImageWrapper defWidth="696px" margin="100px 0px 0px 0px" mdWidth="100%" position="relative">
						<Image width="100%" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/Chat%20Bot.png?v=2020-11-15T10:40:47.206Z" />
						<Components.Rotate position="absolute" bottom="50px" left="50px">
							<Image src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/circle-ribbon.svg?v=2020-11-15T12:44:36.616Z" position="relative" sm-width="100%" sm-height="100%" />
						</Components.Rotate>
					</Components.ImageWrapper>
					<Components.BoxPlus
						margin="100px 0px 0px 0px"
						def_fxDir="column"
						min-width="500px"
						g1300_fxDir="row"
						md_fxDir="column"
						lg-width="100%"
						sm-min-width="0px"
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
				<Section>
					<Components.Title>
						<Components.AdaptiveText>
							<Text color="#ffffff">
								Contents
							</Text>
						</Components.AdaptiveText>
					</Components.Title>
					<Components.SubTitle>
						<Components.AdaptiveText width="574px" text-align="center" margin="-20px 0px 0px 0px">
							<Text color="#ffffff" font="20px/30px Inter">
								We focus on ergonomics and meeting you where you work. It's only a keystroke away.{"\n\n\n\n"}
							</Text>
						</Components.AdaptiveText>
					</Components.SubTitle>
				</Section>
				<Components.BoxPlus justify-content="center" md_fxDir="column">
					<Components.BoxPlus
						def_JC="center"
						def_w="476px"
						height="620px"
						background="#ffffff"
						border-radius="10px"
						align-items="center"
						flex-direction="column"
						justify-content="flex-start"
						margin="30px 15px 0px 15px"
						md-display="none"
						sm-display="flex"
					>
						<Text font="20px/30px Inter" margin="50px 0px 16px 0px">
							<Strong>
								Work
							</Strong>
						</Text>
						<Text font="16px/24px Inter" width="334px" text-align="center">
							Ever wondered if you're too reliant
							<br />
							{" "}on a client for work? Slate helps{" "}
							<br />
							you identify{"\n\n"}
						</Text>
						<Components.ColorButton margin="20px 0px 0px 0px" padding="13.5px 46px 13.5px 46px">
							<Text margin="0px 0px 0px 0px" height="30p" font="16px/24px Inter">
								Sign Up
							</Text>
						</Components.ColorButton>
						<Image width="90%" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/Macbook%20Pro.png?v=2020-11-15T13:58:32.054Z" margin="30px 0px 0px 0px" />
					</Components.BoxPlus>
					<Components.BoxPlus
						def_JC="center"
						def_w="476px"
						height="620px"
						background="#ffffff"
						border-radius="10px"
						align-items="center"
						flex-direction="column"
						justify-content="flex-start"
						margin="30px 15px 0px 15px"
						md-display="none"
						sm-display="flex"
					>
						<Text font="20px/30px Inter" margin="50px 0px 16px 0px">
							<Strong>
								Design with real data{"\n\n"}
							</Strong>
						</Text>
						<Text font="16px/24px Inter" width="334px" text-align="center">
							Ever wondered if you're too reliant
							<br />
							{" "}on a client for work? Slate helps{" "}
							<br />
							you identify{"\n\n"}
						</Text>
						<Components.ColorButton margin="20px 0px 0px 0px" padding="13.5px 46px 13.5px 46px">
							<Text margin="0px 0px 0px 0px" height="30p" font="16px/24px Inter">
								Try for free
							</Text>
						</Components.ColorButton>
						<Image width="90%" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/Boards%20Notifications.png?v=2020-11-15T14:03:55.051Z" margin="30px 0px 0px 0px" />
					</Components.BoxPlus>
				</Components.BoxPlus>
				<Section margin="150px 0 0 0">
					<Components.Title>
						<Components.AdaptiveText>
							<Text color="#ffffff">
								Gallery
							</Text>
						</Components.AdaptiveText>
					</Components.Title>
					<Components.SubTitle>
						<Components.AdaptiveText width="574px" text-align="center" margin="-20px 0px 0px 0px">
							<Text color="#ffffff" font="20px/30px Inter">
								We focus on ergonomics and meeting you where you work. It's only a keystroke away.{"\n\n\n\n"}
							</Text>
						</Components.AdaptiveText>
					</Components.SubTitle>
				</Section>
				<Components.BoxPlus justify-content="center" g1300_fxDir="column" g1300_AI="center" lg-display="none">
					<Components.BoxPlus
						def_w="594px"
						margin="32px 0px 0px 0px"
						g1300_h="700px"
						g1300_w="700px"
						height="594px"
					>
						<Image width="100%" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/gallery-image-1-2x.png?v=2020-11-15T15:14:37.379Z" border-radius="12px" box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)" />
					</Components.BoxPlus>
					<Components.BoxPlus
						def_w="630px"
						margin="16px 0px 0px 15px"
						flex-wrap="wrap"
						align-items="flex-start"
						justify-content="flex-start"
						g1300_w="100%"
					>
						<Components.BoxPlus margin="16px 0px 16px 16px" g1300_w="calc(50% - 32px)" g1300_h="206px">
							<Image src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/Rectangle%201.png?v=2020-11-15T14:57:15.041Z" border-radius="12px" width="100%" />
						</Components.BoxPlus>
						<Components.BoxPlus margin="16px 16px 16px 16px" g1300_w="calc(50% - 32px)" g1300_h="206px">
							<Image width="100%" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/Rectangle%201%20(1).png?v=2020-11-15T15:00:50.512Z" border-radius="12px" />
						</Components.BoxPlus>
						<Components.BoxPlus margin="16px 16px 16px 16px" g1300_w="345px" g1300_h="206px">
							<Image src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/Rectangle%201%20(2).png?v=2020-11-15T15:01:41.701Z" width="100%" border-radius="12px" />
						</Components.BoxPlus>
						<Components.BoxPlus margin="16px 16px 16px 16px" g1300_w="345px" g1300_h="206px">
							<Image src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/Rectangle%201%20(3).png?v=2020-11-15T15:02:40.143Z" width="100%" border-radius="12px" />
						</Components.BoxPlus>
						<Components.BoxPlus margin="16px 16px 16px 16px" g1300_w="calc(50% - 32px)" g1300_h="206px">
							<Image src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/Rectangle%201%20(4).png?v=2020-11-15T15:02:55.661Z" width="100%" border-radius="12px" />
						</Components.BoxPlus>
						<Components.BoxPlus margin="16px 16px 16px 16px" border-radius="12px" g1300_w="calc(50% - 32px)" g1300_h="206px">
							<Image src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/Rectangle%201%20(5).png?v=2020-11-15T15:03:15.957Z" width="100%" border-radius="12px" />
						</Components.BoxPlus>
					</Components.BoxPlus>
				</Components.BoxPlus>
				<Section>
					<Components.Title>
						<Components.AdaptiveText>
							<Text color="#ffffff">
								Partners
							</Text>
						</Components.AdaptiveText>
					</Components.Title>
					<Components.SubTitle>
						<Components.AdaptiveText width="574px" text-align="center" margin="-20px 0px 0px 0px">
							<Text color="#ffffff" font="20px/30px Inter">
								We focus on ergonomics and meeting you where you work. It's only a keystroke away.{"\n\n"}
							</Text>
						</Components.AdaptiveText>
					</Components.SubTitle>
					<Components.BoxPlus justify-content="center" flex-wrap="wrap">
						<Image width="60px" height="60px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/logos_apple-app-store.svg?v=2020-11-15T15:58:22.543Z" margin="40px 37px 0px 37px" />
						<Image width="60px" height="60px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/logos_apiary.svg?v=2020-11-15T15:58:39.080Z" margin="40px 37px 0px 37px" />
						<Image width="60px" height="60px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/logos_android-icon.svg?v=2020-11-15T15:58:59.760Z" margin="40px 37px 0px 37px" />
						<Image width="60px" height="60px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/logos_basecamp.svg?v=2020-11-15T15:59:20.971Z" margin="40px 37px 0px 37px" />
						<Image width="60px" height="60px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/logos_airbnb.svg?v=2020-11-15T15:59:37.943Z" margin="40px 37px 0px 37px" />
						<Image width="60px" height="60px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/logos_ibm.svg?v=2020-11-15T15:59:57.481Z" margin="40px 37px 0px 37px" />
					</Components.BoxPlus>
				</Section>
				<Section>
					<Components.Title>
						<Components.AdaptiveText margin="0px 0px 40px 0px">
							<Text color="#ffffff">
								Testimonials{"\n\n"}
							</Text>
						</Components.AdaptiveText>
					</Components.Title>
					<Components.BoxPlus width="100%" justify-content="center" flex-wrap="wrap">
						<Components.BoxPlus
							width="356px"
							height="176px"
							border-color="#5c5c5c"
							border-width="1px"
							border-style="solid"
							border-radius="10px"
							align-items="flex-start"
							padding="40px 40px 40px 40px"
							flex-direction="column"
							margin="8px 8px 8px 8px"
						>
							<Box display="flex" align-items="center">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/user-pic-Claire-Bell.png?v=2020-11-15T16:48:36.365Z" />
								<Box
									height="40px"
									display="flex"
									width="200px"
									flex-direction="column"
									margin="0px 0px 0px 23px"
								>
									<Text margin="0 0px 0 0px" font="16px/24px Inter" color="#02e4c0">
										Claire Bell{"\n\n"}
									</Text>
									<Text margin="0 0px 0 0px" color="#ffffff" font="16px/24px Inter">
										Designer
									</Text>
								</Box>
							</Box>
							<Text font="16px/24px Inter" color="#ffffff">
								I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!{"\n\n"}
							</Text>
						</Components.BoxPlus>
						<Components.BoxPlus
							width="356px"
							height="176px"
							border-color="#5c5c5c"
							border-width="1px"
							border-style="solid"
							border-radius="10px"
							align-items="flex-start"
							padding="40px 40px 40px 40px"
							flex-direction="column"
							margin="8px 8px 8px 8px"
						>
							<Box display="flex" align-items="center">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/user-pic-Claire-Bell.png?v=2020-11-15T16:48:36.365Z" />
								<Box
									height="40px"
									display="flex"
									width="200px"
									flex-direction="column"
									margin="0px 0px 0px 23px"
								>
									<Text margin="0 0px 0 0px" font="16px/24px Inter" color="#02e4c0">
										Claire Bell{"\n\n"}
									</Text>
									<Text margin="0 0px 0 0px" font="16px/24px Inter" color="#ffffff">
										Designer
									</Text>
								</Box>
							</Box>
							<Text font="16px/24px Inter" color="#ffffff">
								I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!{"\n\n"}
							</Text>
						</Components.BoxPlus>
						<Components.BoxPlus
							width="356px"
							height="176px"
							border-color="#5c5c5c"
							border-width="1px"
							border-style="solid"
							border-radius="10px"
							align-items="flex-start"
							padding="40px 40px 40px 40px"
							flex-direction="column"
							margin="8px 8px 8px 8px"
						>
							<Box display="flex" align-items="center">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/user-pic-Claire-Bell.png?v=2020-11-15T16:48:36.365Z" />
								<Box
									height="40px"
									display="flex"
									width="200px"
									flex-direction="column"
									margin="0px 0px 0px 23px"
								>
									<Text margin="0 0px 0 0px" font="16px/24px Inter" color="#02e4c0">
										Claire Bell{"\n\n"}
									</Text>
									<Text margin="0 0px 0 0px" font="16px/24px Inter" color="#ffffff">
										Designer
									</Text>
								</Box>
							</Box>
							<Text font="16px/24px Inter" color="#ffffff">
								I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!{"\n\n"}
							</Text>
						</Components.BoxPlus>
						<Components.BoxPlus
							width="356px"
							height="176px"
							border-color="#5c5c5c"
							border-width="1px"
							border-style="solid"
							border-radius="10px"
							align-items="flex-start"
							padding="40px 40px 40px 40px"
							flex-direction="column"
							margin="8px 8px 8px 8px"
						>
							<Box display="flex" align-items="center">
								<Image width="50px" height="50px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/user-pic-Claire-Bell.png?v=2020-11-15T16:48:36.365Z" />
								<Box
									height="40px"
									display="flex"
									width="200px"
									flex-direction="column"
									margin="0px 0px 0px 23px"
								>
									<Text margin="0 0px 0 0px" font="16px/24px Inter" color="#02e4c0">
										Claire Bell{"\n\n"}
									</Text>
									<Text margin="0 0px 0 0px" font="16px/24px Inter" color="#ffffff">
										Designer
									</Text>
								</Box>
							</Box>
							<Text font="16px/24px Inter" color="#ffffff">
								I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!{"\n\n"}
							</Text>
						</Components.BoxPlus>
					</Components.BoxPlus>
				</Section>
				<Section justify-content="center" align-items="center" padding="0 0 0 0">
					<Components.BoxPlus width="100%" justify-content="center" margin="180px 0px 0px 0px">
						<Components.BoxPlus
							background="#343434"
							border-radius="33px"
							g1300_fxDir="column"
							def_w="1219px"
							g1300_w="700px"
							overflow-x="hidden"
							overflow-y="hidden"
						>
							<Components.BoxPlus
								def_w="50%"
								align-items="center"
								flex-direction="column"
								g1300_w="100%"
								g1300_h="366px"
							>
								<Components.AdaptiveText mediumFontSize="17px">
									<Text color="#ffffff" text-align="center" width="487px" margin="78px 0px 16px 0px">
										OpenType features and Variable fonts{"\n\n"}
									</Text>
								</Components.AdaptiveText>
								<Components.ColorButton font="17px/24px Inter" padding="13.5px 67px 13.5px 67px" margin="0px 0px 0px 0px">
									<Text font="17px/25px Inter" margin="0 0px 0 0px">
										Try For Free{" "}
									</Text>
								</Components.ColorButton>
							</Components.BoxPlus>
							<Components.BoxPlus def_w="50%" g1300_w="100%">
								<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/Line%20Chart%201%20(1).png?v=2020-11-15T16:12:24.142Z" />
							</Components.BoxPlus>
						</Components.BoxPlus>
					</Components.BoxPlus>
				</Section>
				<GoogleMap margin="180px 0px 0px 0px" />
				<Section margin="50px 0 0 0">
					<Components.BoxPlus justify-content="center" g1300_fxDir="column">
						<Components.BoxPlus margin="0px 0px 90px 0px">
							<Components.BoxPlus>
								<Components.BoxPlus flex-direction="column" margin="0px 120px 0px 0px">
									<Text font="20px/30px Inter" color="#ffffff">
										Product{"\n\n"}
									</Text>
									<Text
										font="16px/24px Inter"
										margin="10px 0px 10px 0px"
										color="#b9b9b9"
										hover-color="#FFF"
										hover-cursor="pointer"
										hover-transition="all .3s ease 0s"
									>
										Overview
									</Text>
									<Text
										margin="10px 0px 10px 0px"
										font="16px/24px Inter"
										color="#b9b9b9"
										hover-color="#FFF"
										cursor="pointer"
										transition="all .3s ease 0s"
									>
										Feautres
									</Text>
									<Text
										font="16px/24px Inter"
										color="#b9b9b9"
										margin="10px 0px 10px 0px"
										hover-color="#FFF"
										transition="all .3s ease 0s"
										cursor="pointer"
									>
										Roadmap
									</Text>
									<Text
										margin="10px 0px 10px 0px"
										font="16px/24px Inter"
										color="#b9b9b9"
										hover-color="#FFF"
										cursor="pointer"
										transition="all .3s ease 0s"
									>
										Pricing
									</Text>
								</Components.BoxPlus>
							</Components.BoxPlus>
							<Components.BoxPlus>
								<Components.BoxPlus flex-direction="column" margin="0px 120px 0px 0px">
									<Text font="20px/30px Inter" color="#ffffff">
										About
									</Text>
									<Text
										font="16px/24px Inter"
										margin="10px 0px 10px 0px"
										color="#b9b9b9"
										hover-color="#FFF"
										hover-cursor="pointer"
										hover-transition="all .3s ease 0s"
									>
										Overview
									</Text>
									<Text
										margin="10px 0px 10px 0px"
										font="16px/24px Inter"
										color="#b9b9b9"
										hover-color="#FFF"
										cursor="pointer"
										transition="all .3s ease 0s"
									>
										Team
									</Text>
									<Text
										font="16px/24px Inter"
										color="#b9b9b9"
										margin="10px 0px 10px 0px"
										hover-color="#FFF"
										transition="all .3s ease 0s"
										cursor="pointer"
									>
										Vacancy Jobs
									</Text>
									<Text
										margin="10px 0px 10px 0px"
										font="16px/24px Inter"
										color="#b9b9b9"
										hover-color="#FFF"
										cursor="pointer"
										transition="all .3s ease 0s"
									>
										Awards
									</Text>
								</Components.BoxPlus>
							</Components.BoxPlus>
							<Components.BoxPlus>
								<Components.BoxPlus flex-direction="column" margin="0px 120px 0px 0px">
									<Text font="20px/30px Inter" color="#ffffff">
										Contact
									</Text>
									<Text
										font="16px/24px Inter"
										margin="10px 0px 10px 0px"
										color="#b9b9b9"
										hover-color="#FFF"
										hover-cursor="pointer"
										hover-transition="all .3s ease 0s"
									>
										Head Office
									</Text>
									<Text
										margin="10px 0px 10px 0px"
										font="16px/24px Inter"
										color="#b9b9b9"
										hover-color="#FFF"
										cursor="pointer"
										transition="all .3s ease 0s"
									>
										Subsidiaries
									</Text>
									<Text
										font="16px/24px Inter"
										color="#b9b9b9"
										margin="10px 0px 10px 0px"
										hover-color="#FFF"
										transition="all .3s ease 0s"
										cursor="pointer"
									>
										Support
									</Text>
									<Text
										margin="10px 0px 10px 0px"
										font="16px/24px Inter"
										color="#b9b9b9"
										hover-color="#FFF"
										cursor="pointer"
										transition="all .3s ease 0s"
									>
										Feekback
									</Text>
								</Components.BoxPlus>
							</Components.BoxPlus>
						</Components.BoxPlus>
						<Components.BoxPlus flex-direction="column" justify-content="center">
							<Components.BoxPlus margin="0px 0px 30px 0px">
								<Image width="30px" height="30px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/icon-bx-map.svg?v=2020-11-15T17:39:58.682Z" />
								<Text
									margin="0px 0px 0px 20px"
									font="16px/16px Inter"
									color="#ffffff"
									text-align="center"
									display="flex"
									align-items="center"
								>
									65806 Briarwood Road San Francisco CA{"\n\n"}
								</Text>
							</Components.BoxPlus>
							<Components.BoxPlus>
								<Image width="30px" height="30px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/icon-baseline-phone-android.svg?v=2020-11-15T17:41:23.943Z" />
								<Text
									margin="0px 0px 0px 20px"
									font="16px/16px Inter"
									color="#ffffff"
									text-align="center"
									display="flex"
									align-items="center"
								>
									417-865-1442{"\n\n"}
								</Text>
							</Components.BoxPlus>
							<Components.BoxPlus margin="30px 0px 0px 0px">
								<Image
									width="30px"
									height="30px"
									src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/icon-twitter-outlined.svg?v=2020-11-15T17:45:47.981Z"
									margin="0px 26px 0px 0px"
									hover-cursor="pointer"
								/>
								<Image
									width="30px"
									height="30px"
									src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/icon-facebook-filled.svg?v=2020-11-15T17:46:55.950Z"
									margin="0px 26px 0px 0px"
									hover-cursor="pointer"
								/>
								<Image width="30px" height="30px" src="https://uploads.quarkly.io/5fad51bc2c4ef2001e323fb0/images/icon-linkedin-filled.svg?v=2020-11-15T17:47:03.839Z" hover-cursor="pointer" />
							</Components.BoxPlus>
						</Components.BoxPlus>
					</Components.BoxPlus>
				</Section>
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