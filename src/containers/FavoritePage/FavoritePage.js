import { useSelector } from 'react-redux';

import PeopleList from '../../components/PeopleList/PeopleList'

import style from './FavoritePage.module.css';

const FavoritePage = () => {
	const storeData = useSelector(state => state.characrerReducer);

	return (
		<>
			<PeopleList people={Object.values(storeData)}/>
		</>
	);
}

export default FavoritePage;