import { Link } from 'react-router-dom';

import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';
import style from './ListOfPeople.module.css';

const ListOfPeople = ({person}) => {
	const {id, name, img} = person
	
	return (
		<>
			<li className={style.list__item} key={id}>
				<ButtonFavorite character={{id, name, img}}/>
				<Link to={`/people/${id}`}>
					<div className={style.favorite}>
					</div>
					<p className={style.people__name}>{name}</p>
					<img className={style.person__photo} src={img} alt={name} />
				</Link>
			</li>
		</>
	);
}

export default ListOfPeople;