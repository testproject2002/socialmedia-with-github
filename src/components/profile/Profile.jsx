import React from 'react'
import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Profile() {
  return (
    <>
    <Topbar />
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
    <div className="profileRightTop">
        <div className="profileCover">
        <img src="assets/post/5.jpg" alt="" className="profileCoverImg" />
        <img src="assets/post/6.jpg" alt="" className="profileUserImg" />
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Tom cruise</h4>
        </div>
    </div>
    <div className="profileRightBottom">
    <Feed/>
    <Rightbar Profile/>
    </div>
    </div>
    </div>
  </>
  )
}

