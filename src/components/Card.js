import React from 'react';
import atomize from '@quarkly/atomize';
const Container = atomize.div({
	effects: {
		hover: ':hover'
	}
});

const Card = props => <Container {...props}>
	    
	<div style={{
		fontSize: 30,
		color: "red"
	}}>
		Hello World!
	</div>
	    
	<div style={{
		width: 1920,
		background: "blue"
	}}>
		        Hello
    
	</div>
	  
</Container>;

export default atomize(Card)({
	name: "Card",
	description: {
		en: "Card - My cool com"
	}
});