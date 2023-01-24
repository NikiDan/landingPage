import React from 'react';
import App from "../App/App";
import {Link, Route, Routes} from "react-router-dom";
import Portfolio from "../PotfolioPage/Portfolio";
import Resume from "../Resume/ResumeApp";
import { v4 as uuidv4 } from 'uuid';

const AppRouter = () => {

    const navigateRoutes = [
        {path: '/', element: <App />, exact: true},
        {path: '/portfolio', element: <Portfolio />, exact: true},
        {path: '/resume', element: <Resume />, exact: true},
    ]

    return(
        <Routes>
            {navigateRoutes.map(route =>
                <Route key={uuidv4()} path={route.path} element={route.element} exact={route.exact} />
            )}
          <Route key={uuidv4()} path="*" element={<Link to="/"/>} />
        </Routes>
    );
}

export default AppRouter;