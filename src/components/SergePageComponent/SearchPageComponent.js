import { Link } from 'react-router-dom';

import style from './SearchPageComponent.module.css';

const SearchPageComponent = ({characters}) => {
	return (
		<>
				{ characters.length
					? (
						<ul className={style.container}>
							{characters.map(({name, img, id}) => {
								return (
									<li key={id} className={style.list}>
										<Link style={{textDecoration: 'none'}} to={`/people/${id}`}>
											<img className={style.list__img} src={img} alt={name} />
											<h4 className={style.link__name}>{name}</h4>
										</Link>
									</li>
								)
							})}
						</ul>
					)
					: (<h2>No data</h2>)
				}
		</>
	);
}

export default SearchPageComponent;