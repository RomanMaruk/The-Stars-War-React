import { useState, useEffect } from 'react';

import PeopleList from '../../components/PeopleList/PeopleList';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getImgCharacters } from '../../services/getPeopleDataServices';

const PeoplePage = () => {

	const [peoples, setPeoples] = useState([]);
	const [errorApi, setErrorApi] = useState(false);

	const getResource = async (url) => {
		const res = await getApiResource(url)
		console.log(res)

		if (res) {
			const peopleList = await res.results.map(({name, url}) => {
				const id = getPeopleId(url);
				const img = getImgCharacters(id)

				return {
					name,
					img,
					id
				}
			});

			setPeoples(peopleList)
			setErrorApi(false)
		} else {
			setErrorApi(true)
			console.log('Errror')
		}

	}
	
	useEffect(() => {
		getResource(API_PEOPLE)
	}, []);
	
	return (
		<>
			{errorApi ? <ErrorComponent />
			: (
				<>
					{peoples && <PeopleList peoples={peoples}/>}
				</>
			)}
		</>
	);
}

export default PeoplePage;
