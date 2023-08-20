import React, { useState } from 'react'
import firebase from '../../firebase'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import 'react-phone-number-input/style.css'
import { toast } from 'react-toastify';
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { login } from '../../actions/auth';
import PhoneInput from 'react-phone-number-input';
const Verification = ({ setShow }) => {
    const [phone_number, setPhone_number] = useState('')
    const [userName, setUserName] = useState('')
    const [replace, setReplace] = useState(true)
    const [otp, setOtp] = useState('')
    const dispatch = useDispatch()
    const auth = getAuth(firebase)
    const googleSignin = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
        onAuthStateChanged(auth, (currentUser) => {
            dispatch(login({ email: currentUser?.email }))
            setShow(false)
        })
    }
    const configureCaptcha = () => {

        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
            },
        });

    }
    const onSignInSubmit = (e) => {
        e.preventDefault()
        configureCaptcha()
        const phoneNumber = phone_number
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                setReplace(false)
                toast.success("sent to your number within 5 minutes")
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                if (error.code === "auth/too-many-requests") {
                    toast.error("Too many sign-in attempts. Please try again later.")
                } else {
                    toast.error(error.code);
                }
            });


    }
    const otpsubmit = (e) => {
        e.preventDefault()
        const code = otp;
        confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            toast.success("done", { autoClose: 2000, onClose: () => { setShow(false) } })
            dispatch(login({ email: userName }))

            // ...
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...

            if (error.code === "auth/invalid-verification-code") {
                toast.error("Invalid verification code");
            } else if (error.code === "auth/code-expired") {
                toast.error("Verification code expired");
            } else if (error.code === "auth/too-many-requests") {
                toast.error("Too many sign-in attempts. Please try again later.");
            }
            else {
                toast.error(error.code);
                // Handle other errors
            }
        });
    }

    return (
        <div className='container_CreateEditChannel' style={{ height: '92vh' }}>
            <input
                onClick={() => setShow(false)}
                type="submit" name='text' value={'x'} className='ibtn_x' />
            {replace ?
                <>
                    <form className='container2_CreateEditChannel' style={{ backgroundColor: 'black' }} onSubmit={onSignInSubmit}>
                        <h1 style={{ textAlign: "center" }}>Login</h1>
                        <input type="text" placeholder='create your userName' className='ibox' name='text' value={userName} onChange={(e) => setUserName(e.target.value)} required />
                        {/* <input name="tel" type='tel' pattern="/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i" required placeholder="123-4567-8901" value={phone_number}
                        onChange={(e) => setPhone_number(e.target.value)} className='ibox' /> */}
                        <PhoneInput value={phone_number} defaultCountry='IN'  className='ibox' placeholder="Enter Phone Number" onChange={setPhone_number} required />
                        <input type="submit" value="Submit" className='ibtn' /><br />
                        <GoogleButton style={{ margin: "0 auto", }} onClick={googleSignin} />
                    </form>
                </>
                :
                <>
                    <form className='container2_CreateEditChannel' style={{ backgroundColor: 'black' }} onSubmit={otpsubmit}>
                        <h1 style={{ textAlign: "center" }}>Enter OTP</h1>
                        <input type="text" name='number' className='ibox' placeholder='Enter OTP' value={otp} onChange={(e) => setOtp(e.target.value)} required />
                        <input type="submit" value="Login" className='ibtn' />
                    </form>
                </>
            }
            <div id="sign-in-button"></div>
        </div>
    )
}

export default Verification