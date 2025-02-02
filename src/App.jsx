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
import Workspaces from './Pages/workspace/Workspaces';
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
import Workspace from './Pages/workspace/Workspace';
import WorkspaceLayout from './Components/workspace/WorkspaceLayout';
import Explore from './Pages/workspace/Explore';

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
         
      ]
    },
    {
      path : "/w/:workspaceID",
      element:<WorkspaceLayout/>,
      children : [
        {
          path:"eda",
          element:<EDAPage/>
        },
        {
          path:"vizulisation/:fileId",
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
        },
        {
          index:true,
          element:<Explore/>
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
