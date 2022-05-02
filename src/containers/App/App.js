import PeoplePage from '../../containers/PeoplePage/PeoplePage';
import HomePage from '../HomePage/HomePage';
import Header from '../../components/Header/Header';

import routesConfig from '../../routes/routesConfig'
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import style from './App.module.css'

const App = () => {
  return (
    <>
      <div className={style.container}>
        {/* <BrowserRouter> */}
          <Header/>
          <Routes>
            { routesConfig.map((rout, index) =>
              <Route 
                key={index} 
                path={rout.path}
                exact={rout.exact}
                element={rout.element} 
              />
            )}
          </Routes>
        {/* </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;



