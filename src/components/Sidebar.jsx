
export default function Sidebar() {
  return (
    <>
        <div className="sidebar bg-white overflow-auto" style={{position:"sticky", height:"calc(100% - 60px)", left: 0, width:"250px"}}>
            <ul className="nav nav-pills flex-column mb-auto ps-3 px-2">
                <li className="nav-item">
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-house-door-fill me-3" style={{fontSize: "24px"}}></i>
                    Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-film me-3" style={{fontSize: "24px"}}></i>
                    Shorts
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-collection-play me-3" style={{fontSize: "24px"}}></i>
                    Subscription
                    </a>
                </li>
               
                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-play-circle me-3" style={{fontSize: "24px"}}></i>
                    Youtube Music
                    </a>
                </li>
                <hr></hr>
                
                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-clock-history me-3" style={{fontSize: "24px"}}></i>
                    History
                    </a>
                </li>

                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-play-btn me-3" style={{fontSize: "24px"}}></i>
                    Your videos
                    </a>
                </li>

                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-clock me-3" style={{fontSize: "24px"}}></i>
                    Watch later
                    </a>
                </li>

                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-download me-3" style={{fontSize: "24px"}}></i>
                    Downloads
                    </a>
                </li>

                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-hand-thumbs-up me-3" style={{fontSize: "24px"}}></i>
                    Liked videos
                    </a>
                </li>

                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-three-dots me-3" style={{fontSize: "24px"}}></i>
                    Show more
                    </a>
                </li>

                <hr></hr>

                <p className="ms-3 fw-medium fs-5">Explore</p>

                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-fire me-3" style={{fontSize: "24px"}}></i>
                    Trending
                    </a>
                </li>

                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-file-music me-3" style={{fontSize: "24px"}}></i>
                    Music
                    </a>
                </li>

                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-controller me-3" style={{fontSize: "24px"}}></i>
                    Gaming
                    </a>
                </li>

                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-newspaper me-3" style={{fontSize: "24px"}}></i>
                    News
                    </a>
                </li>

                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                    <i className="bi bi-trophy me-3" style={{fontSize: "24px"}}></i>
                    Sports
                    </a>
                </li>

                <hr></hr>

                <ul className="nav nav-footer mb-3 fw-medium ps-3">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark p-1">About</a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark p-1">Press</a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark p-1">Copyright</a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark p-1">Creators</a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark p-1">Advertise</a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark p-1">Developers</a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark p-1">Terms</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark p-1">Policy & Safety</a>
                    </li>

                    <li className="nav-item mt-2">
                        <a className="nav-link fw-light text-dark p-1" href="#">© 2023 Google LLC</a>
                    </li>
                </ul>


            </ul>
        </div>
    </>
  )
}
