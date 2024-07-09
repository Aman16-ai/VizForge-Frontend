import { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  BrowserRouter,
  Route,
  Link,
} from "react-router-dom";
import Layout from './Components/Layout';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Workspaces from './Pages/Workspaces';
import UploadFile from './Pages/UploadFile';
import VizulisationDashboard from './Pages/VizulisationDashboard';
import Attributes from './Pages/Visualization/Attributes';
import ChartTypes from './Pages/Visualization/chartTypes';
import EditorTools from './Pages/Visualization/EditorTools';
import { Filter } from '@mui/icons-material';
import Filters from './Pages/Visualization/Filters';
import EDAPage from './Pages/EDA/EDAPage';
import Landing from './Pages/Landing';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthenticated, selectUserData, setIsAuthenticated, userDetailsThunk } from './store/User/userSlice';

function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const userData = useSelector(selectUserData)
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Layout/>,
      children:[
        {
          index : true,
          element : <Workspaces/>
        },
        {
          path:"/dashboard/:workspaceID/eda/",
          element:<EDAPage/>
        },
        {
          path:"/dashboard/:workspaceID/vizulisation/:fileId",
          element:<VizulisationDashboard/>,
          children : [
            {
              index:true,
              element:<Attributes/>
            }, 
            {
              path:"chart-types",
              element:<ChartTypes/>
            }, 
            {
              path:"editor",
              element:<EditorTools/>
            }, 
            {
              path:"filter",
              element:<Filters/>
            }
          ]
        }
      ]
    },
    {
      path:"/",
      element:<Home/>,
      children : [
        {
          index:true,
          element:<Landing/>
        }
      ]
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path:"uploadFile",
      element:<UploadFile/>
    }
    
  ]);

  useEffect(() => {
    const token = localStorage.getItem("v-token")
    if(token === undefined || token === null || token === "" || token === " ") {
      dispatch(setIsAuthenticated(false))
    }
    else {
      dispatch(userDetailsThunk())
    }
  },[])
  useEffect(()=> {
    console.log('user data -------> ',userData)
    console.log('isAuthenticated',isAuthenticated)
    if(isAuthenticated) {
      dispatch(userDetailsThunk())
    }
  },[isAuthenticated])
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
