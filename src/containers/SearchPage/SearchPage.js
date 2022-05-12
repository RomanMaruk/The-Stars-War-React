import { useEffect, useState } from 'react';

import { withError } from '../../hoc-helper/whithError';
import UIInput from '../../components/UI/UIInput/UIInput';

import { getApiResource } from '../../utils/network';
import { getPeopleId, getImgCharacters } from '../../services/getPeopleDataServices'
import { API_SEARCH_CHARACTERS } from '../../constants/api';
import style from './SearchPage.module.css';
import SearchPageComponent from '../../components/SergePageComponent/SearchPageComponent';

const SearchPage = ({setErrorApi}) => {
	const [inputValue, setInputValue] = useState('')
	const [characters, setCharacters] = useState([])

	const searchCharecter = async (params) => {
		const res = await getApiResource(API_SEARCH_CHARACTERS + params);
		if (res) {
			const peopleList = res.results.map(({name, url}) => {
				const id = getPeopleId(url)
				const img = getImgCharacters(id)

				return {
					name,
					img,
					id
				}
			});

			setCharacters(peopleList)
			setErrorApi(false)
		} else {
			setErrorApi(true)
		}
	}

	useEffect(() => {
		searchCharecter('')
	}, [])
	
	const handleInput = (value) => {
		setInputValue(value)
		searchCharecter(value)
	}
	
	return (
		<>
			<h1 className={style.text}>Search</h1>
			<UIInput
				value={inputValue}
				handleInputChange={handleInput}
				placeholder='enter name character'
				classes={style.input__search}
			/>
			<div>
				<SearchPageComponent characters={characters}/>
			</div>
		</>
	);
}

export default withError(SearchPage);