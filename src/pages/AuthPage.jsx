import { useContext, useEffect } from "react";
import { Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import {useDispatch} from "react-redux"
import { signInWithGoogle } from "../features/userSlice";
import '../styles/AuthPage.css'

export default function AuthPage() {
    const {currentUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSignIn = () => {
        dispatch(signInWithGoogle());
    };

    //If user is logged in, navigate to home page
    useEffect(() => {
        if (currentUser){
            navigate("/home");
        }
    },[currentUser])

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="row border p-3 bg-white shadow rounded-5 box-area">
                    <div className="col-md-6  d-flex justify-content-center border rounded-4 align-items-center flex-column left-box">
                        <div className="featured-image mb-3 mt-2">
                            <img src="https://firebasestorage.googleapis.com/v0/b/clone-4b31b.appspot.com/o/login_youtube.png?alt=media&token=ddb5893c-c234-44f2-ae16-85a13c39d4d8" className="img-fluid" alt="Youtube logo" style={{width:'250px'}} />
                            <p className="text-black fs-2 my-2 fw-medium">Broadcast Yourself</p>
                            <small className="text-black text-wrap text-center" style={{width: '17rem'}}>Inspire others with your story</small>
                        </div>
                    </div>

                    <div className="col-md-6 pb-0 pb-md-3 p-3 p-md-5">
                        <div className="row align-items-center">
                            <div className="header-text mb-4 d-flex flex-column align-items-center">
                                <i className="bi bi-youtube " style={{fontSize: 50, color: "red"}}></i>
                                <p className="fw-medium fs-3 mb-2">Ready to Shine?</p>
                                <p>Login to YouTube Clone</p>
                                <Button className="rounded-pill w-100" variant="outline-dark" onClick={handleSignIn}>
                                    <i className="bi bi-google"></i> Sign in with Google
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

// <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        //     <div className="row w-75 d-flex align-items-center justify-content-between">
        //         <div className="col-5">
        //             <img src='https://firebasestorage.googleapis.com/v0/b/clone-4b31b.appspot.com/o/login_youtube.png?alt=media&token=ddb5893c-c234-44f2-ae16-85a13c39d4d8' alt="YouTube Logo" className="img-fluid" style={{maxHeight: '600px'}}/>
        //         </div>
        //         <div className="col-6">
        //             <i className="bi bi-youtube" style={{fontSize: 50, color: "red"}}></i>
        //             <p className="mt-5" style={{fontSize: 64}}>YouTube Clone</p>
        //             <h2 className="my-5" style={{fontSize: 31}}>Sign in with Google Only</h2>
        //             <Button className="rounded-pill" variant="outline-dark" onClick={handleSignIn}>
        //                 <i className="bi bi-google"></i> Sign in with Google
        //             </Button>

        //             <p className="mt-5" style={{fontWeight: "bold"}}>Sign in with Google to access YouTube API</p>
        //             <p style={{fontSize: "12px"}}>
        //                 Please note that this project is merely a clone, and it will not be used for commercial purposes.
        //             </p>
        //         </div>
        //     </div>
        // </div>