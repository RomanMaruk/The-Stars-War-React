import styles from './PeopleList.module.css';

const PeopleList = ({ peoples }) => {
	return (
		<>
			<ul className={styles.list__container}>
				{ peoples.map(({name, img, id}) => 
					<li className={styles.list__item} key={id}>
						<p className={styles.people__name}>{name}</p>
						<img className={styles.person__photo} src={img} alt={name} />
					</li>)
				}
			</ul>
		</>
	);
}

export default PeopleList;