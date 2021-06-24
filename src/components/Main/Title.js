import React from 'react'
// import Image from 'react-bootstrap/Image'

const About = () => {
  return (
    <div>
      <div
        id="home"
        className="jumbotron jumbotron-fluid bg-dark bgstyle text-light min-vh-50 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <img src=""/>
        <div className="container-fluid text-center">
          <h1 className="display-1">Binx Pizza</h1>
          <div className="p-5">
          Limited slice selection | Mon - Thur All day | Fri - Sun 11 - 4 Only
          </div>
          <a
            className="btn btn-outline-light btn-lg"
            href="#menu"
            role="button"
            aria-label="Check out our menu"
          >
            menu
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
