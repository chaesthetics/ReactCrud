import React, { useEffect, useState } from "react";
import thelogo from "./thelogo.png"
function Header(){

    const [homeTheme, setHomeTheme] = useState(false)
    const [createTheme, setCreateTheme] = useState(false)
    const [updateTheme, setUpdateTheme] = useState(false)
    const [deleteTheme, setDeleteTheme] = useState(false)

    const Htheme = {
        color: homeTheme ? '#10b4f5': 'white'
    }

    const Ctheme = {
        color: createTheme ? '#10b4f5': 'white'
    }

    const Utheme = {
        color: updateTheme ? '#10b4f5': 'white'
    }
    const Dtheme = {
        color: deleteTheme ? '#10b4f5': 'white'
    }
    return (
        <>
            <div className="nav">
            <nav className="navBar">
                    <div className="logo">
                    <img src={thelogo} height={50}/>
                    <h2 className="logo-title">React</h2>  
                    </div>
                    <div className="right">
                    <ul>
                        <li style={Htheme}className="nav-items" onMouseOver={()=>{
                            setHomeTheme(homeTheme => !homeTheme)} } onMouseLeave={()=>{
                            setHomeTheme(homeTheme => !homeTheme)}}
                        >Home</li>
                        <li style={Ctheme}className="nav-items" onMouseOver={()=>{
                            setCreateTheme(createTheme => !createTheme)} } onMouseLeave={()=>{
                            setCreateTheme(createTheme => !createTheme)}}
                        >Create</li>
                        <li style={Utheme}className="nav-items" onMouseOver={()=>{
                            setUpdateTheme(updateTheme => !updateTheme)} } onMouseLeave={()=>{
                            setUpdateTheme(updateTheme => !updateTheme)}}
                        >Update</li>
                        <li style={Dtheme}className="nav-items" onMouseOver={()=>{
                            setDeleteTheme(deleteTheme => !deleteTheme)} } onMouseLeave={()=>{
                            setDeleteTheme(deleteTheme => !deleteTheme)}}
                        >Delete</li>
                    </ul>
                    <input placeholder=" 🔍︎ |  Search"/>
                    </div>
               
            </nav>
            </div>
        </>
    )
}

export default Header