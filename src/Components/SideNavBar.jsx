import React, { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

export default function SideNavBar() {
    const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

    return (
        <div
      className={`sidenav transition-all duration-300 bg-gray-800 text-white flex flex-col items-center ${
        isHovered ? 'w-56 h-full shadow-lg' : 'w-16 h-full shadow-sm'
      }`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {/* <div className="profile">
        <img
          src="https://calyx-production-media.s3.amazonaws.com/thumbnails/avatars/ff36087c-2585-11ee-a7d7-0242ac110002.jpg.200x200_q85.png"
          alt="User Profile Image"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <div className="text-center">
          <p className="text-gray-600">Admin</p>
          <p className="text-xl font-bold">John Doe</p>
        </div>
      </div> */}
      {/* <hr className="my-4 border-t border-gray-300" /> */}
      <ul className="menu-list flex flex-col items-center justify-center">
        <li className='mt-6 flex flex-col justify-center items-center'>
          {isHovered ? <Accordion sx={{color:"white",width:"210px",boxShadow:"none",backgroundColor:"rgb(31 41 55 / 1)"}}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <PermIdentityOutlinedIcon/>
          <Typography sx={{marginLeft:"5px"}}>Users</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Link href={"/farmerDashboard/addUser"}>
        <div className='flex'>
        <PersonAddOutlinedIcon sx={{ stroke: "#ffffff", strokeWidth: 0.3 }}  fontSize='medium' />
        <Typography sx={{marginLeft:"5px"}}>Add User</Typography>
        </div>
        </Link>
        </AccordionDetails>
        <AccordionDetails>
        <Link href={"/farmerDashboard/manageUsers"}>
        <div className='flex'>
        <ManageAccountsOutlinedIcon  sx={{ stroke: "#ffffff", strokeWidth: 0.7 }} fontSize='medium' />
        <Typography sx={{marginLeft:"5px"}}>Manage Users</Typography>
        </div>
        </Link>
        </AccordionDetails>
          </Accordion>:<PermIdentityOutlinedIcon  sx={{ stroke: "#ffffff", strokeWidth: 0.7 }} fontSize='medium' />}
        </li>

        
      </ul>

  {isHovered ? <button className={`mt-auto mb-[15px] bg-blue-500 w-48 rounded-md text-white h-10 rounded-2xl}`}><LogoutIcon/> Logout</button> : <div className='mt-auto mb-[15px] shadow-md w-12 h-10 flex justify-center items-center rounded-md bg-gray-700 shadow-md'><LogoutIcon/></div>}
    </div>
    );
}