import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import img from './img/bookmark.svg'
import style from './Header.module.css';

const Header = () => {
	const countFavorite = useSelector(state => Object.entries(state.characrerReducer).length)
	
	return (
		<div className={style.container}>
			<ul className={style.list__container}>
				<li className={style.list__item}>
					<NavLink to="/" >Home</NavLink>
				</li>
				<li className={style.list__item}>
					<NavLink to="/people/?page=1">People</NavLink>
				</li>
				<li className={style.list__item}>
					<NavLink to="/not-found">Not found</NavLink>
				</li>
			</ul>

			<div className={style.favorite__wrap}>
				<NavLink to="/favorites">
					<img className={style.favorite__img} src={img} alt="favorite" />

					{countFavorite > 0 && (
						<span className={style.favorite__count}>{countFavorite}</span>
					)}
					
				</NavLink>
			</div>
		</div>
	);
}

export default Header;