// import arrow-left form ''
import { useNavigate } from 'react-router';

import iconBack from './arrow-left.svg'
import style from './CharacterLinkBack.module.css';

const CharacterLinkBack = () => {
	const navigate = useNavigate()
	
	const handleGoBack = (e) => {
		e.preventDefault()
		navigate(-1)
	}
	
	return (
		<>
			<a className={style.href} href="#" onClick={handleGoBack}>
				<img className={style.href__svg} src={iconBack} alt="" />
				<span className={style.href__text}>Go back</span>
			</a>
		</>
	);
}

export default CharacterLinkBack;