import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
        <h1>Flask App</h1>
        </Link>
        <nav>
        {user && (
          <div>
            {('user' in user && 'login' in user.user) ? (
              <>
                <span>{user.user.login}</span>
                <button onClick={handleClick}>Log out</button>
              </>
            ) : (
              <>
                <span>{user.login}</span>
                <button onClick={handleClick}>Log out</button>
              </>
            )}
          </div>
        )}

          {!user && (
            <div>
              <a href="/login">
                {" "}
                <button>Login</button>
              </a>
              <a href="/signup">
                {" "}
                <button>Sign Up</button>
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;