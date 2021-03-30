import React from 'react'

const Navbar = () => {
  return (
    <div className="index-page sidebar-collapse">
          <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
      <div className="container">
        <div className="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="./assets/img/blurred-image-1.jpg">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" rel="tooltip" title="Follow us on Linkedin" data-placement="bottom" href="https://www.linkedin.com">
                <i className="fab fa-linkedin"></i>
                <p className="d-lg-none d-xl-none">Linkedin</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/">
                <i className="fab fa-facebook-square"></i>
                <p className="d-lg-none d-xl-none">Facebook</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
