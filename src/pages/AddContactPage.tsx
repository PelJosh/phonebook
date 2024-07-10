import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  FormikHelpers,
} from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../store/hook";
import { addContact } from "../store/slices/contact";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface FormValues {
  name: string;
  phoneNumber: string;
  email: string;
  addresses: string[];
  longitude: number;
  latitude: number;
}

const AddContactPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: FormValues = {
    name: "",
    phoneNumber: "",
    email: "",
    addresses: [""],
    longitude: 0,
    latitude: 0,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    addresses: Yup.array()
      .of(Yup.string().required("Address cannot be empty"))
      .min(1)
      .max(5)
      .label("Addresses")
      .required("Addresses is required"),
    longitude: Yup.number().required("Longitude is required"),
    latitude: Yup.number().required("Latitude is required"),
  });

  const handleAddContact = async (
    values: FormValues,
    formikHelper: FormikHelpers<FormValues>
  ): Promise<void> => {
    await dispatch(addContact(values));
    formikHelper.resetForm();
    navigate("/");
    toast("Contact added successfully", { type: "success" });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-xl font-medium">Add Contact</h2>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleAddContact}
      >
        {({ values, handleSubmit, isValid, isSubmitting }) => {
          return (
            <Form className="w-full lg:w-1/2 mt-8" onSubmit={handleSubmit}>
              <div className="mt-4">
                <label htmlFor="name">Name:</label>
                <Field
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="appearance-none w-full mt-2 px-5 bg-[#F8F8F8] placeholder-[#E0E0E0] rounded-md text-sm text-gray-900 focus:outline-none transition ease-in-out duration-300 py-3.5"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <Field
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  className="appearance-none w-full mt-2 px-5 bg-[#F8F8F8] placeholder-[#E0E0E0] rounded-md text-sm text-gray-900 focus:outline-none transition ease-in-out duration-300 py-3.5"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="email">Email:</label>
                <Field
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="appearance-none w-full mt-2 px-5 bg-[#F8F8F8] placeholder-[#E0E0E0] rounded-md text-sm text-gray-900 focus:outline-none transition ease-in-out duration-300 py-3.5"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="addresses">Addresses:</label>
                <FieldArray name="addresses">
                  {(arrayHelpers) =>
                    values.addresses && values.addresses.length > 0 ? (
                      values.addresses.map((friend, index) => (
                        <div className="flex flex-row space-x-2" key={index}>
                          <Field
                            name={`addresses.${index}`}
                            id="addresses"
                            placeholder="Addresses"
                            className="appearance-none w-full mt-2 px-5 bg-[#F8F8F8] placeholder-[#E0E0E0] rounded-md text-sm text-gray-900 focus:outline-none transition ease-in-out duration-300 py-3.5"
                          />
                          {index !== 0 && (
                            <button
                              type="button"
                              className="appearance-none mt-2 px-5 bg-red-400 placeholder-[#E0E0E0] rounded-md text-sm text-white focus:outline-none transition ease-in-out duration-300 py-3.5"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              -
                            </button>
                          )}
                          <button
                            type="button"
                            className="appearance-none mt-2 px-5 bg-gray-200 placeholder-[#E0E0E0] rounded-md text-sm text-white focus:outline-none transition ease-in-out duration-300 py-3.5"
                            onClick={() => arrayHelpers.push("")}
                          >
                            +
                          </button>
                        </div>
                      ))
                    ) : (
                      <button
                        className="appearance-none w-full mt-2 px-5 bg-gray-200 placeholder-[#E0E0E0] rounded-md text-sm text-gray-900 focus:outline-none transition ease-in-out duration-300 py-3.5"
                        type="button"
                        onClick={() => arrayHelpers.push("")}
                      >
                        Add Address
                      </button>
                    )
                  }
                </FieldArray>
                <ErrorMessage
                  name="addresses"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="longitude">Longitude:</label>
                <Field
                  name="longitude"
                  id="longitude"
                  type="number"
                  min="0"
                  placeholder="Longitude"
                  className="appearance-none w-full mt-2 px-5 bg-[#F8F8F8] placeholder-[#E0E0E0] rounded-md text-sm text-gray-900 focus:outline-none transition ease-in-out duration-300 py-3.5"
                />
                <ErrorMessage
                  name="longitude"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="latitude">Latitude:</label>
                <Field
                  name="latitude"
                  id="latitude"
                  type="number"
                  min="0"
                  placeholder="Latitude"
                  className="appearance-none w-full mt-2 px-5 bg-[#F8F8F8] placeholder-[#E0E0E0] rounded-md text-sm text-gray-900 focus:outline-none transition ease-in-out duration-300 py-3.5"
                />
                <ErrorMessage
                  name="latitude"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mt-4">
                <button
                  disabled={!isValid || isSubmitting}
                  className="appearance-none w-full mt-2 px-5 bg-green-400 placeholder-[#E0E0E0] rounded-md text-sm text-gray-900 focus:outline-none transition ease-in-out duration-300 py-3.5"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddContactPage;
