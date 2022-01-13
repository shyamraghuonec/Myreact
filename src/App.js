// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/forms'
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { Switch } from 'react-router-dom';



function App() {

  const [alert, setAlert] = useState(null)
  // function set alert
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const [mode] = useState('light');
  const [text] = useState('Enable Dark Mode')
  // const [redMode, setRedModeText] = useState('Enable Redes Mode')
  const [textColor] = useState('black')


  // ======================================== NEW CODE FOLLOWING ========================================

  const [color, setcolor] = useState('light')

  const setColorFunction = (color) => {
    setcolor(color)
  }






  // const toogleMode = () => {
  //   if (mode === 'light' || document.body.style.background === 'rgb(51, 1, 1)' || document.body.style.background === 'white') {
  //     console.log('im in if');

  //     setMode('dark')
  //     setText('Enable white Mode')
  //     setTextColor('white')
  //     document.body.style.background = 'rgb(1 16 25)'
  //     document.body.style.color = 'white'
  //     showAlert('Dark mode is Enable', 'success ')
  //   }
  //   else {
  //     console.log('im in else');

  //     setMode('light')
  //     setText('Enable Dark Mode')
  //     setTextColor('black')
  //     document.body.style.background = 'white'
  //     document.body.style.color = 'black'
  //     showAlert('Light mode is Enable', 'success ')
  //     setTimeout(() => {

  //     }, 5000);
  //   }
  // }
  // const toogleRedMode = () => {
  //   if (mode === 'light' || mode === 'rgb(1,16,25)' || document.body.style.background ==='white') {
  //     console.log('shyam bhai in redes');

  //     setMode('dark')
  //     setRedModeText('Enable white Mode')
  //     setTextColor('white')
  //     document.body.style.background = 'rgb(51 1 1)'
  //     document.body.style.color = 'white'
  //     showAlert('Redes mode is Enable', 'success ')
  //   }
  //   else {
  //     setMode('rgb(224 4 4)')
  //     setRedModeText('Enable Redes Mode')
  //     setTextColor('black')
  //     document.body.style.background = 'white'
  //     document.body.style.color = 'black'
  //     showAlert('Light mode is Enable', 'success ')
  //     setTimeout(() => {

  //     }, 5000);
  //   }
  // }
  // const toogleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark')
  //     setText('Enable white Mode')
  //     setTextColor('white')
  //     document.body.style.background = 'rgb(1 16 25)'
  //     document.body.style.color = 'white'
  //     showAlert('Dark mode is Enable', 'success ')
  //   }
  //   else {
  //     setMode('light')
  //     setText('Enable Dark Mode')
  //     setTextColor('black')
  //     document.body.style.background = 'white'
  //     document.body.style.color = 'black'
  //     showAlert('Light mode is Enable', 'success ')
  //     setTimeout(() => {

  //     }, 5000);
  //   }
  // }
  // const toogleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark')
  //     setText('Enable white Mode')
  //     setTextColor('white')
  //     document.body.style.background = 'rgb(1 16 25)'
  //     document.body.style.color = 'white'
  //     showAlert('Dark mode is Enable', 'success ')
  //   }
  //   else {
  //     setMode('light')
  //     setText('Enable Dark Mode')
  //     setTextColor('black')
  //     document.body.style.background = 'white'
  //     document.body.style.color = 'black'
  //     showAlert('Light mode is Enable', 'success ')
  //     setTimeout(() => {

  //     }, 5000);
  //   }
  // }


  return (
    <>
      {/* <Router> */}
        <Navbar color={color} setColorFunction={setColorFunction} title='TextUtiles' about='About' mode={mode} text={text} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Switch>
            <Route path="/about"> */}
              
        {/* <About mode={mode} textColor={textColor} /> */}
            {/* </Route> */}

            {/* <Route path="/"> */}
              <Text showAlert={showAlert} mode={mode} textColor={textColor} heading='Enter Text here to analize' />

            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}


export default App;


















