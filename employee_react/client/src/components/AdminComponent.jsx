import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import SuccessComponent from "./SuccessComponent";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";

function AdminComponent() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [backendErrors, setBackendErrors] = useState({});
  const [showform,setShowform] = useState(true);
  const [loading,setLoading] = useState();


  const handleSuccess = () => {
    setSuccess(false); 
    setShowform(true);
  };
  
  const handleError=()=>{
    setError(false);
  }

  const initialValues = {
    email: '',
    password: ''
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),

    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, 'Password must contain one Uppercase, one lowercase, and a number.'),
  });

  const handleSubmit = async (values, { setErrors, resetForm }) => {
    try {
      const response = await axios.post(`http://localhost:3000/login`, values);

      if (response.data.errors) {
        setBackendErrors(response.data.errors);
        setErrors(response.data.errors);
        setValidationMessage(response.data.message);
        setError(true);
        setSuccess(false);
      } else if (response.data.success) {
        setSuccess(true);
        setShowform(false);
        // Handle successful login action or redirect to a new page
      }
      resetForm();
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
    {showform && (
    <div>
      <h1 style={{ textAlign: "center", color: "blue" }}>Admin login</h1>
      <div className="container mx-auto col-sm-12 col-md-12 col-lg-4">
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={SignupSchema}>
          <Form className='mt-5'>
            <div className=" shadow-lg  bg-body rounded ">
              <div className="form-group text-center " >
                <label htmlFor='email' style={{ color: "blue" }}>
                  Email
                  <Field type="text" id="email" name="email" className="form-control" style={{ padding: "15px" }} />
                  <ErrorMessage name="email" style={{ color: "red" }} component="div" />
                  {backendErrors.email_empty && <div>{backendErrors.email_empty}</div>}
                  {backendErrors.email && <div>{backendErrors.email}</div>}
                </label>
              </div>
              <div className="form-group text-center " >
                <label htmlFor='password' style={{ color: "blue" }}>
                  Password
                  <Field type="password" id="password" name="password" className="form-control" style={{ padding: "15px" }} />
                  <ErrorMessage name="password" style={{ color: "red" }} component="div" />
                  {backendErrors.password_empty && <div>{backendErrors.password_empty}</div>}
                </label>
              </div>
              <div className="form-group text-center" style={{ padding: "20px" }}>
                <button type="submit" className="btn btn-primary" >Login</button>
                <ErrorMessage name="submitError" style={{ color: "red" }} component="div" />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
    )}
      <div>
    {loading?(<LoadingComponent/>):(<div>{
      <div>
         {success && <SuccessComponent onClose={handleSuccess}/>}
         {error && <ErrorComponent message={validationMessage} onClose={handleError}/>}
         </div>
      }
      </div>)}
  </div>
    </>
  );
}

export default AdminComponent;
