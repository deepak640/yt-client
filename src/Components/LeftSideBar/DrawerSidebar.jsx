/* eslint-disable react/prop-types */
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from 'react-icons/ai'
import './LeftSideBar.css'
import { FaHistory } from "react-icons/fa";
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater } from 'react-icons/md'
import { NavLink } from 'react-router-dom';
const DrawerSidebar = ({ toggleDrawer, toggleDrawerSidebar }) => {
    return (
        <div className="container_DrawerLeftSidebar" style={toggleDrawerSidebar}>
            <div className="container2_DrawerLeftSidebar">
                <div className="Drawer_leftsidebar">
                    <NavLink to={'/'} className="icon_sidebar_div">
                        <p>
                            <AiOutlineHome size={22} className={'icon_sidebar'} style={{ margin: 'auto 0.7rem' }} />
                            <span className="text_sidebar_icon">Home</span>
                        </p>
                    </NavLink>
                    <NavLink className="icon_sidebar_div">
                        <p>
                            <MdOutlineExplore size={22} className={'icon_sidebar'} style={{ margin: 'auto 0.7rem' }} />
                            <span className="text_sidebar_icon">Explorer</span>
                        </p>
                    </NavLink>
                    <NavLink className="icon_sidebar_div">
                        <p>
                            <img src='https://cdn.pixabay.com/photo/2021/05/05/12/16/shorts-png-6230962_1280.png' width={22} className={'icon_sidebar'} style={{ margin: 'auto 0.7rem' }} />
                            <span className="text_sidebar_icon">Shorts</span>
                        </p>
                    </NavLink>
                    <NavLink className="icon_sidebar_div">
                        <p>
                            <MdOutlineSubscriptions size={22} className={'icon_sidebar'} style={{ margin: 'auto 0.7rem' }} />
                            <span className="text_sidebar_icon">Subscriptions</span>
                        </p>
                    </NavLink>
                </div>
                <div className="libraryBtn_Drawerleftsidebar">
                    <NavLink to={'/library'} className="icon_sidebar_div">
                        <p>
                            <MdOutlineVideoLibrary size={22} className={'icon_sidebar'} style={{ margin: 'auto 0.7rem' }} />
                            <span className="text_sidebar_icon">Library</span>
                        </p>
                    </NavLink>
                    <NavLink to={'/history'} className="icon_sidebar_div">
                        <p>
                            <FaHistory size={22} className={'icon_sidebar'} style={{ margin: 'auto 0.7rem' }} />
                            <span className="text_sidebar_icon">History</span>
                        </p>
                    </NavLink>
                    <NavLink to={'/yourvideos'} className="icon_sidebar_div">
                        <p>
                            <AiFillPlaySquare size={22} className={'icon_sidebar'} style={{ margin: 'auto 0.7rem' }} />
                            <span className="text_sidebar_icon">Your videos</span>
                        </p>
                    </NavLink>
                    <NavLink to={'/watchlater'} className="icon_sidebar_div">
                        <p>
                            <MdOutlineWatchLater size={22} className={'icon_sidebar'} style={{ margin: 'auto 0.7rem' }} />
                            <span className="text_sidebar_icon">Watch later</span>
                        </p>
                    </NavLink>
                    <NavLink to={'/likedvideos'} className="icon_sidebar_div">
                        <p>
                            <AiFillLike size={22} className={'icon_sidebar'} style={{ margin: 'auto 0.7rem' }} />
                            <span className="text_sidebar_icon">Liked videos</span>
                        </p>
                    </NavLink>
                </div>
                <div className="subScription_lsdbar">
                    <h3>Your Subscriptions</h3>
                    <div className="channel_lsdbar">
                        <p>c</p>
                        <div>channel</div>
                    </div>
                    <div className="channel_lsdbar">
                        <p>c</p>
                        <div>channel</div>
                    </div>
                    <div className="channel_lsdbar">
                        <p>c</p>
                        <div>channel</div>
                    </div>
                    <div className="channel_lsdbar">
                        <p>c</p>
                        <div>channel</div>
                    </div>
                </div>
            </div>
                <div className="container3_DrawerLeftSidebar" onClick={()=> toggleDrawer()}>hello</div>
        </div>
    )
}

export default DrawerSidebar