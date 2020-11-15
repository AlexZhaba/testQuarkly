import React from 'react';
import atomize from "@quarkly/atomize";
const Container = atomize.div({
	effects: {
		hover: ":hover"
	}
});

const BoxPlus = ({
	children,
	...props
}) => <Container
	{...props}
	d="flex"
	fxd={props.def_fxDir}
	jc={props.def_JC}
	ai={props.def_AI}
	g1300-fxd={props.g1300_fxDir}
	g1300-jc={props.g1300_JC}
	g1300-ai={props.g1300_AI}
	gmd-fxd={props.md_fxDir}
	gmd-jc={props.md_JC}
	gmd-ai={props.md_AI}
	g700-fxd={props.g700_fxDir}
	g700-jc={props.g700_JC}
	g700-ai={props.g700}
	gsm-fxd={props.sm_fxDir}
	gsm-jc={props.sm_JC}
	gsm-ai={props.sm_AI}
	w={props.def_w}
	gmd-w={props.md_w}
	g1300-w={props.g1300_w}
	g700-w={props.g700_w}
	gsm-w={props.sm_w}
	g1300-h={props.g1300_h}
>
	    
	{children}
	      
  
</Container>;

export default atomize(BoxPlus)({
	name: "BoxPlus",
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "BoxPlus — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		def_fxDir: {
			control: "input"
		},
		def_AI: {
			control: "input"
		},
		def_JC: {
			control: "input"
		},
		md_fxDir: {
			control: "input"
		},
		md_AI: {
			control: "input"
		},
		md_JC: {
			control: "input"
		},
		sm_fxDir: {
			control: "input"
		},
		sm_AI: {
			control: "input"
		},
		sm_JC: {
			control: "input"
		},
		g1300_fxDir: {
			control: "input"
		},
		g1300_AI: {
			control: "input"
		},
		g1300_JC: {
			control: "input"
		},
		g700_fxDir: {
			control: "input"
		},
		g700_AI: {
			control: "input"
		},
		g700_JC: {
			control: "input"
		},
		def_w: {
			control: "input"
		},
		md_w: {
			control: "input"
		},
		sm_w: {
			control: "input"
		},
		g700_w: {
			control: "input"
		},
		g1300_w: {
			control: "input"
		},
		g1300_h: {
			control: "input"
		}
	}
});