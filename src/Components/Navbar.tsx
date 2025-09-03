import './Navbar.scss';

export default function Navbar() {
  const login = true;
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>Voting History</li>
        <li>Personal Info</li>
        <li>Elections</li>
        <li>Home</li>
        <li>{login? "Logout": "Login"}</li>
      </ul>
    </nav>
  );
}
