import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navbar_container flex">
      <div className="navbar_header flex-1">
        <p className="header_text">Chris.dev</p>
      </div>
      <div className="navbar_clicks flex">
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
