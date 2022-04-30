import PeoplePage from "../containers/PeoplePage/PeoplePage";
import HomePage from "../containers/HomePage/HomePage";
import NotFounded from "../containers/NotFonded/NotFounded";

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
		path: '*',
		exact: false,
		element: <NotFounded/>
	},

];

export default routesConfig