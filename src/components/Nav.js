import React, { useState, ChangeEventHandler } from 'react';
function Nav(props) {

  const [dark, setDark] = useState(true);

  return (



    < div className="Nav" >
      <b>Where in the world?</b>
      <div className="nav-item">
        {dark &&
          <ion-icon name="sunny-outline" onClick={() => {
            props.changeDark(dark)
            setDark((prev) => !prev)
          }}></ion-icon>

        }
        {!dark &&
          <ion-icon name="moon-outline" onClick={() => {
            props.changeDark(dark)
            setDark((prev) => !prev)
          }}></ion-icon>
        }
        <p onClick={() => {
          props.changeDark(dark)
          setDark((prev) => !prev)
        }}>{dark ? 'Dark Mode' : 'Light Mode'}</p>
      </div>
    </ div >
  );
}

export default Nav;