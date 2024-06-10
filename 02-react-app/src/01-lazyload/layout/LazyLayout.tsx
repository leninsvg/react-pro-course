import React from "react";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import LazyPage1 from "../pages/LazyPage1";
import LazyPage2 from "../pages/LazyPage2";
import LazyPage3 from "../pages/LazyPage3";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      Rutas hijas
      <ul>
        <li>
          <NavLink to={"lazy1"}>Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to={"lazy2"}>Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to={"lazy3"}>Lazy 1</NavLink>
        </li>
        <Routes>
          <Route path={"lazy1"} element={<LazyPage1/>}></Route>
          <Route path={"lazy2"} element={<LazyPage2/>}></Route>
          <Route path={"lazy3"} element={<LazyPage3/>}></Route>

          <Route path={"*"} element={<Navigate replace to={"lazy1"}/>}></Route>
        </Routes>
      </ul>
    </div>
  );
}
export default LazyLayout;