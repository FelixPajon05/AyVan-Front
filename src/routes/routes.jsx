import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import ListTravels from "../pages/ListTravels";
import TripData from "../pages/TripData";
import Passenger from "../pages/Passenger";
import PaymentMethods from "../pages/PaymentMethods";

import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/travels",
        element: <ListTravels />
    },
    {
        path: "/tripData",
        element: <TripData />
    },
    {
        path: "/passenger",
        element: <Passenger />
    },
    {
        path: "/PaymentMethods",
        element: <PaymentMethods />
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]);