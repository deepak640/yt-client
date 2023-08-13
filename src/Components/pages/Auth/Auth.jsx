import React from 'react'
import './Auth.css'
import { BiLogOut } from "react-icons/bi";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useDispatch } from 'react-redux'
import { setCurrentUser } from "../../../actions/currentUser";
import { Link } from 'react-router-dom';
const Auth = ({ User, setAuthBtn, setEditCreateChannelBtn }) => {
    const dispatch = useDispatch()
    const onLogOutSuccess = () => {
        const auth = gapi.auth2.getAuthInstance();
        auth.signOut()
        console.log("render")
        dispatch(setCurrentUser(null))
        alert("logout")
    }
    return (
        <div className='Auth_container' onClick={() => setAuthBtn(false)}>
            <div className="Auth_container2">
                <p className="User_Details">
                    <span className="Channel_logo_App">
                        <p className="fstChar_logo_App">
                            {User?.result.name ?
                                (User?.result.name.charAt(0).toUpperCase())
                                : (User?.result.email.charAt(0).toUpperCase())
                            }
                        </p>
                    </span>
                    <span className="email_Auth">{User?.result.email}</span>
                </p>
                <div className="btns_Auth">
                    {
                        User?.result.name ?
                            <>
                                {
                                    <Link to={`/channel/${User.result._id}`} className='btn_Auth'>
                                        Your Channel
                                        {/* <input type="submit" className='btn_Auth' value="Your Channel" /> */}
                                    </Link>
                                }
                            </>
                            :
                            <input type="submit" className='btn_Auth' value="Create Your Channel" onClick={() => setEditCreateChannelBtn(true)} />
                    }
                    <div>
                        <div className='btn_Auth' onClick={onLogOutSuccess}><BiLogOut />Log out</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth