import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <img src={logo} className="nav-logo"></img>
        <h4>ReactFacts</h4>
        <h4>React Course - Project 1</h4>
      </div>
    </>
  );
}

export default Navbar;
