import ListOfPeople from '../ListOfPeople/ListOfPeople';

import style from './PeopleList.module.css';
import PropTypes from 'prop-types';

const PeopleList = ({ people }) => {

	return (
		<>
			<ul className={style.list__container}>
				{ people.map((person) => 
					<ListOfPeople key={person.id} person={person} />
				)}
			</ul>
		</>
	);
}

PeopleList.propTypes = {
	people: PropTypes.array
}

export default PeopleList;
