import { useState } from 'react';
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

//Email input section
export default function EmailInput() {
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

    return (
        <FormGroup className="text-start">
            <Label for="contactEmail">
                Email
            </Label>
            <Input
                className={`${emailBlur && (emailInputOk ? 'is-valid' : 'is-invalid')}`}
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
    )
}