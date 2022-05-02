import PeoplePage from "../containers/PeoplePage/PeoplePage";
import HomePage from "../containers/HomePage/HomePage";
import NotFounded from "../containers/NotFonded/NotFounded";
import CharacterPage from "../containers/CharacterPage/CharacterPage";

const routesConfig = [
	{
		path: '/',
		element: <HomePage/>
	},
	{
		path: 'people',
		exact: true,
		element: <PeoplePage/>
	},
	{
		path: 'people/:id',
		element: <CharacterPage/>
	},
	{
		path: '/not-found',
		element: <NotFounded/>
	},
	{
		path: '*',
		element: <NotFounded/>
	},

];

export default routesConfig