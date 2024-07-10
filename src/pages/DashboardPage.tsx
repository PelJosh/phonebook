import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hook";

const DashboardPage = () => {
  const { contacts } = useAppSelector((state) => state.contact);

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-xl font-medium">Dashboard</h2>
        {contacts.length > 0 && (
          <Link
            to="/add-contact"
            className="appearance-none mt-2 px-5 bg-green-400 placeholder-[#E0E0E0] rounded-md text-sm text-white font-medium focus:outline-none transition ease-in-out duration-300 py-3.5"
          >
            Add Contact
          </Link>
        )}
      </div>

      {contacts.length === 0 ? (
        <div className="w-full h-[80vh] flex flex-col justify-center items-center">
          <div className="text-2xl text-center">
            You do not have any contacts yet, nothing to see!
          </div>
          <div className="mt-10">
            <Link
              to="/add-contact"
              className="appearance-none w-full mt-2 px-5 bg-green-400 placeholder-[#E0E0E0] rounded-md text-sm text-white font-medium focus:outline-none transition ease-in-out duration-300 py-3.5"
            >
              Add Contact
            </Link>
          </div>
        </div>
      ) : (
        <table className="min-w-full text-left text-sm font-light text-surface mt-8">
          <thead className="border-b border-neutral-200 font-medium">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-4">
                Email
              </th>
              <th scope="col" className="px-6 py-4">
                Addresses
              </th>
              <th scope="col" className="px-6 py-4">
                Longitude
              </th>
              <th scope="col" className="px-6 py-4">
                Latitude
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className="border-b border-neutral-200">
                <td className="px-6 py-4 font-medium">{index + 1}</td>
                <td className="px-6 py-4">{contact.name}</td>
                <td className="px-6 py-4">{contact.phoneNumber}</td>
                <td className="px-6 py-4">{contact.email}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col space-y-2">
                    {contact.addresses.map((address) => (
                      <div>{address}</div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">{contact.longitude}</td>
                <td className="px-6 py-4">{contact.latitude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DashboardPage;
