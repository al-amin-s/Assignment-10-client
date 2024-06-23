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
import CategoryCard from './Components/CategoryCard.jsx';
import Category from './Components/Category.jsx';
import AllCategoryDetails from './Components/AllCategoryDetails.jsx';
import PrivateRout from './Components/PrivateRout.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/home",
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/art/')
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
        element:<PrivateRout><AddCrft></AddCrft></PrivateRout>
      },
      {
        path:"/allcraft",
        element:<AllCraft></AllCraft>,
        loader:()=>fetch('http://localhost:5000/art')
      },
      {
        path:"/mycraft",
        element:<PrivateRout><MyCraft></MyCraft></PrivateRout>
      },
      {
        path:"/artandcraftcart",
        element:<ArtAndCraftCategoriesCard></ArtAndCraftCategoriesCard>
      },
      {
        path:"/craftItemSection",
        element:<CraftItemSection></CraftItemSection>,
        // loader:()=>fetch('http://localhost:5000/art/')
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
        element:<PrivateRout><CraftItemsCardDetails></CraftItemsCardDetails></PrivateRout>
      },
      {
        path:"/caegory", 
        element:<Category></Category>,
        loader:()=>fetch('http://localhost:5000/category/')
      },
      {
        path:'/allCategoryDetails:_id',
        loader:({params})=>fetch(`http://localhost:5000/art/${params._id}`),
        element:<AllCategoryDetails></AllCategoryDetails>
      },
      // {
      //   path:'/private',
      //   element:<PrivateRout></PrivateRout>
      // }
      
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


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import './index.css';
// import Home from './Components/Home.jsx';
// import Registration from './Components/Registration.jsx';
// import AddCraft from './Components/AddCraft.jsx';
// import AllCraft from './Components/AllCraft.jsx';
// import MyCraft from './Components/MyCraft.jsx';
// import ErrorPage from './Components/ErrorPage.jsx';
// import LogIn from './Components/LogIn.jsx';
// import ArtAndCraftCategoriesCard from './Components/ArtAndCraftCategoriesCard.jsx';
// import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';
// import CraftItemSection from './Components/CraftItemSection.jsx';
// import About from './Components/About.jsx';
// import AllCraftDetails from './Components/AllCraftDetails.jsx';
// import CraftItemsCardDetails from './Components/CraftItemsCardDetails.jsx';
// import CategoryCard from './Components/CategoryCard.jsx';
// import Category from './Components/Category.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//         // loader:()=>fetch('http://localhost:5000/art/')
//       },
//       {
//         path: "/login",
//         element: <LogIn />
//       },
//       {
//         path: "/registration",
//         element: <Registration />
//       },
//       {
//         path: "/addcraft",
//         element: <AddCraft />
//       },
//       {
//         path: "/allcraft",
//         element: <AllCraft />,
//         loader: () => fetch('http://localhost:5000/art')
//       },
//       {
//         path: "/mycraft",
//         element: <MyCraft />
//       },
//       {
//         path: "/artandcraftcart",
//         element: <ArtAndCraftCategoriesCard />
//       },
//       {
//         path: "/craftItemSection",
//         element: <CraftItemSection />,
//         loader: () => fetch('http://localhost:5000/art/')
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/allcraftdetails",
//         element: <AllCraftDetails />,
//       },
//       {
//         path: '/art/:_id',
//         loader: ({ params }) => fetch(`http://localhost:5000/art/${params._id}`),
//         element: <CraftItemsCardDetails />
//       },
//       {
//         path: "/category",
//         element: <Category />,
//         loader: () => fetch('http://localhost:5000/category'),
//       }
//     ]
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <FirebaseProvider>
//       <RouterProvider router={router} />
//     </FirebaseProvider>
//   </React.StrictMode>,
// );

