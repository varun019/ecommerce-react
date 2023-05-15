import styled from "styled-components";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import {yupResolver} from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = (props)=>{
  
  const navigate = useNavigate();
  const userData = {}
  // localStorage.setItem('register_user','varun')
  const onSubmit = (data)=>{
    delete data.confirmPassword;
    delete data.password;
    const newData = {
      ...data,
      isRegister: true,
      isLogin: false
    }
    var userArray = [];
    const userInfo = localStorage.getItem('register_user')
    console.log('userInfo', userInfo);
    // const isAvailable = localStorage.getItem('register_user');
    // // // console.log(isAvailable);
    if(userInfo) {
      const tamp = JSON.parse(userInfo);
      const filtered = tamp.find(temp => temp.email === newData.email)
      if(filtered){
        toast.error('This email is already registered !!!', {
          position: toast.POSITION.TOP_CENTER,className:'toast-message'
      });
        return;
      }
      toast.success('Registration Successful!',{position:toast.POSITION.TOP_CENTER,className:'toast-message'})
      localStorage.setItem('register_user', JSON.stringify([
        ...tamp,
        newData
      ]));
    } else {
      localStorage.setItem('register_user', JSON.stringify([newData]));
    }
    navigate('/login')
    return;
}

  const schema = yup.object().shape({
    name:yup.string().required('Please enter your name'),
    email:yup.string().email().required('Please enter your email'),
    password:yup.string().required('Please enter a password').min(4).max(8),
    confirmPassword:yup.string().required('Password should match').oneOf([yup.ref('password'),null]),
  })
  const {register,handleSubmit,formState : {errors}} = useForm({
    resolver: yupResolver(schema),
  });

    return(
      <Wrapper>
<div className='' style={{border:'none'}}>
  <div className="container">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black reg-info">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <h1 className="h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h1>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw icons"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control fw-bold" placeholder="Your Name" {...register('name')}/>
                      <p>{errors.name?.message}</p>
                      <label className="form-label" for="form3Example1c" ></label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw icons"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control fw-bold" placeholder="Your Email" {...register('email')}/>
                      <p>{errors.email?.message}</p>
                      <label className="form-label" for="form3Example3c" ></label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw icons"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control fw-bold" placeholder="Password" {...register('password')}/>
                      <p>{errors.password?.message}</p>
                      <label className="form-label" for="form3Example4c" ></label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw icons"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control fw-bold" placeholder="Repeat your password" {...register('confirmPassword')}/>
                      <p>{errors.confirmPassword?.message}</p>
                      <label className="form-label" for="form3Example4cd" ></label>
                    </div>
                  </div>

                  <div className="mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg btn-reg" onClick={handleSubmit(onSubmit)}>Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="images/register.webp"
                  className="img-fluid" alt="Sample image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</Wrapper>
)
}

const Wrapper = styled.div`
.icons:before {
  font-size: 18px;
}
.check{
  width: 22px;
  height: 20px;
  margin-right: 8px;
}
.reg-info{
  border:none;
}

input{
  height: 44px;
  font-size: 14px;
  border: 0;
  border-bottom: 2px solid;
  border-radius: 0;
}
.check-field{
  position: relative;
  margin-left: -120px;
}
p{
  color:red;
}
.btn-reg{
  font-size: medium;
  font-weight: bold;
}

`
export default Register;