import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";
import logo from '../logo.svg';
import React, {Suspense} from "react";
import {routes} from "./routes";

export const Navigation = () => {
  return (<>
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className={"main-layout"}>
          <nav>
            <img src={logo} alt="React logo"/>
            <ul>
              {
                routes.map(({to, name}) => (
                  <li key={to}>
                    <NavLink to={to} className={({isActive}) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                  </li>))
              }
            </ul>
          </nav>
          <Routes>
            {
              routes.map(({path, component: Component}) => (
                <Route key={path} path={path} element={<Component/>}></Route>
              ))
            }
            <Route path={"/*"} element={<Navigate to={routes[0].to} replace></Navigate>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  </>)
}