import React from 'react';
import atomize from "@quarkly/atomize";
const Container = atomize.div({
	effects: {
		hover: ":hover"
	}
});

const MainSubtitle = props => <Container
	{...props}
	c="#FFF"
	w="593px"
	fz="20px"
	d="flex"
	jc="center"
	lh="30px"
	mt="20px"
	ta="center"
>
	    Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
  
</Container>;

export default atomize(MainSubtitle)({
	name: "MainSubtitle",
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "MainSubtitle — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});