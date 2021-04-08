import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const StyledSection = styled.section`
  form {
    font-size: 1.6rem;
    
    input, textarea {
      box-sizing: border-box;
      padding: 10px;
      background: #cfcfcf;
      border: none;
      margin-top: 10px;
      resize: none;
    }

    input[type="button"] {
      background: var(--blue);
      padding: 15px;
    }

    textarea {
      height: auto;
    }

    .fields {
      display: flex;
      justify-content: space-between;

      input {
        width: 49%;
      }
    }

    .full-width {
      width: 100%;
    }

    @media(max-width: 575px) {
      .fields {
        flex-direction: column;

        input {
          width: 100%;
        }
      }
    }
  }

  div {
    text-align: center;
  }

  .hidden {
      display: none;
    }
`;

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const [msgSent, setMsgSent] = useState(false);
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    console.log({ serverState });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://getform.io/f/7409e855-3dc6-4b91-bfe0-49074fa3994f',
      data: new FormData(form),
    })
      .then(() => {
        setMsgSent(true);
        handleServerResponse(true, 'Success!', form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
        alert('There was en error, please try again');
      });
  };
  console.log({ serverState });
  return (
    <>
      <SEO title='Contact Us'/>
      <StyledSection className='page-width'>
        <header>
          <h1>Contact</h1>
        </header>
        <div className={msgSent ? null : 'hidden'}>
          <h2>Your message has been submitted. Thank you!</h2>
          <h3>We will shortly get back to you</h3>
        </div>
        <form onSubmit={handleOnSubmit} className={msgSent ? 'hidden' : null}>
          <div className='fields'>
            <input type='text' name='first-name' placeholder='First Name' required/>
            <input type='text' name='last-name' placeholder='Last Name' required/>
          </div>
          <div className='fields'>
            <input type='tel' id='phone' name='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='Phone# (123-456-7890)' required/>
            <input type='email' name='email' placeholder='Email' required/>
          </div>
          <textarea name='message' placeholder='Your Message' className='full-width' rows='13'required/>
          <button type='submit' disabled={serverState.submitting}>{serverState.submitting ? 'Sending...' : 'Send'}</button>
        </form>
      </StyledSection>
    </>
  );
};

export default Contact;
