import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import Fighter from './pages/classes/Fighter.jsx'
import Mage from './pages/classes/Mage.jsx'
import HalfCaster from './pages/classes/HalfCaster.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "character/fighter",
    element:<Fighter/>
  },
  {
    path: "character/mage",
    element:<Mage/>
  },
  {
    path:"character/half-caster",
    element:<HalfCaster/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);