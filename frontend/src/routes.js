import About from "./pages/AboutPage";
import Admin from "./pages/AdminPage";
import Auth from "./pages/Authorization";
import Basket from "./pages/Basket";
import Contacts from "./pages/Contacts";
import FAQ from "./pages/FAQ";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  BASKET_ROUTE,
  CONTACT_ROUTE,
  FAQ_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Component: ProductPage,
  },
  {
    path: CONTACT_ROUTE,
    Component: Contacts,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: FAQ_ROUTE,
    Component: FAQ,
  },
];
