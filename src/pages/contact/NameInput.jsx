import { useState } from 'react';
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

//Name input
export default function NameInput() {
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

    return (
        <FormGroup className="text-start">
        <Label for="contactName">
            Name
        </Label>
        <Input
            className={`${nameBlur && (nameInputOk ? 'is-valid' : 'is-invalid')}`}
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
    )
}