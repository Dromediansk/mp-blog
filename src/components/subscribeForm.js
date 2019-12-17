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
    h3 {
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
        background: green;
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
`

const SubscribeMessage = styled.div`
    width: 100%;
    .success {
        background-color: green;
    }
    .error {
        background-color: red;
    }
`

const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [subscribe, setSubscribe] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        addToMailchimp(email)
            .then((data) => {
                console.log('data', data)
                if (data.result === 'success') {
                    setSubscribe(data.msg);
                    setSuccess(true);
                }
            })
            .catch(() => {
                setSuccess(false);
            });
    };

    const handleEmailChange = (event) => {
        setEmail(event.currentTarget.value);
    };

    const clearForm = () => {
        setEmail('');
        setSubscribe('');
    }

    return (
        <Form onSubmit={handleSubmit} className='subscribe-form'>
            <h3>Don't miss out any article since today</h3>
            <FormWrapper>
                {!subscribe ?
                    <input
                        placeholder="Email"
                        name="email"
                        type="text"
                        onChange={handleEmailChange}
                    />
                    :
                    <SubscribeMessage className={success ? "success" : "error"}>
                        {subscribe.msg}
                    </SubscribeMessage>}
                {!success && subscribe ?
                    <CancelButton onClick={clearForm}>Try again</CancelButton>
                    : !success &&
                    <FormButton type="submit">Subscribe</FormButton>}
            </FormWrapper>
        </Form>
    );
};

export default SubscribeForm;