import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';

import style from './CharacterPhoto.module.css';

const CharacterPhoto = ({character}) => {
	const {id, name, img} = character;
	
	return (
		<div className={style.container}>
			<ButtonFavorite character={{id, name, img}} />
			<img className={style.character__img} src={img} alt="" />
		</div>
	);
}

export default CharacterPhoto;