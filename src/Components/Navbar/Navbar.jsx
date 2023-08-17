/* eslint-disable react/prop-types */
import { IoMdNotificationsOutline } from 'react-icons/io';
import SearchBar from '../SearchBar/SearchBar'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import logo from './yt.ico'
import { RiVideoAddLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Auth from '../pages/Auth/Auth';
import Verification from '../verification/Verification';
const Navbar = ({ toggleDrawer, setEditCreateChannelBtn }) => {
  const [show, setShow] = useState(false)
  // const CurrentUser = null
  const [AuthBtn, setAuthBtn] = useState(false)
  // const CurrentUser = {
  //   result: {
  //     email: "kajsljdkh@gmail.com",
  //     joinedOn: "2222-07-15T09:57:23.489Z"
  //   }
  // }

  const CurrentUser = useSelector(state => state.currentUserReducer)
  // const Login = useGoogleLogin({
  //   onSuccess: (response) => {
  //     const Email = jwt_decode(response.credential).email;
  //     const currentUrl = window.location.href;
  //     console.log("🚀 ~ file: Navbar.jsx:24 ~ onSuccess ~ Email:", Email, "Current URL:", currentUrl);
  //     dispatch(login({ email: Email }));
  //   },
  //   onError: (response) => {
  //     console.log("Failed", response);
  //   }
  // });

  return (
    <>
      <div className='Container_Navbar'>
        <div className="Burger_Logo_Navbar">
          <div className="burger" onClick={() => { toggleDrawer() }}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <Link to={'/'} className='logo_div_navbar'>
            <img src={logo} alt={''} />
            <p className='logo_title_navbar'>YouTube</p>
          </Link>
        </div>
        <SearchBar />
        <RiVideoAddLine size={22} className={'vid_bell_Navbar'} />
        <div className="apps_Box">
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
        </div>
        <IoMdNotificationsOutline size={22} className='vid_bell_Navbar' />
        <div className="Auth_cont_Navbar">
          {
            CurrentUser ? (<>
              <div className="Channel_logo_App" onClick={() => setAuthBtn(true)}>
                <p className="fstChar_logo_App">
                  {
                    CurrentUser?.result.name ? (
                      <>
                        {CurrentUser?.result.name.charAt(0).toUpperCase()}
                      </>
                    ) : (
                      <>
                        {CurrentUser?.result.email.charAt(0).toUpperCase()}
                      </>
                    )
                  }
                </p>
              </div>
            </>) : (<>
              <p onClick={() => setShow(true)} className="Auth_Btn">
                <BiUserCircle size={22} />
                <b>Sign in</b>
              </p>
            </>)
          }
        </div>
      </div>
      {
        AuthBtn &&
        <Auth setEditCreateChannelBtn={setEditCreateChannelBtn} setAuthBtn={setAuthBtn} User={CurrentUser} />
      }
      {show && <Verification setShow={setShow} />
      }
    </>
  )
}

export default Navbar