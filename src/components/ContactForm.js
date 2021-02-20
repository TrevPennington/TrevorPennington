import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
    padding-bottom: 200px;
    padding-top: 200px;
    background-color: var(--bg);

    @media(max-width: 900px) {
        padding-bottom: 50px;
        padding-top: 20px;
    }
`

const FormTitle = styled.p`
    font-family: var(--titles);
    font-weight: 200;
    text-transform: uppercase;
    color: var(--textNormal);
    text-align: center;
    margin: auto;
    font-size: 2em;
    letter-spacing: 5px;
    font-style: italic;
`

const Form = styled.form`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const TextInput = styled.textarea`
    margin: 20px auto;
    height: 200px;
    width: 500px;
    background-color: var(--formBg);
    border: 1px solid var(--formBg);
    border-radius: 20px;
    color: var(--textBright);
    outline: none;
    text-align: center;

    @media(max-width: 900px) {
        width: 90vw;
    }
`

const EmailInput = styled.input`
    margin: 20px auto;
    height: 50px;
    width: 400px;
    background-color: var(--formBg);
    border: 1px solid var(--formBg);
    border-radius: 20px;
    color: var(--textBright);
    outline: none;
    text-align: center;

    @media(max-width: 900px) {
        width: 90vw;
    }
`

const SubmitButton = styled.button`
    margin: auto;
    margin-top: 40px;
    width: 150px;
    background-color: var(--bg);
    border: 3px solid var(--splashy);
    border-radius: 20px;
    color: var(--textBright);
    outline: none;
    &:hover {
        cursor: pointer;
        transition-duration: 0.3s;
        border: 3px solid var(--splashy);
        background-color: var(--splashyDark);
      }
`

export default () => {

    const confirmationAlert = () => {
        alert("Thank you for contacting us, we will respond as soon as we can!")
      }

    return (
        <>
        <FormWrapper>

            <FormTitle id="contact">say hello</FormTitle>
            <Form name='inquiry' method='POST' data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={confirmationAlert}>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="inquiry" />
                <TextInput type="text" placeholder="message" rows="5"></TextInput>
                <EmailInput type="email" placeholder="email"></EmailInput>
                <SubmitButton type="submit">send!</SubmitButton>
            </Form>
        </FormWrapper>
        </>
    )
}

