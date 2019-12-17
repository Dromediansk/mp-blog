import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    background: #ddd;
    color: #2a2a2a;
    font-family: -apple-system, Helvetica, Arial, sans-serif;
    padding: 2rem;
    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    input {
        color: #2a2a2a;
        width: 100%;
        border: none;
    }
    button, input {
        padding: 0.5rem 1rem;
        @media only screen and (max-width: 768px) {
            margin: 0.3rem 0;
        }
    }
    @media only screen and (max-width: 768px) {
        padding: 1rem;
    }
`

const FormButton = styled.button`
    display: inline-block;
    border: none;
    background-color: #DD0505;
    color: white;
    letter-spacing: 1px;
    transition: all 0.2s linear; 
    :hover {
        cursor: pointer;
        background: #f0ad4e;
    }
`

const CancelButton = styled.button`
    display: inline-block;
    border: none;
    letter-spacing: 1px;
    transition: all 0.2s linear; 
    width: 200px;
    background-color: #ccc;
    cursor: pointer;
`

const FormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const SubscribeMessage = styled.div`
    width: 100%;
`

const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const errorMessage = 'Oops! Something went wrong.';

    const handleSubmit = (e) => {
        e.preventDefault();
        addToMailchimp(email)
            .then((data) => {
                if (data.result === 'success') {
                    setMessage(data.msg);
                    setSuccess(true);
                } else {
                    setSuccess(false);
                    setMessage(errorMessage)
                }
            })
            .catch(() => {
                setMessage(errorMessage)
                setSuccess(false);
            });
    };

    const handleEmailChange = (event) => {
        setEmail(event.currentTarget.value);
    };

    const clearForm = () => {
        setEmail('');
        setMessage('');
    }

    return (
        <Form onSubmit={handleSubmit} className='subscribe-form'>
            <p>Don't miss out any article. We send feed every time new article is published.</p>
            <FormWrapper>
                {!message ?
                    <input
                        placeholder="Email"
                        name="email"
                        type="text"
                        onChange={handleEmailChange}
                    />
                    :
                    <SubscribeMessage>
                        {message}
                    </SubscribeMessage>}
                {!success && message ?
                    <CancelButton onClick={clearForm}>Try again</CancelButton>
                    : !success &&
                    <FormButton type="submit">Subscribe</FormButton>}
            </FormWrapper>
        </Form>
    );
};

export default SubscribeForm;