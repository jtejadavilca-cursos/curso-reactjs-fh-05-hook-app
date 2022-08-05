import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
        {/* <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link> <br />
        <Link to="/login">Login</Link> */}

        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
                
                <Link className="navbar-brand" to="/">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <NavLink
                            className={ ( {isActive} ) =>`nav-link ${isActive ? 'active' : ''}` }
                            to="/">
                                Home
                        </NavLink>
                        <NavLink
                            className={ ( {isActive} ) =>`nav-link ${isActive ? 'active' : ''}` }
                            to="/about">
                                About
                        </NavLink>
                        <NavLink
                            className={ ( {isActive} ) =>`nav-link ${isActive ? 'active' : ''}` }
                            to="/login">
                                Login
                        </NavLink>

                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
