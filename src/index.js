
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";
import LoginUser from './views/LoginUser';
import CreateSchool from './views/CreateSchool';
import LoginAdmin from './views/LoginAdmin';
import AdminLayout from "layouts/Admin.js";

  
ReactDOM.render(
  <BrowserRouter>
    <Switch>
       <Route path="/createSchool" component={CreateSchool}/>
       <Route path="/loginUser" component={LoginUser}/>
       <Route path="/loginAdmin" component={LoginAdmin}/>
             <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
         <LoginUser/> 
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();