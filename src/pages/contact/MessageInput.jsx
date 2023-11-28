import { useState } from 'react';
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

//Message input
export default function MessageInput() {
    const [msgInputValue, setMsgInputValue] = useState('');
    const [msgInputOk, setMsgInputOk] = useState(false);
    const [msgBlur, setMsgBlur] = useState(false);
    const handleMsgInputChange = (event) => {
        const msgInpV = event.target.value
        setMsgInputValue(msgInpV)
        setMsgInputOk(msgInpV.length > 0 ? true : false)
    }
    const handleMsgInputBlur = () => {setMsgBlur(true)}

    return (
        <FormGroup className="text-start">
            <Label for="contactMessage">
                Message
            </Label>
            <Input
                className={`${msgBlur && (msgInputOk ? 'is-valid' : 'is-invalid')}`}
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
    )
}