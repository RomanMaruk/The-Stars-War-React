import { Link } from 'react-router-dom';

import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';
import style from './ListOfPeople.module.css';

const ListOfPeople = ({person}) => {
	const {id, name, img, favorite} = person;

	const list = () => {
		console.log('list')
	}

	return (
		<>
			<li className={style.list__item} key={id}>
				<ButtonFavorite key={id} character={{id, name, img, favorite}}/>
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