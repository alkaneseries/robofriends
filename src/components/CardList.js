import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return(
		<div>
			{
				robots.map((user, i)=>{
					return (
						<Card 
						key={i} //giving it a unique key. you must always do this when doing a loop in react
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}/>
					);
				})
			}
		</div>
	);
}
export default CardList; 