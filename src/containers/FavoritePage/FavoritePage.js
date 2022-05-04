import { useState } from 'react';
import { useSelector } from 'react-redux';

import PeopleList from '../../components/PeopleList/PeopleList'

import style from './FavoritePage.module.css';

const FavoritePage = () => {
	const [favoritePeople, setFavoritePeople] = useState()
	const storeData = useSelector(state => state.characrerReducer)

	console.log(Object.keys(storeData))
	
	return (
		<>
			<PeopleList people={Object.values(storeData)}/>
		</>
	);
}

export default FavoritePage;