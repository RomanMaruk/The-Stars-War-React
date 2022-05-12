import PeoplePage from "../containers/PeoplePage/PeoplePage";
import HomePage from "../containers/HomePage/HomePage";
import NotFounded from "../containers/NotFonded/NotFounded";
import CharacterPage from "../containers/CharacterPage/CharacterPage";
import FavoritePage from "../containers/FavoritePage/FavoritePage";
import SearchPage from "../containers/SearchPage/SearchPage";

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
		path: '/search',
		element: <SearchPage/>
	},
	{
		path: '/favorites',
		element: <FavoritePage/>
	},
	{
		path: '*',
		element: <NotFounded/>
	},

];

export default routesConfig