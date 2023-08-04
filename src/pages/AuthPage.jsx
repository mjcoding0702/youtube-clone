import { useContext, useEffect } from "react";
import { Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import {useDispatch} from "react-redux"
import { signInWithGoogle } from "../features/userSlice";

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
        <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="row w-75 d-flex align-items-center justify-content-between">
                <div className="col-5">
                    <img src='src\assets\login_youtube.png' alt="gg" className="img-fluid" style={{maxHeight: '600px'}}/>
                </div>
                <div className="col-6">
                    <i className="bi bi-youtube" style={{fontSize: 50, color: "red"}}></i>
                    <p className="mt-5" style={{fontSize: 64}}>YouTube Clone</p>
                    <h2 className="my-5" style={{fontSize: 31}}>Sign in with Google Only</h2>
                    <Button className="rounded-pill" variant="outline-dark" onClick={handleSignIn}>
                        <i className="bi bi-google"></i> Sign in with Google
                    </Button>

                    <p className="mt-5" style={{fontWeight: "bold"}}>Sign in with Google to access YouTube API</p>
                    <p style={{fontSize: "12px"}}>
                        Please note that this project is merely a clone, and it will not be used for commercial purposes.
                    </p>
                </div>
            </div>
        </div>
    )
}
