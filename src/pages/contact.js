import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    form {
        font-size: 1.6rem;

        input, textarea {
            box-sizing: border-box;
            padding: 10px;
            background: #cfcfcf;
            border: none;
            /* outline: none; */
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
    }
`;

const Contact = () => {
  return (
    <StyledSection className='page-width'>
      <header>
        <h1>Contact</h1>
      </header>
      {/* <form
        name='contact-form'>
        <div className='fields'>
          <input type='text' name='first-name' placeholder='First Name' required/>
          <input type='text' name='last-name' placeholder='Last Name' required/>
        </div>
        <div className='fields'>
          <input
          type='tel'
          name='phone'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='Format: 123-456-7890' required/>
          <input type='email' name='email' placeholder='Email' required/>
        </div>
        <textarea
         name='message' placeholder='Your Message' className='full-width' rows='13'required/>
        <input type='button' value='SEND'/>
      </form> */}
      <form method='post' netlify-honeypot='bot-field' data-netlify='true' name='contact'>
        <input type='hidden' name='bot-field' />
        <input type='hidden' name='form-name' value='contact' />
        <label>
          Name
          <input type='text' name='name' id='name' />
        </label>
        <label>
          Email
          <input type='email' name='email' id='email' />
        </label>
        <label>
          Subject
          <input type='text' name='subject' id='subject' />
        </label>
        <label>
          Message
          <textarea name='message' id='message' rows='5' />
        </label>
        <button type='submit'>Send</button>
        <input type='reset' value='Clear' />
      </form>

    </StyledSection>

  );
};

export default Contact;
