import logo from "../assets/logo/boi-ghor-logo-tr.png";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-3 shadow-sm sticky top-0 bg-white">
      <div className="px-12 mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <img className="w-1/12" src={logo} alt="" />
        </Link>
        <div className="w-full">
          <ul className="flex justify-end items-center">
            <li>
              <Button variant="link">
                <Link to={"/allBooks"}>All Books</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link to={"/myBooks"}>My Books</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link to={"/wishlist"}>Wishlist</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link to={"/addNewBooks"}>Add New Books</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link to={"/signIn"}>Sign In</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link to={"/signUp"}>Sign Up</Link>
              </Button>
            </li>
            <li>
              <Button variant={"outline"}>Logout</Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
