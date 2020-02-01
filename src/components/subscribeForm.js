import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    background: #ddd;
    color: #2a2a2a;
    border-radius: 4px;
    font-family: -apple-system, Helvetica, Arial, sans-serif;
    padding: 1.2rem 2rem;
    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    input {
        color: #2a2a2a;
        width: 100%;
        border: none;
        outline: none;
    }
    button, input {
        padding: 0.5rem 1rem;
        border-radius: 4px;
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
    border-radius: 4px;
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

    const cutString = (str) => {
        const newStr = str.split("MP Blog")[0];
        return newStr;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addToMailchimp(email)
            .then((data) => {
                setMessage(data.msg);
                if (data.result === 'success') {
                    setSuccess(true);
                } else {
                    if (data.msg.includes('already subscribed')) {
                        setMessage(cutString(data.msg))
                    }
                    setSuccess(false);
                }
            })
            .catch(() => {
                setMessage(errorMessage)
                setSuccess(false);
            });
    };

    const handleEmailChange = (event) => {
        const newEmail = event.currentTarget.value.trim();
        setEmail(newEmail);
    };

    const clearForm = () => {
        setEmail('');
        setMessage('');
    }

    return (
        <Form onSubmit={handleSubmit} className='subscribe-form'>
            <p>Don't miss out any article. I send feed every time new article is published.</p>
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