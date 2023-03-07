import { Link, useLocation } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  // useLocation ile o anki path yakalanabilir
  const { pathname: path } = useLocation();
  // console.log(path); // /
  // console.log(useLocation()); // {pathname: '/contact', search: '', hash: '', state: null, key: 'hr7w68nc'}

  return (
    <>
      {/* <div>FOOTER</div> */}
      <footer
        className={
          path === "/"
            ? "horizontal"
            : path === "/contact"
            ? "center"
            : "vertical"
        }
      >
        <div className="socials">
          <Link to={path}>
            <i className="fa-brands fa-twitter fa-2x"></i>
          </Link>
          <Link to={path}>
            <i className="fa-brands fa-facebook fa-2x"></i>
          </Link>
          <Link to={path}>
            <i className="fa-brands fa-instagram fa-2x"></i>
          </Link>
          <Link to={path}>
            <i className="fa-brands fa-github fa-2x"></i>
          </Link>
        </div>
        <div className="copyright">
          &copy; Copyright {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
