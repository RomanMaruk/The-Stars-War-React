import { Link } from 'react-router-dom';

import { Button, styled } from '@mui/material';
import style from './PeopleNavigation.module.css';


const CustomButton = styled(Button)({
	color: '#fff',
	fontWeight: 'bold',
	border: '1px solid #fff',
	fontSize: '.8rem',
	minWidth: '100px',
	padding: '6px 0',
	'&:hover': {
		backgroundColor: '#fff',
		color: 'black',
		borderColor: '#fff'
	},
	':disabled': {
		backgroundColor: 'inherit',
		color: '#fff',
		opacity: '.5',
		border: '1px solid rgba(255, 255, 255, .7)',
		cursor: 'initial',
	}
});
const CustomLink = styled(Link)`
	text-decoration: none;
	height: fit-content;
	color: #fff;
	cursor: initial;
`;

const PeopleNavigation = ({prevPage, nextPage, counterPage}) => {

	const prevLinkPage = prevPage ? `/people/?page=${counterPage - 1}` : `/people/?page=${counterPage}`;
	const nextLinkPage = nextPage ? `/people/?page=${counterPage + 1}` : `/people/?page=${counterPage}`;
	
	return (
		<>
			<div className={style.container}>
				<div className={style.wrap__btn}>
					<CustomLink className={style.linkNavigation} to={prevLinkPage}>
						<CustomButton size="medium" variant="outlined" disabled={!prevPage}>Previous</CustomButton>
					</CustomLink>
					<CustomLink to={nextLinkPage}>
						<CustomButton size="medium" variant="outlined" disabled={!nextPage}>next</CustomButton>
					</CustomLink>
				</div>
			</div>
		</>
	);
}

export default PeopleNavigation;