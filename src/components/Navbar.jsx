import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src="/src/assets/images/ari-logo/ari-logo-main.png"
            alt="ARI Logo"
            className="logo-image"
          />
        </div>

        {/* Navigation Links */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/meetings" className="nav-link">
              Meetings
            </a>
          </li>
          <li className="nav-item">
            <a href="/workshops" className="nav-link">
              Workshops
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
