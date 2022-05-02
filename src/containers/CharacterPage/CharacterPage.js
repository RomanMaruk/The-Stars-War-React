import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import CharacterLinkBack from '../../components/CharacterLinkBack/CharacterLinkBack';

import { withError } from '../../hoc-helper/whithError';
import { API_CHARACTER } from '../../constants/api';
import { getImgCharacters } from '../../services/getPeopleDataServices';
import { getApiResource } from '../../utils/network';
import style from './CharacterPage.module.css';

const CharacterPage = ({setErrorApi}) => {
	const { id } = useParams();
	const [characterName, setCharacterName] = useState('');
	const [characterInfo, setCharacterInfo] = useState();
	const [characterImg, setCharacterImg] = useState('');

	const requestCharacter = async (id) => {
		const res = await getApiResource(API_CHARACTER + id);
		

		if (res) {
			setCharacterName(res.name)
			setCharacterInfo([
				{title: 'Birth Year', data: res.birth_year},
				{title: 'Eye Color', data: res.eye_color},
				{title: 'Gender', data: res.gender},
				{title: 'Hair Color', data: res.hair_color},
				{title: 'Height', data: res.height},
				{title: 'Mass', data: res.mass},
				{title: 'Skin Color', data: res.skin_color},
			]);
			setCharacterImg(getImgCharacters(id))
			// films: (2) ['https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/']
			setErrorApi(false)
		} else {
			setErrorApi(true)
		}
	}
	
	useEffect(() => {
		requestCharacter(id)
	}, []);

	return (
		<>
			<CharacterLinkBack/>
			<div className={style.container} style={{color: '#fff'}}>
				<h2 className={style.name}>{characterName}</h2>
				<div className={style.wrap}>
					<img className={style.character__img} src={characterImg} alt="" />
					{characterInfo && (
						<ul className={style.character__info}>
							{characterInfo.map(({title, data}) => (
								data && (
									<li className={style.character__item} key={title}>
										<span>{title}: {data}</span>
									</li>
								)
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
}

export default withError(CharacterPage);