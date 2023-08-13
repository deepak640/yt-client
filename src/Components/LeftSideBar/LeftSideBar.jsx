import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import './LeftSideBar.css'
import { NavLink } from "react-router-dom";
const LeftSideBar = () => {
  return (
    <div className="container_leftSidebar">
      <NavLink to={'/'} className="icon_sidebar_div">
        <AiOutlineHome size={22} className="icon_sidebar" />
        <div className="text_sidebar_icon">
          Home
        </div>
      </NavLink>
      <NavLink className="icon_sidebar_div">
        <img src="https://cdn.pixabay.com/photo/2021/05/05/12/16/shorts-png-6230962_1280.png" width={22} className="icon_sidebar" />
        <div className="text_sidebar_icon">
          Shorts
        </div>
      </NavLink>
      <NavLink className="icon_sidebar_div">
        <MdOutlineSubscriptions size={22} className="icon_sidebar" />
        <div style={{ fontSize: "12px" }} className="text_sidebar_icon">
          Subscription
        </div>
      </NavLink>
      <NavLink to={'/library'} className="icon_sidebar_div">
        <MdOutlineVideoLibrary size={22} className="icon_sidebar" />
        <div className="text_sidebar_icon">
          Library
        </div>
      </NavLink>
    </div>
  )
}

export default LeftSideBar