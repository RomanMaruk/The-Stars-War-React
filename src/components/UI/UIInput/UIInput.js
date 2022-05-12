import cn from 'classnames';

import img from './cansel.png'
import style from './UIInput.module.css';

const UIInput = ({value, handleInputChange, placeholder, classes}) => {
	return (
		<div className={cn(style.wrap__input, classes)}>
			<input
				type="text"
				value={value}
				onChange={(e) => handleInputChange(e.target.value)}
				placeholder={placeholder}
				className={style.input}
			/>
			<img
				className={cn(style.clear, !value && style.clear__disabled)}
				src={img}
				alt="clear"
				onClick={() => handleInputChange('')}
			/>
		</div>
	);
}

export default UIInput;