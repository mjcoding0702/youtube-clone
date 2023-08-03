
function SideElement({icon, text}) {
    return (
        <>
            <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                <i className={`${icon} bi me-3`} style={{fontSize: "24px"}}></i>
                {text}
                </a>
            </li>
        </>
    )
}

export default function SideMenu() {
  return (
    <>
        <div className="sidebar bg-white overflow-auto pb-5 d-none d-sm-block" style={{ position: 'fixed', height:"100vh", width:"250px"}}>
            <ul className="nav nav-pills flex-column mb-auto ps-3 px-2">
                <SideElement icon='bi-house-door-fill' text='Home'/>
                <SideElement icon='bi-film' text="Shorts"/>
                <SideElement icon='bi-collection-play' text="Subscription"/>
                <SideElement icon='bi-play-circle' text="Youtube Music"/>
                <hr/>
                <SideElement icon='bi-clock-history' text="History"/>
                <SideElement icon='bi-clock' text="Watch later"/>
                <SideElement icon='bi-download' text="Downloads"/>
                <SideElement icon='bi-hand-thumbs-up' text="Liked videos"/>
                <SideElement icon='bi-three-dots' text="Show more"/>
                <hr/>
                <p className="ms-3 fw-medium fs-5">Explore</p>
                <SideElement icon='bi-fire' text="Trending"/>
                <SideElement icon='bi-file-music' text="Music"/>
                <SideElement icon='bi-controller' text="Gaming"/>
                <SideElement icon='bi-newspaper' text="News"/>
                <SideElement icon='bi-trophy' text="Sports"/>
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
