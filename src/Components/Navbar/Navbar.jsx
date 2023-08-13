/* eslint-disable react/prop-types */
import { IoMdNotificationsOutline } from 'react-icons/io';
import SearchBar from '../SearchBar/SearchBar'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { gapi } from "gapi-script";
import logo from './yt.ico'
import jwt_decode from 'jwt-decode'
import { RiVideoAddLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from 'react';
import { login } from "../../actions/auth";
import Auth from '../pages/Auth/Auth';
const Navbar = ({ toggleDrawer, setEditCreateChannelBtn }) => {
  const dispatch = useDispatch()
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
  const onSuccess = (response) => {
    const Email = jwt_decode(response.credential).email
    console.log(Email);
    dispatch(login({ email: Email }));
  };

  const onFailure = (response) => {
    console.log("Failed", response);
  };
  useEffect(() => {
    function start() {
      gapi.client.init(({
        clientId: '612635271383-2el1p1dtk99nht4tou4sldnns02hot9o.apps.googleusercontent.com',
        scope: "email"
      }))
    }
    gapi.load("client:auth2", start)
  }, [])

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
              <div className="Channel_logo_App" onClick={()=> setAuthBtn(true)}>
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
              <GoogleOAuthProvider clientSecret='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' clientId='612635271383-2el1p1dtk99nht4tou4sldnns02hot9o.apps.googleusercontent.com'>
                <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
              </GoogleOAuthProvider>
              {/* <p onClick={() => { Login() }} className="Auth_Btn">
              <BiUserCircle size={22} />
              <b>Sign in</b>
            </p> */}
            </>)
          }
        </div>
      </div>
      {
        AuthBtn &&
        <Auth setEditCreateChannelBtn={setEditCreateChannelBtn} setAuthBtn={setAuthBtn} User={CurrentUser} />
      }
    </>
  )
}

export default Navbar