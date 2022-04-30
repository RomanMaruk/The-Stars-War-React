import spinner from './spinner.svg'
import style from './Spinner.module.css';

const Spinner = () => {
	return (
		<>
			<div className={style.container}>
				<img src={spinner} alt="" />
			</div>
		</>
	);
}

export default Spinner;