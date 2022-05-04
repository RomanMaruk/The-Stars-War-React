import { useEffect, useState } from 'react';
import { makeRequests } from '../../utils/network'

import style from './CharacterFilms.module.css';

const CharacterFilms = ({characterFilms}) => {
	const [filmsName, setFilmsName] = useState([]);

	useEffect(() => {
		(async () => {
			const filmsRequst = await makeRequests(characterFilms);
			setFilmsName(filmsRequst);
		})();
	}, []);

	return (
		<>
			<div className={style.wrap}>
				<ul className={style.list__container}>
					{filmsName
						.sort((a, b) => a.episode_id - b.episode_id)
						.map(({title, episode_id}) => (
							<li className={style.list__item} key={episode_id}>
								<span className={style.item__episode}>Episode {episode_id}</span>
								<span className={style.item__colon}>:</span>
								<span className={style.item__title}>{title}</span>
							</li>
					))}
				</ul>

			</div>
		</>
	);
}

export default CharacterFilms;