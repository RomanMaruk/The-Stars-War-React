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
					<NavLink to="/people" >People</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Header;