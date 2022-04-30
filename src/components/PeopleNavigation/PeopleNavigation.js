import { Link } from 'react-router-dom';

import style from './PeopleNavigation.module.css';

const PeopleNavigation = ({prevPage, nextPage, counterPage}) => {
	
	return (
		<>
			<div className={style.container}>
				<h1 style={{color:'#fff', margin: '0 0 50px 20px'}}>People page</h1>
				<Link to={`/people/?page=${counterPage - 1}`}>
					<button disabled={!prevPage}>Previous</button>
				</Link>
				<Link to={`/people/?page=${counterPage + 1}`}>
					<button disabled={!nextPage}>Next</button>
				</Link>

			</div>
		</>
	);
}

export default PeopleNavigation;