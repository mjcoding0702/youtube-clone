import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="d-flex flex-wrap align-item-center justify-content-between p-2 px-4">
        <div className="col-md-auto d-flex align-items-center">
          <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%%"}}><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
          <img src="src\assets\yt-logo.png" width="120" alt="YouTube logo" className="ms-2"></img>
        </div>

      <div className="col col-sm-4 col-md-6 col-lg-5 d-none d-sm-flex align-items-center justify-content-center">
        <div className="input-group flex-nowrap col-10" style={{width: "90%"}}>
          <input type="text" className="form-control rounded-start-pill" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
          <button className="input-group-text rounded-end-circle" id="basic-addon2">
            <i className="bi bi-search" style={{fontSize: "20px"}}></i>
          </button>
        </div>
        <div className="ms-2">
          <i className="bi bi-mic-fill ms-1" style={{fontSize: "20px"}}></i>
        </div>
      </div>

      <ul className="nav col-md-auto">
        <li>
          <a href="#" className="nav-link px-2">
            <i className="bi bi-camera-reels text-black" style={{fontSize: "20px"}}></i>
          </a>
        </li>

        <li>
          <a href="#" className="nav-link px-2">
            <i className="bi bi-bell text-black" style={{fontSize: "20px"}}></i>
          </a>
        </li>

        <li>
          <a href="#" className="nav-link px-2">
            <img src="src\assets\Rex Logo (3).PNG" width={35}></img>
          </a>
        </li>

      </ul>
      </div>
      <Outlet/>
    </>
  )
}
