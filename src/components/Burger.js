import React, { useState } from 'react';
import atomize from "@quarkly/atomize";
import { Text, Box } from "@quarkly/widgets";
import HeaderButton from './HeaderButton';
const Container = atomize.div({
	effects: {
		hover: ":hover"
	}
});

const BurgerMenu = ({
	isOpen
}) => <Container
	position="fixed"
	bgc="red"
	top="88px"
	left="0px"
	w={isOpen ? "100%" : "0px"}
	h="calc(100vh - 88px)"
	bgc="#181818" // bgc="red"

	d="flex"
	c="#FFF"
	ai="center"
	fxd="column"
	fz="30px"
	ov="hidden"
>
	     
	<Text mt="60px" hover-c="#02E4C0" trs=".3s all" cur="pointer">
		Home
	</Text>
	     
	<Text mt="42px" hover-c="#02E4C0" trs=".3s all" cur="pointer">
		Product
	</Text>
	     
	<Text mt="42px" hover-c="#02E4C0" trs=".3s all" cur="pointer">
		About
	</Text>
	     
	<Text mt="42px" hover-c="#02E4C0" trs=".3s all" cur="pointer">
		Contact
	</Text>
	     
	<Box
		p="20px 40px"
		bd="2px solid #FFF"
		mt="60px"
		cur="pointer"
		hover-transform="translateY(-5px)"
		trs=".3s all"
	>
		      Learn more
     
	</Box>
	  
</Container>;

const styleBurger = {
	d: "flex",
	fxd: "column",
	ai: "flex-end",
	w: "0px",
	h: "0px",
	ov: "hidden"
};

const Burger = ({
	children,
	...props
}) => {
	let [isOpen, setIsOpen] = useState(false);
	return <Container {...props} {...styleBurger} gmd-w="44px" gmd-h="30px">
		    
		<BurgerMenu isOpen={isOpen} />
		    
		<Box onClick={() => setIsOpen(!isOpen)}>
			    
			<Container h="5px" w="44px" bgc="#FFF" mb="5px" />
			    
			<Container h="5px" w="34px" bgc="#FFF" mb="5px" />
			    
			<Container h="5px" w="20px" bgc="#FFF" mb="5px" />
			    
		</Box>
		    
	</Container>;
};

export default atomize(Burger)({
	name: "Burger",
	description: {
		en: "Burger — my awesome component"
	},
	propInfo: {}
});