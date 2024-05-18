import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home.jsx';
import Registration from './Components/Registration.jsx';
import AddCrft from './Components/AddCrft.jsx';
import AllCraft from './Components/AllCraft.jsx';
import MyCraft from './Components/MyCraft.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import LogIn from './Components/LogIn.jsx';
import ArtAndCraftCategoriesCard from './Components/ArtAndCraftCategoriesCard.jsx';
import FirebaseProvider from './FirbaseProvider/FirebaseProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<LogIn></LogIn>
      },
      {
        path:"/registration",
        element:<Registration></Registration>
      },
      {
        path:"/addcraft",
        element:<AddCrft></AddCrft>
      },
      {
        path:"/allcraft",
        element:<AllCraft></AllCraft>
      },
      {
        path:"/mycraft",
        element:<MyCraft></MyCraft>
      },
      {
        path:"/artandcraftcart",
        element:<ArtAndCraftCategoriesCard></ArtAndCraftCategoriesCard>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
    <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
