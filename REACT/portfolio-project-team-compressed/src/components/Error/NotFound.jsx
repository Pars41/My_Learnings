import { Link } from "react-router-dom";
import "./notFound.scss";

const NotFound = () => {
  return (
    <>
      {/* <div>ERROR</div> */}
      <div className="notFoundBg"></div>
      <div className="container-fluid d-flex flex-column justify-content-between align-items-center image404">
        <img
          src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
          alt="not_found_image"
        />
      </div>
      <div className="container d-flex flex-column justify-content-between align-items-center text-black">
        <p className="text-center">
          The page you are looking for not available!
        </p>
        <Link to="/" className="link_404 btn btn-success">
          Go to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
