import './App.css'
import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import VideoPage from './pages/VideoPage'
import AuthPage from './pages/AuthPage'
import { AuthContext, AuthProvider } from './components/AuthProvider'
import { useContext } from 'react'
import { auth } from './firebase'
import { Dropdown } from 'react-bootstrap';
import { useEffect } from 'react'
import { persistor, store } from './store'
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import VideoForm from './pages/VideoForm'
import Admin from './pages/Admin'

function Navbar() {
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  
  //Backup profile URL
  const backupProfileURL = 'https://firebasestorage.googleapis.com/v0/b/clone-4b31b.appspot.com/o/profile-backup.png?alt=media&token=8a063fcb-f324-48c2-b66a-91f80f914a5a'
  
  const user = useSelector((state) => state.user.user);

  //Handle user logout
  const handleLogout = () => {
    persistor.purge().then(() => {
      // Perform some action after the state has been purged
      auth.signOut();
    });
  }

  //Navigate user after logging out
  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
    }
  },[currentUser, navigate])

  return (
    <>
      <div className="nav-container bg-white" style={{position: 'sticky', top:0, zIndex: 1000}}>
        <div className="d-flex flex-wrap align-item-center justify-content-between p-2 px-4">
          {/* First column */}
          <div className="col-md-auto d-flex align-items-center">
            <i className="bi bi-list" style={{fontSize: "24px"}}></i>
            <a href="/home"><img src="https://firebasestorage.googleapis.com/v0/b/clone-4b31b.appspot.com/o/yt-logo.png?alt=media&token=73306d8f-127f-46b2-bca0-f234f2049ea0" width="120" alt="YouTube logo" className="ms-2"></img></a>
          </div>

          {/* Second column */}
          <div className="col col-sm-4 col-md-6 col-lg-5 d-none d-sm-flex align-items-center justify-content-center">
            <div className="input-group flex-nowrap col-10 disabled" style={{width: "90%"}}>
              <input type="text" className="form-control rounded-start-pill" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
              <button className="input-group-text rounded-end-circle" id="basic-addon2">
                <i className="bi bi-search" style={{fontSize: "20px"}}></i>
              </button>
            </div>
            
            <div className="ms-2">
              <i className="bi bi-mic-fill ms-1" style={{fontSize: "20px"}}></i>
            </div>
          </div>

          {/* Third column */}
          <ul className="nav col-md-auto">
            <li>
              <a href="/videoform" className="nav-link px-2">
                <i className="bi bi-camera-reels text-black" style={{fontSize: "20px"}}></i>
                <span className='text-black ms-2'>New Video</span>
              </a>
            </li>

            <li>
              <a href="#" className="nav-link px-2">
                <i className="bi bi-bell text-black" style={{fontSize: "20px"}}></i>
              </a>
            </li>

            <li>
              <Dropdown>
                  <Dropdown.Toggle as="a" className="nav-link px-2 pointer-cursor" style={{color: 'black', cursor: 'pointer'}}>
                      <img src={user.profileurl || backupProfileURL} width={35} className='rounded-circle' alt='profilePicture' />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      <Dropdown.Item><Link to='/videoform' className='text-decoration-none text-black'>Upload Video</Link></Dropdown.Item>
                      <Dropdown.Item><Link to='/admin' className='text-decoration-none text-black'>Your Videos</Link></Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
      <Outlet/>
    </>
  )
}


function App() {
  return (
    <>
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar/>}>
                <Route index element={<AuthPage/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/video/:videoId' element={<VideoPage/>} />
                <Route path='/videoform' element={<VideoForm/>} />
                <Route path='/admin' element={<Admin/>} />
              </Route>
              <Route path='/login' element={<AuthPage/>} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </AuthProvider>
    </>
  )
}

export default App
