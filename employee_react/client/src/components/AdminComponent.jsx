import React ,{useState} from "react";
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import SuccessComponent from './SuccessComponent';
import ErrorComponent from './ErrorComponent';
function AdminComponent(){
    const [success, setSuccess] = useState(false);
    const [error,setError] = useState(false);
    // const [showform,setShowform] = useState(true);
    const [validationMessage,setValidationMessage]=useState();
    const [backendErrors,setBackendErrors] = useState({});

    const initialValues={
        name:'',
        email:'',
        place:'',
        designation:'',
        contact:'',
        password:''
       };
const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
      
          password: Yup.string()
          .required('No password provided.') 
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, 'Password must contain one Uppercase and one lowercase and a number.'),
        
});
const handleSubmit=async(values,{setErrors,resetForm})=>{
    try {
    //   setLoading(true)
      console.log("Before Axios")
      const {token} = response.data
    //   const response= await axios.post(`http://localhost:3000/api/admin`,values);
      console.log("After Axios");
      console.log("Form Submitted",response.data);
  
        if (response.data.errors) {
          setBackendErrors(response.data.errors);
          setErrors(response.data.errors); 
          setValidationMessage(response.data.message);
          setError(true);
          setSuccess(false);
        } else if (response.data.success) {
          setSuccess(true);
          setShowform(false);
  
        }
        resetForm();
      } catch (error) {
        setError(true);
        console.log(error);
      }
  
   };
return (


<div>
      <h1 style={{ textAlign: "center", color: "blue" }}>Admin login</h1>
      <div className="container mx-auto col-sm-12 col-md-12 col-lg-4">
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={SignupSchema} 
      >
          <Form className='mt-5'>
            <div className=" shadow-lg  bg-body rounded ">
            <div className="form-group text-center " >
            <label htmlFor='name' style={{ color: "blue" }}>
                Name
                <Field type="text" id="name"  name = "name" className="form-control" style={{padding:"15px"}} />
                {/* {errors.name && touched.name ? (
                <div>{errors.name }  </div>
                ) : null} */}
                <ErrorMessage name="name" style={{color:"red"}} component="div"/>
                {backendErrors.name_empty && <div>{backendErrors.name_empty}</div>}
                {backendErrors.name && <div>{backendErrors.name}</div>}
                </label>
            </div>
            <div className="form-group text-center " >
            <label htmlFor='email' style={{ color: "blue" }}>
                Email
                <Field type="text" id="email"  name = "email" className="form-control" style={{padding:"15px"}} />
                {/* {errors.name && touched.name ? (
                <div>{errors.name }  </div>
                ) : null} */}
                <ErrorMessage name="email" style={{color:"red"}} component="div"/>
                {backendErrors.email_empty && <div>{backendErrors.email_empty}</div>}
                {backendErrors.email && <div>{backendErrors.email}</div>}
                </label>
            </div>
            <div className="form-group text-center " >
            <label htmlFor='place' style={{ color: "blue" }}>
            Place
                <Field type="text" id="place"  name = "place" className="form-control" style={{padding:"15px"}} />
                {/* {errors.name && touched.name ? (
                <div>{errors.name }  </div>
                ) : null} */}
                <ErrorMessage name="place" style={{color:"red"}} component="div"/>
                {backendErrors.place_empty && <div>{backendErrors.place_empty}</div>}
                {backendErrors.place && <div>{backendErrors.place}</div>}
                </label>
            </div>
            <div className="form-group text-center " >
            <label htmlFor='designation' style={{ color: "blue" }}>
                Work
                <Field type="text" id="designation"  name = "designation" className="form-control" style={{padding:"15px"}} />
                {/* {errors.name && touched.name ? (
                <div>{errors.name }  </div>
                ) : null} */}
                <ErrorMessage name="designation" style={{color:"red"}} component="div"/>
                {backendErrors.designation_empty && <div>{backendErrors.designation_empty}</div>}
                {/* {backendErrors.username && <div>{backendErrors.username}</div>} */}
                </label>
            </div>
            <div className="form-group text-center " >
            <label htmlFor='contact' style={{ color: "blue" }}>
            Contact
                <Field type="text" id="contact"  name = "contact" className="form-control" style={{padding:"15px"}} />
                {/* {errors.name && touched.name ? (
                <div>{errors.name }  </div>
                ) : null} */}
                <ErrorMessage name="contact" style={{color:"red"}} component="div"/>
                {backendErrors.contact_empty && <div>{backendErrors.contact_empty}</div>}
                {/* {backendErrors.username && <div>{backendErrors.username}</div>} */}
                </label>
            </div>
            <div className="form-group text-center " >
            <label htmlFor='npassword' style={{ color: "blue" }}>
                password
                <Field type="password" id="password"  name = "password" className="form-control" style={{padding:"15px"}} />
                {/* {errors.name && touched.name ? (
                <div>{errors.name }  </div>
                ) : null} */}
                <ErrorMessage name="password" style={{color:"red"}} component="div"/>
                {backendErrors.password_empty && <div>{backendErrors.password_empty}</div>}
                </label>
            </div>
            
          
           
            
  
            {/* <ErrorMessage name="name" style={{color:"red"}} component="div" /> */}
  
            <div className="form-group text-center" style={{padding:"20px"}}>
          
  
  
            <button type="submit" className="btn btn-primary" >Login</button>
            <ErrorMessage name="submitError" style={{color:"red"}} component="div" />
            </div>
            </div>
            
               
          </Form>       
         
      </Formik>
      </div>
    </div>
)
}
export default AdminComponent;