import { useLocation } from 'react-router';

import style from './NotFounded.module.css';

const NotFounded = () => {
	let path = useLocation()

	return (
		<>
			<div className={style.container}>
				<div className={style.img}>
					<p className={style.text}>No match whith - <span>{path.pathname.slice(1)}</span></p>
				</div>
			</div>
		</>
	);
}

export default NotFounded;