import style from './ErrorComponent.module.css';

const ErrorComponent = () => {
	return (
		<>
			<p className={style.error__text}>
				We cannot display data.<br />
				Come late when we fix problem
			</p>
		</>
	);
}

export default ErrorComponent;