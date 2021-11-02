import React, { useState } from "react";
import './App.css'
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import Matchingmarkers from './Components/MatchingMarkers';
import Missingmarkers from "./Components/MissingMarkers";
import Modifiedmarkers from "./Components/ModifiedMarkers";

const Header = () => {
    const [selectValue , setSelectedValue]= useState();
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    
  };
const hendelSelect=(e)=>{
      setSelectedValue(e.target.value);
     
}
console.log('value ....',selectValue);
  return (
    <>
      <div class='upper-header'>

        <ul style={{display:'flex', marginRight:20}}>
            <li style={{display:'flex', marginRight:20}}><a href=""><i class="far fa-plus-square"></i>Add Notation</a></li>
           
            <li><a href=""><i class="fas fa-bullseye"></i>Retake Scan</a></li>
      
        </ul>
        </div>
      <div id="header">
        
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "DUST Analysis" : "DUST Analysis"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {/* {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )} */}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu >
              <MenuItem active={true} icon={<FiHome />}>
                Matching Markers
              </MenuItem>
              <MenuItem  icon={<FaList />}>Missing Markers <p>45%</p></MenuItem>
              <MenuItem icon={<FaRegHeart />}>Modified Markers </MenuItem>
              <MenuItem >Background</MenuItem>
            </Menu>
            <SidebarFooter style={{width:'100%' , display:'flex' , textAlign:'center'}}>
          <form>
              {/* <label>User Conformation</label> */}
          <select onClick={hendelSelect} name='languages'
                  style={{ width: '270px', paddingTop:5 , paddingBottom:5 }}>

            <option value='matchingMarkers' >
              Matching Markers
            </option>
            <option value='missingMarkers'>
              Missing Markers
            </option>
            <option value='ModifiedMarkes'>
              Modified Markers
            </option>
           
            <option value='background'>
              Background
            </option>
        
          </select>
          <textarea>
       
          </textarea>
        </form>
          </SidebarFooter>
          </SidebarContent>
          
        </ProSidebar>
      </div>
      <div class='main-screen'>
  
            {Modifiedmarkers}
            {Matchingmarkers}
            {Missingmarkers}
      {/* {selectValue == 'missingmarker' ? visible } */}
    {/* //   {selectValue == 'modifiedmarker' && {Modifiedmarkers}}
    //   {selectValue == 'matchingmarker' && {Matchingmarkers}} */}


      </div>
    </>
  );
};

export default Header;
