import React from 'react'


import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
      const setWhiteColor = ()=>{
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
            // props.setColorFunction('light')
            let getForColor = document.querySelector('.getForColor')
            getForColor.style.background = '#f8f9fa'
            document.title = 'TextUtils - Light Mode'
      }     

      const setDarkColor = ()=>{
            document.body.style.backgroundColor = 'rgb(1 16 25)'
            
            document.body.style.color = 'white'
            // props.setColorFunction('dark')
            let getForColor = document.querySelector('.getForColor')
            getForColor.style.background = 'rgb(1 16 25)'
            document.title = 'TextUtils - Dark Mode'

      }

//       const setRedColor = ()=>{
//             document.body.style.backgroundColor = 'rgb(51 1 1)'
//             document.body.style.color = 'white'
//             let getForColor = document.querySelector('.getForColor')
//             getForColor.style.background = 'red'
//             document.title = 'TextUtils - Redes Mode'

//       }
      
//       const setYellowColor =()=>{
//             document.body.style.backgroundColor = 'rgb(104 104 104 / 70%)'
//             document.body.style.color = 'white'
//             let getForColor = document.querySelector('.getForColor')
//             getForColor.style.background = 'rgb(104 104 104)'
//             document.title = 'TextUtils - Sky Mode'

//       }

      return (
            <div>
                  <>
                        <nav className={` navbar navbar-expand-lg navbar-${props.color}$ bg-${props.color}`}>
                              <div className="getForColor container-fluid">
                             <a className="navbar-brand" href="#">{props.title}</a>
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                          <span className="navbar-toggler-icon"></span>
                           </button>
                             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                                                </li>
                                                {/* <li className="nav-item">
                                                      <a className="nav-link" href='#'>{props.about}</a>
                                                </li> */}

                               </ul>
                              {/* <div className="container checkbox">
                                  <div className={` form-check form-switch  text-${props.textColor}`}>
                                                      <input onClick={props.toogleMode} className="form-check-input sev_check" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                      <label className="form-check-label form-checkbox form-icon " htmlFor="flexSwitchCheckDefault">{props.text}</label>
                                                </div>
                                          </div>
                                          <div className="container checkbox">
                                                <div className={`form-checkbox form-icon form-check form-switch  text-${props.textColor}`}>
                                                      <input onClick={props.toogleRedMode} className="form-check-input sev_check" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                      <label className="form-check-label form-checkbox form-icon " htmlFor="flexSwitchCheckDefault">{props.redMode}</label>
                                                </div>
                                          </div>
                                          <div className="container checkbox">
                                                <div className={`form-checkbox form-icon form-check form-switch text-${props.textColor}`}>
                                                      <input onClick={props.toogleMode} className="form-check-input sev_check" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                      <label className="form-check-label form-checkbox form-icon " htmlFor="flexSwitchCheckDefault">{props.text}</label>
                                                </div>
                                          </div>
                                          <div className="container checkbox">
                                                <div className={`form-checkbox form-icon form-check form-switch text-${props.textColor}`}>
                                                      <input onClick={props.toogleMode} className="form-check-input sev_check" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                      <label className="form-check-label form-checkbox form-icon " htmlFor="flexSwitchCheckDefault">{props.text}</label>
                                                </div>
                                          </div> */}








 {/* ===================================================== THE NEW CODE IS FOLLOWING =================================================== */}

<div className="form-check mx-5">
  <input className="form-check-input" onClick={setWhiteColor}  type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  setWhiteColor
  </label>
</div><div className="form-check mx-5">
  <input className="form-check-input" onClick={setDarkColor} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  setDarkColor
  </label>
</div>
{/*<div className="form-check mx-5">
  <input className="form-check-input" onClick={setRedColor} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  setRedColor
  </label>
</div>
<div className="form-check mx-5">
  <input className="form-check-input" onClick={setYellowColor} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  setYellowColor
  </label>
</div>*/}










                                          {/* <form className="d-flex">
                                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                                <button className="btn btn-outline-success" type="submit">Search</button>
                                          </form> */}
                                    </div>
                              </div>
                        </nav>
                  </>
            </div>
      )
}


Navbar.propTypes = {
      title: PropTypes.string.isRequired,
      aboutText: PropTypes.string
}

Navbar.defaultProps = {
      title: 'default',
      aboutText: 'default'
}
