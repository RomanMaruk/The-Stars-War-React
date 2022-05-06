import { useSelector } from 'react-redux';

import PeopleList from '../../components/PeopleList/PeopleList';

import style from './FavoritePage.module.css';
import { useEffect, useState } from 'react';

const FavoritePage = () => {
	const [people, setPeople] = useState([])
	const storeData = useSelector(state => state.characrerReducer);

	useEffect(() => {
		const arr = Object.entries(storeData);

		if (arr.length) {
			const res = arr.map(item => {
				return {
					id: item[0],
					...item[1]
				}
			})

			setPeople(res)
		}
	}, [storeData])

	return (
		<>
		<h2 style={{color: '#fff'}}>Favorite list</h2>
			{people.length
				? <PeopleList people={people} />
				: <h2 style={{color: '#fff'}}>No data</h2>
			}
		</>
	);
}

export default FavoritePage;