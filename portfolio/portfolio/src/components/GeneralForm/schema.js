import * as yup from "yup";



export const FormSchema = yup.object().shape({
    username: yup.string()
        .min(2, "First name must be at least 2 characters.")
        .required("Name is required."),
    surname: yup.string()
        .min(2, "Last name must be at least 2 characters.")
        .required("Surname is required."),
    email: yup.string()
        .min(2, "Enter a valid email.")
        .required("Email is required."),
    message: yup.string()
        .required('Message is required'),

});
