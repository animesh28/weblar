import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

export const formInputGenerator = (name, formik) => {
  const nameArr = name.split(" ");
  const id = nameArr[0];
  const labelName = nameArr
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <>
      <label htmlFor={id}>Your {labelName}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[id]}
      ></input>
    </>
  );
};

export const formTextAreaGenerator = (name, formik) => {
  const nameArr = name.split(" ");
  const id = nameArr[0];
  const labelName = nameArr
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <label htmlFor={id}>Your {labelName}</label>
      <textarea
        id={id}
        name={id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[id]}
      ></textarea>
    </>
  );
};

export const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const validationSchema = Yup.object({
  name: Yup.string().required("Sorry, Name is required"),

  email: Yup.string()
    .required("Sorry, E-mail is required")
    .email("Please enter a valid E-mail"),

  phone: Yup.string()
    .required("Sorry, Phone Number is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Please enter a valid Phone Number"
    ),

  message: Yup.string()
    .required("Sorry, Message is required")
    .min(10, "Let's hear more from you!")
    .max(200, "Can you be a bit precise about your query."),
});

export const handleSubmit = async (values) => {
  try {
    await axios.post("https://weblar-animesh.herokuapp.com/send_email", {
      ...values,
    });

    toast.success("E-mail sent successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    toast.error(error.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
