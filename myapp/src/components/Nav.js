import React, { useState } from 'react';
function Nav() {

  const [dark, setDark] = useState(false);

  if (dark === false) {
    console.log('light')
  }
  else if (dark === true) {
    console.log('dark')
  }

  return (



    < div className="Nav" >
      <b>Where in the world?</b>
      <div className="nav-item">
        {dark &&
          <ion-icon name="sunny-outline"></ion-icon>

        }
        {!dark &&
          <ion-icon name="moon-outline" onClick={() => setDark((prev) => !prev)}></ion-icon>
        }
        <p onClick={() => setDark((prev) => !prev)}>{dark ? 'Light Mode' : 'Dark Mode'}</p>
      </div>
    </ div >
  );
}

export default Nav;