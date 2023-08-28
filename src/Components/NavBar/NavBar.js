import React,{useState} from "react"
import "./NavBar.css"


const NavBar=(bookData)=>{
    const [search,setSearch]=useState("")

    return (
        <div className="navBar"> 
            <div className="store-name">
                <img src={require("./Images/brand-logo.png")}  alt="logo"/>
                <h2>BooK</h2><span>STORE</span>
            </div>
            <div className="search-bar">
                <div className="search">
                    <img src={require("./Images/search-icon.png")}  alt="logo"/>
                    <input type="text" value={search} placeholder="Search for the Book you want study....." onChange={(e)=>{setSearch(e.value)}}/>
                </div>
                <button>Search</button>
            </div>
            <div className="icons">
                <img src={require("./Images/icon1.png")}  alt="icon1"/>
                <img src={require("./Images/icon2.png")} alt="icon2"/>
                <img src={require("./Images/icon3.png")}  alt="icon3"/>
                <img src={require("./Images/dp.png")}  alt="img"/>

            </div>
        </div>
    )
}
export default NavBar;