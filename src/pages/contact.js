import React from 'react';
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

    #first {
      input {
        margin-top: 0;
      }
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
`;

const Contact = () => {
  return (
    <>
      <SEO title='Contact Us'/>
      <StyledSection className='page-width'>
        <header>
          <h1>Contact</h1>
        </header>
        <form
          name='contact-form'>
          <div className='fields' id='first'>
            <input type='text' name='first-name' placeholder='First Name' required/>
            <input type='text' name='last-name' placeholder='Last Name' required/>
          </div>
          <div className='fields'>
            <input type='tel' id='phone' name='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='Format: 123-456-7890' required/>
            <input type='email' name='email' placeholder='Email' required/>
          </div>
          <textarea name='message' placeholder='Your Message' className='full-width' rows='13'required/>
          <input type='button' value='SEND'/>
        </form>

      </StyledSection>
    </>
  );
};

export default Contact;
