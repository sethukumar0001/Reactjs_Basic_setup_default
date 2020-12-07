import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history /*PrivateRoute(*/ } from "./_helpers";
import { alertActions } from "./_actions";
// import { PrivateRoute } from "./_helpers/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./_pages/Login";
import Register from "./_pages/Register";
// import Home from "./_pages/Home";
import MainHome from "./_pages/MainHome";

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      {alert.message && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={MainHome} />
          {/* <PrivateRoute path="/" component={Home} /> */}
        </Switch>
        {/* We ll make this routing as dynamic once u created more than 10 pages.while you start nested page ping me. */}
      </BrowserRouter>
    </div>
  );
}

export default App;
