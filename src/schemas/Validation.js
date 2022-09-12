import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
    name: Yup.string().min(3).max(30).required("Please Enter Your Name"),
    gender: Yup.string(),
    email: Yup.string().email().required("Please Enter Valid Email"),
    password: Yup.string().min(6).required("Please Enter Your Password"),
    confirm_password: Yup.string().required("Please Enter Confirm Password").oneOf([Yup.ref('password'),null],"Password must match"),
})
