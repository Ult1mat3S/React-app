import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <>
      <nav className="nav-container">
        <img src={logo} className="nav-logo"></img>
        <h3 className="nav-logo-text">ReactFacts</h3>
        <h3 className="nav-title">React Course - Project 1</h3>
      </nav>
    </>
  );
}

export default Navbar;
