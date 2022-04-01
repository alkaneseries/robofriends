import React from 'react';

const Scroll = (props) => {
	return ( //You can create a scroll.css to style it or do inline styling here by adding a double curly brackets
		<div style={{overflowY: 'scroll', border:'5px solid black', 'height' :'800px'}}>
			{props.children}
		</div>
	);
};


export default Scroll;