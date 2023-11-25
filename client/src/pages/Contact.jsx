import { useState } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";

export default function Contact() {
    const [nameInputValue, setNameInputValue] = useState('');
    const [nameInputOk, setNameInputOk] = useState(false);
    const [nameBlur, setNameBlur] = useState(false);
    const handleNameInputChange = (event) => {
        const nameInpV = event.target.value
        setNameInputValue(nameInpV)
        setNameInputOk(nameInpV.length > 0 ? true : false)
    }
    const handleNameInputBlur = () => {
        setNameBlur(true)
    }

    const [emailInputValue, setEmailInputValue] = useState('');
    const [emailInputOk, setEmailInputOk] = useState(false);
    const [emailBlur, setEmailBlur] = useState(false);
    const handleEmailInputChange = (event) => {
        const emailInpV = event.target.value
        setEmailInputValue(emailInpV)
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        setEmailInputOk(emailRegex.test(emailInpV) ? true : false)
    }
    const handleEmailInputBlur = () => {
        setEmailBlur(true)
    }

    const [msgInputValue, setMsgInputValue] = useState('');
    const [msgInputOk, setMsgInputOk] = useState(false);
    const [msgBlur, setMsgBlur] = useState(false);
    const handleMsgInputChange = (event) => {
        const msgInpV = event.target.value
        setMsgInputValue(msgInpV)
        setMsgInputOk(msgInpV.length > 0 ? true : false)
    }
    const handleMsgInputBlur = () => {
        setMsgBlur(true)
    }

    return (
        <>
            <h3>Contact Me</h3>
            <br />
            <Form>
                <FormGroup className="text-start">
                    <Label for="contactName">
                        Name
                    </Label>
                    <Input
                        className={`form-control ${nameBlur && (nameInputOk ? 'is-valid' : 'is-invalid')}`}
                        id="contactName"
                        name="contactName"
                        placeholder="Name"
                        value={nameInputValue}
                        type="text"
                        onChange={handleNameInputChange}
                        onBlur={handleNameInputBlur}
                    />
                    <FormFeedback>
                        Uh oh! You left this field blank. Please fill it in.
                    </FormFeedback>
                </FormGroup>
                <br />
                <FormGroup className="text-start">
                    <Label for="contactEmail">
                        Email
                    </Label>
                    <Input
                        className={`form-control ${emailBlur && (emailInputOk ? 'is-valid' : 'is-invalid')}`}
                        id="contactEmail"
                        name="contactEmail"
                        placeholder="email@example.com"
                        value={emailInputValue}
                        type="email"
                        onChange={handleEmailInputChange}
                        onBlur={handleEmailInputBlur}
                    />
                    <FormFeedback>
                        Please type a valid email address.
                    </FormFeedback>
                </FormGroup>
                <br />
                <FormGroup className="text-start">
                    <Label for="contactMessage">
                        Message
                    </Label>
                    <Input
                        className={`form-control ${msgBlur && (msgInputOk ? 'is-valid' : 'is-invalid')}`}
                        id="contactMessage"
                        name="contactMessage"
                        placeholder="Message for Beth"
                        value={msgInputValue}
                        type="textarea"
                        onChange={handleMsgInputChange}
                        onBlur={handleMsgInputBlur}
                    />
                    <FormFeedback>
                        Uh oh! You left this field blank. Please fill it in.
                    </FormFeedback>
                </FormGroup>
            </Form>
        </>
    );
};