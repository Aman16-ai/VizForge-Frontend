import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import SideNavBar from './SideNavBar'
import { useSelector } from 'react-redux'
import { selectAlertOptions } from '../store/alertSlice'
import { Alert } from '@mui/material'
import { useLocation } from 'react-router-dom'
import SideToolbar from './Visualization/SideToolBar'
import WorkspaceNavbar from './workspace/WorkspaceNavbar'

//todo : fetch workspace here and save into the redux.
export default function Layout() {
  const location = useLocation()
  const {open,severity,variant,message} = useSelector(selectAlertOptions)

  const renderNavbar = () => {
    if(location.pathname.startsWith('/dashboard/w/')) {
      return <WorkspaceNavbar/>
    }
    return <NavBar/>
  }
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-auto h-auto">
      {renderNavbar()}
      </div>
      <div className="w-full h-[90%] flex">
        <div className="w-auto h-auto border-t-2">
          {!location.pathname.startsWith("/dashboard/vizulisation/") ? <SideNavBar/>:null}
        </div>
        <div className="w-full h-full p-5 overflow-y-scroll">
          <Outlet />
          <div className="w-auto h-auto absolute right-0 top-[10%] mr-2 fixed">
            {open ? <Alert variant={variant} severity={severity}>
                {message}
              </Alert>:null}
          </div>
        </div>
      </div>
    </div>
  )
}
