import Login from "./_pages/Login";
import Register from "./_pages/Register";


const routes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Login", component: Register },
  // { path: "**", exact: true, name: "PageNotFound", component: PageNotFound },
];

export default routes;
