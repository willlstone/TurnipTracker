/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";
import Oracle from "views/Oracle.js";
import SandyNeck from "views/SandyNeck";
import LANDon from "views/LANDon";
import Kokomo from "views/Kokomo";
import GingerIsle from "views/GingerIsle";

var routes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: Dashboard,
  //   layout: ""
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: Icons,
  //   layout: ""
  // },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: ""
  },
  {
    path: "/OldZealand",
    name: "OldZealand",
    icon: "nc-icon nc-globe",
    component: Oracle,
    layout: ""
  },
  {
    path: "/SandyNeck",
    name: "SandyNeck",
    icon: "nc-icon nc-planet",
    component: SandyNeck,
    layout: ""
  },
  {
    path: "/Kokomo",
    name: "Kokomo",
    icon: "nc-icon nc-spaceship",
    component: Kokomo,
    layout: ""
  },
  {
    path: "/LANDon",
    name: "LANDon",
    icon: "nc-icon nc-favourite-28",
    component: LANDon,
    layout: ""
  },
  {
    path: "/GingerIsle",
    name: "GingerIsle",
    icon: "nc-icon nc-bulb-63",
    component: GingerIsle,
    layout: ""
  },
  {
    path: "/",
    name: "Home",
    icon: "nc-icon nc-compass-05",
    component: Dashboard,
    layout: ""
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/admin"
  // },

  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography,
  //   layout: "/admin"
  // },
];
export default routes;
