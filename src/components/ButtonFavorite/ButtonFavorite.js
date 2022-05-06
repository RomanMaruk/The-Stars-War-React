import removeImg from './img/remove.png';
import add from './img/add.png';
import style from './ButtonFavorite.module.css';
import { setCharactersToFavorite, removeCharactersFromFavorite } from '../../store/action/characrerAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const ButtonFavorite = ({character}) => {
	const {name, img, id, favorite} = character
	const dispatch = useDispatch();
	const selectorImgBul = useSelector(state => Object.keys(state.characrerReducer))
	const changeImg = selectorImgBul.some(item => +item === id) ? removeImg : add

	console.log(selectorImgBul)
	console.log(character.id)
	
	
	const set = () => {
		if (character.favorite) {
			dispatch(removeCharactersFromFavorite(id+''))
		} else {
		dispatch(setCharactersToFavorite({
			[id]: {
				name,
				img,
				id,
				favorite: true
			}
		}))
		}


	}

	return (
		<div onClick={set} className={style.container}>
			<img className={style.img} src={changeImg} alt="" />
		</div>
	);
}

export default ButtonFavorite;