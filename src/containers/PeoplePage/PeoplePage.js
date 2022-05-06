import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import PeopleNavigation from '../../components/PeopleNavigation/PeopleNavigation';
import Spinner from '../../components/Spinner/Spinner';
import PeopleList from '../../components/PeopleList/PeopleList';
import { withError } from '../../hoc-helper/whithError';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getImgCharacters } from '../../services/getPeopleDataServices';
import { useQueryUrl } from '../../hooks/useQuireUrl';

const PeoplePage = ({setErrorApi}) => {
	const storeFavorite = useSelector((state) => Object.keys(state.characrerReducer));

	const [people, setPeople] = useState([]);
	const [donlowd, setDowlowd] = useState(true)
	const [prevPage, setPrevPage] = useState(null);
	const [nextPage, setNextPage] = useState(null);
	const [counterPage, setCounterPage] = useState(1)
	
	const query = useQueryUrl();
	const queryPage = query.get('page')

	const getResource = async (url) => {
		setDowlowd(true)
		const res = await getApiResource(url)
		
		if (res) {
			const peopleList = await res.results.map(({name, url}) => {
				const id = getPeopleId(url);
				const img = getImgCharacters(id)

				return {
					name,
					img,
					id,
					favorite: storeFavorite.some(item => item === id+'')
				}
			});

			setDowlowd(false)
			setPeople(peopleList)
			setPrevPage(res.previous)
			setNextPage(res.next)
			setCounterPage(getPeopleId(url))
			setErrorApi(false)
		} else {
			setErrorApi(true)
			setDowlowd(false)
		}
		
	}
	
	useEffect(() => {
		getResource(API_PEOPLE + queryPage)
	}, [queryPage]);

	return (
		<>
			<PeopleNavigation
				prevPage={prevPage}
				nextPage={nextPage}
				getResource={getResource}
				counterPage={counterPage}
			/>
		 	{donlowd ? <Spinner /> : people && <PeopleList people={people}/>}
		</>
	);
}

PeoplePage.propTypes = {
	setErrorApi: PropTypes.func
}

export default withError(PeoplePage);
