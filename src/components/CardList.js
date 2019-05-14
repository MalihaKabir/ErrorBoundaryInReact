import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// to see the app, just comment the if statement.
	if (true) {
		throw new Error('NOOOOOOO!');
	}
	// the above if-statement.
	return (
		<div>
			{robots.map((user, index) => {
				return <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email} />;
			})}
		</div>
	);
};

export default CardList;
