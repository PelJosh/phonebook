import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="flex flex-row md:flex-col w-full md:w-[300px] md:h-[100vh] bg-teal-600 py-4 md:py-12 px-4 space-x-5 md:space-x-0 md:space-y-5">
    <Link to="/" className="bg-white font-medium px-10 py-4 rounded-md">
      Dashboard
    </Link>
    <Link
      to="/add-contact"
      className="bg-white font-medium px-10 py-4 rounded-md"
    >
      Add Contact
    </Link>
  </div>
);

export default Sidebar;
