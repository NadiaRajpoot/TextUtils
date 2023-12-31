import React from 'react'
import PropTypes from 'prop-types'


const Navbar = (props) => {
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme={props.mode}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><span className  = {`badge bg-${props.mode=== 'light'? 'dark':'light'} text-${props.mode=== 'light'? 'light':'dark'}`}> {props.title}</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">{props.aboutText}</a>
          </li>
          
         
        </ul>
        <div className={`form-check form-switch  text-${props.mode === 'light'? 'dark':'light'} `}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault"> {props.labeltext}</label>
</div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar

Navbar.prototypes = {
    title: PropTypes.string.isRequired,
aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutText: 'About Text Here'
}