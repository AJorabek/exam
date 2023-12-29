import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
const arr=[1,2,3,4,5,6,7,8,9,10]
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },
  {
    path:"test",
    element:<Test test={arr} />
  }
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
