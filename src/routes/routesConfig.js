import PeoplePage from "../containers/PeoplePage/PeoplePage";
import HomePage from "../containers/HomePage/HomePage";
import NotFounded from "../containers/NotFonded/NotFounded";
import CharacterPage from "../containers/CharacterPage/CharacterPage";

const routesConfig = [
	{
		path: '/',
		exact: true,
		element: <HomePage/>
	},
	{
		path: 'people',
		exact: true,
		element: <PeoplePage/>
	},
	{
		path: 'people/:id',
		exact: true,
		element: <CharacterPage/>
	},
	{
		path: '/not-found',
		exact: true,
		element: <NotFounded/>
	},
	{
		path: '*',
		exact: false,
		element: <NotFounded/>
	},

];

export default routesConfig