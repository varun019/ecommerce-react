import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loginwithlocalstorage = () => {
    
    const navigate = useNavigate();
    const schema = yup.object().shape({
        email:yup.string().email().required('Please enter your email!'),
        password:yup.string().required('Please enter your password!').min(4).max(8),
        
    })
    const {register,handleSubmit,formState : {errors}} = useForm({
        resolver : yupResolver(schema)
    });

    const onSubmit = (data)=>{
        const userData = JSON.parse(localStorage.getItem("register_user"));
        const existUser = userData.find((text)=> text.email === data.email);
        if(!existUser) {
            toast.error('Email Not registered',{position:toast.POSITION.TOP_CENTER,className:'toast-message'});
            return;    
        }
        const newUserData =  userData.map((user) => {
            if(user.email === data.email) {
                return {
                    ...user,
                    isLogin: true
                }
            }
            return user;
        });
        toast.success('Login successfully!',{position:toast.POSITION.TOP_CENTER,className:'toast-message'});
        navigate('/');
        localStorage.setItem('register_user',JSON.stringify(newUserData));
       
    }
    
    return (
        <Wrapper>
            <div style={{paddingLeft:'30rem'}} className='content'>
            <p className='mb-5 fs-1 fw-bold mt-5 p-title'>Log In</p>
        <div>
            <form>

                <div className="form-outline mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw icons"></i>
                    <input type="email" id="form2Example1" className="form-control fw-bold fs-3 email" placeholder='Email address' {...register("email")} />
                    <p className='p-error'>{errors.email?.message}</p>
                    <label className="form-label" htmlFor="form2Example1"></label>
                </div>

                <div className="form-outline mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw icons"></i>
                    <input type="password" id="form2Example2" className="form-control fw-bold fs-3 password" placeholder='Password' {...register("password")}/>
                    <p className='p-error'>{errors.password?.message}</p>
                    <label className="form-label" htmlFor="form2Example2"></label>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4 btn-log" onClick={handleSubmit(onSubmit)}>Log In</button>

                <div>
                    <p>Not a member? <NavLink to='/register'>Register</NavLink></p>
                    <p>or Sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f icon"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google icon"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter icon"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github icon"></i>
                    </button>
                </div>
    
            </form>
            </div>
            </div>
            </Wrapper>
    )
}

const Wrapper = styled.div`
.icon::before{
    font-size:25px;
}
@media (max-width:768px){
    .content{
    flex-wrap: wrap;
    -webkit-box-pack: center;
    margin-left: -125px;
    }
    .email,.password{
        width:20rem;
        display:flex;
        justify-content:center;
    }
}
.icons{
    display: flex;
    font-size: 20px;
    right: 2.5rem;
    top: 2.5rem;
    position: relative;
}
.p-error{
    color:red;
}
.email,.password{
    height: 44px;
    // width: 70rem;
    font-size: 14px;
    border: 0;
    border-bottom: 2px solid;
    border-radius: 0;
}
.checked{
    width:20px;
}

.btn-log{
    font-size: large;
    font-weight: bolder;
    padding: 5px;
}
}
`
export default Loginwithlocalstorage;