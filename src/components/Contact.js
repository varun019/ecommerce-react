import React, { useState } from 'react'
import styled from 'styled-components';
import ReCAPTCHA from "react-google-recaptcha";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Contact = () => {

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40).required(),
    Message: yup.string()
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    toast.success('Thanks for filling out our form!', { position: toast.POSITION.TOP_CENTER, className: 'toast-message' });
    reset({
      name: '',
      email: '',
      Message: ''
    });
  }

  const [verified, setVerified] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true)
  }

  return (
    <Wrapper>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.737735535487!2d72.5540771744214!3d23.033399879166122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f48f946df7%3A0x917f5b1f3ec95edc!2sTechnostacks%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1684233075598!5m2!1sen!2sin" width="90%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form onSubmit={handleSubmit(onSubmit)} action='/' className='contact-inputs'>
            <input type='text' placeholder='Enter your Username' name='username' autoComplete='off' {...register("name")} />
            <p className='p-error'>{errors.name?.message}</p>
            <input type='email' placeholder='Enter your Email' name='Email' autoComplete='off' {...register("email")} />
            <p className='p-error'>{errors.email?.message}</p>
            <textarea name='Message' cols="30" rows="7" placeholder='Enter your Message' autoComplete='off' {...register("Message")}></textarea>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange} className='mt-4'
            />
            <input type='submit' value='Send' className='btn' disabled={!verified} onClick={handleSubmit(onSubmit)} />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 1rem 0 1rem 0;
    text-align: center;
    .btn{
        background:#6254f3;
        color:#fff;
    }
    .p-error{
      color:red;
    }
    .toast-message{
      font-weight:600;
      font-size:medium;
    }
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;
