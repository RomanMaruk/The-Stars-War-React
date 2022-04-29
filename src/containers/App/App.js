import PeoplePage from '../../containers/PeoplePage/PeoplePage';
import HomePage from '../HomePage/HomePage';
import Header from '../../components/Header/Header';

// import routesConfig from '../../routes/routesConfig'
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import style from './App.module.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={style.wrap}>
          <Header/>
          <Routes>
            {/* { routesConfig.map((rout, index) => {
              <Route key={index} path={rout.path}  element={rout.element} />
            })} */}
            <Route path='/' element={<HomePage/>} />
            <Route path='/people' element={<PeoplePage/>} />
            
          </Routes>
        </div>
        </BrowserRouter>
    </>
  );
}

export default App;



