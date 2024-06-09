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
import CraftItemSection from './Components/CraftItemSection.jsx';
import About from './Components/About.jsx';
import AllCraftDetails from './Components/AllCraftDetails.jsx';
import CraftItemsCardDetails from './Components/CraftItemsCardDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/home",
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/art')
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
        element:<AllCraft></AllCraft>,
        loader:()=>fetch('http://localhost:5000/art')
      },
      {
        path:"/mycraft",
        element:<MyCraft></MyCraft>
      },
      {
        path:"/artandcraftcart",
        element:<ArtAndCraftCategoriesCard></ArtAndCraftCategoriesCard>
      },
      {
        path:"/craftItemSection",
        element:<CraftItemSection></CraftItemSection>,
        
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/allcraftdetails",
        element:<AllCraftDetails></AllCraftDetails>,
        
      },
      {
        path:'/art/:_id',
        loader:({params})=>fetch(`http://localhost:5000/art/${params._id}`),
        element:<CraftItemsCardDetails></CraftItemsCardDetails>
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



