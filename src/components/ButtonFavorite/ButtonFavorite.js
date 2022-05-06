import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { setCharactersToFavorite, removeCharactersFromFavorite } from '../../store/action/characrerAction';

import removeImg from './img/remove.png';
import add from './img/add.png';
import style from './ButtonFavorite.module.css';

const ButtonFavorite = ({character, favorite}) => {
	const {name, img, id} = character;

	const [characterFavorite, setCharacterFavorite] = useState(favorite)
	
	const dispatch = useDispatch();
	const storeData = useSelector(state => state.characrerReducer)



	useEffect(() => {
		storeData[id] ? setCharacterFavorite(true) : setCharacterFavorite(false)
	}, [storeData]);
	
	
	
	
	
	const set = () => {
		if (characterFavorite) {
			dispatch(removeCharactersFromFavorite(id+''))
		} else {
			dispatch(setCharactersToFavorite({
				[id]: {
					name,
					img,
				}
			}))
		}


	}

	return (
		<div onClick={set} className={style.container}>
			<img className={style.img} src={characterFavorite ? removeImg : add} alt="" />
		</div>
	);
}

export default ButtonFavorite;