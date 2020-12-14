import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/admin/Login/Login";
import StartCars from "./components/admin/Start_cars/StartCars";
import StartMessages from "./components/admin/Start_messages/StartMessages";
import AddCar from "./components/admin/Add_car/AddCar";
import AddMessage from "./components/admin/Add_message/AddMessage";
import EditCar from "./components/admin/Edit_car/EditCar";
import About from "./components/customer/About/About";
import Home from "./components/customer/Home/Home";
import Car from "./components/customer/Car/Car";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Switch>
        {/* admin */}
        <Route path="/admin/login">
          <Login />
        </Route>
        <Route path="/admin/start/cars">
          <StartCars />
        </Route>
        <Route path="/admin/start/messages">
          <StartMessages />
        </Route>
        <Route path="/admin/car/add">
          <AddCar />
        </Route>
        <Route path="/admin/cars/edit/:id">
          <EditCar />
        </Route>
        <Route path="/admin/messages/add/:id">
          <AddMessage />
        </Route>
        {/* customer */}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/:id">
          <Car />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
