import {lazy, LazyExoticComponent, ReactElement} from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type  JSXComponent = () => ReactElement;
interface Route {
  to:string;
  path:string;
  name:string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
}
const LazyLayout = lazy(/* webpackChunkName: "LazyLayout" */() => import('../01-lazyload/layout/LazyLayout'));
// const Lazy1 = lazy(/* webpackChunkName: "LazyPage1" */() => import('../01-lazyload/pages/LazyPage1'));
// const Lazy2 = lazy(/* webpackChunkName: "LazyPage2" */() => import('../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(/* webpackChunkName: "LazyPage3" */() => import('../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: "lazy-load",
    path: "/lazy-load/*",
    component: LazyLayout,
    name: "Lazy-1",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    component: NoLazy,
    name: "no lazy",
  },
]