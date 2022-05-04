import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

const Header = () => {
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

			<div>
				<NavLink to="/favorites">Favorites</NavLink>
			</div>
		</div>
	);
}

export default Header;