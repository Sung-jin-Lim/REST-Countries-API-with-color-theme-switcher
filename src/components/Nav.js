import React, { useState, ChangeEventHandler } from 'react';
function Nav(props) {

  const [dark, setDark] = useState(
    // change this so that if the localstorage mode is set to dark it will be set to false
    (localStorage.getItem("mode") === 'dark') ? false : true

  );


  return (



    < div className="Nav" >
      <b>Where in the world?</b>
      <div className="nav-item">
        {dark &&
          <ion-icon name="sunny-outline" onClick={() => {
            props.changeDark(dark)
            setDark((prev) => !prev)
            localStorage.setItem("mode", 'dark')
          }}></ion-icon>

        }
        {!dark &&
          <ion-icon name="moon-outline" onClick={() => {
            props.changeDark(dark)
            setDark((prev) => !prev)
            localStorage.setItem("mode", 'light')
          }}></ion-icon>
        }
        <p onClick={() => {
          props.changeDark(dark)
          setDark((prev) => !prev)
        }}>{dark ? 'Light Mode' : 'Dark Mode'}</p>
      </div>
    </ div >
  );
}

export default Nav;