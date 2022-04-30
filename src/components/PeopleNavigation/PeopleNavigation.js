import { Link } from 'react-router-dom';

import style from './PeopleNavigation.module.css';

const PeopleNavigation = ({prevPage, nextPage, counterPage}) => {
	
	return (
		<>
			<div className={style.container}>
				<div className={style.wrap__btn}>
					<Link to={`/people/?page=${counterPage - 1}`}>
						<button disabled={!prevPage}>Previous</button>
					</Link>
					<Link to={`/people/?page=${counterPage + 1}`}>
						<button disabled={!nextPage}>Next</button>
					</Link>

				</div>

			</div>
		</>
	);
}

export default PeopleNavigation;