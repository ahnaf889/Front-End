import React from "react";
import Home from "./components/pages/Home";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={"This is Home page"} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
