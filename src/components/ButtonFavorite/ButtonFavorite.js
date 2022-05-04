import removeImg from './img/remove.png';
import add from './img/add.png';
import style from './ButtonFavorite.module.css';
import { setCharactersToFavorite, removeCharactersFromFavorite } from '../../store/action/characrerAction';
import { useDispatch } from 'react-redux';

const ButtonFavorite = ({character}) => {
	const dispatch = useDispatch()

	const set = () => {
		dispatch(setCharactersToFavorite({
			[character.id]: {
				name: character.name,
				img: character.img,
				id: character.id
			}
		}))
	}

	return (
		<div onClick={set} className={style.container}>
			<img className={style.img} src={add} alt="" />
		</div>
	);
}

export default ButtonFavorite;