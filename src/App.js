import { useState } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  }

  return (
    <div className="App">
      <div className="header">
        <img
          className="title-card"
          src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
        ></img>

        <div className="nav-bar">
          <p className="nav-item">SERVICES</p>
          <p className="nav-item">PORTFOLIO</p>
          <p className="nav-item">ABOUT</p>
          <p className="nav-item">TEAM</p>
          <p className="nav-item">CONTACT</p>
          <img
            onClick={toggleMenu}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            className="hamburger"
          />
        </div>
      </div>

      <div>
        <div className="words">Welcome To Our Studio</div>
        <div className="words">IT'S NICE TO MEET YOU</div>
        <div className="words">TELL ME MORE</div>
      </div>
    </div>
  );
}

export default App;
