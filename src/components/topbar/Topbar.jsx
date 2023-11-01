import React from 'react'
import './topbar.css'
import { Chat, Notifications, Person, Search } from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">HereWeGo</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
             <Search className='searchIcon'/>
             <input type="text" className="searchInput" placeholder='search for friends'/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">TimeLine</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBedge">1</span>
                    </div>
                    <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBedge">2</span>
                    </div>
                    <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBedge">3</span>
                </div>
            </div>
            <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}
