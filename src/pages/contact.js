import { navigate } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';

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
            cursor: pointer;
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
    }
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const Contact = () => {
  const [formState, setFormState] = useState({});
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formState,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };
  return (
    <StyledSection className='page-width'>
      <header>
        <h1>Contact</h1>
      </header>
      <form
        name='contact-form'
        method='post'
        action='/thanks/'
        data-netlify='true'
        netlify-honeypot='bot-field'
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='bot-field' onChange={handleChange}/>
        <input type='hidden' name='form-name' value='contact' onChange={handleChange}/>
        <div className='fields'>
          <input type='text' name='first-name' placeholder='First Name' onChange={handleChange} required/>
          <input type='text' name='last-name' placeholder='Last Name' onChange={handleChange} required/>
        </div>
        <div className='fields'>
          <input type='tel' id='phone' name='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='Format: 123-456-7890' onChange={handleChange} required/>
          <input type='email' name='email' placeholder='Email' onChange={handleChange} required/>
        </div>
        <textarea name='message' placeholder='Your Message' className='full-width' rows='13' onChange={handleChange}required/>
        <input type='button' value='SEND'/>
      </form>

    </StyledSection>

  );
};

export default Contact;
