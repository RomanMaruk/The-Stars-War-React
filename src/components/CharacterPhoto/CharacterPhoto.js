import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';

import style from './CharacterPhoto.module.css';

const CharacterPhoto = ({character}) => {
	const {id, name, img, favorite} = character;
	console.log(id, name, img, favorite)
	
	return (
		<div className={style.container}>
			<ButtonFavorite character={{id, name, img, favorite}} />
			<img className={style.character__img} src={img} alt="" />
		</div>
	);
}

export default CharacterPhoto;