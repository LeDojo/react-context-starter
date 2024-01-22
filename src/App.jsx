import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main>
      <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Spotify-like</span>
        </Link>

        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link to="/first-page" className="nav-link text-white">
              First Page
            </Link>
          </li>
          <li>
            <Link to="/second-page" className="nav-link text-white">
              Second Page
            </Link>
          </li>
          <hr />
        </ul>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
