import { Form } from "reactstrap";
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import MessageInput from './MessageInput';

export default function Contact() {
    return (
        <>
            <h3>Contact Me</h3>
            <br />
            <Form>
                <NameInput />
                <br />
                <EmailInput />
                <br />
                <MessageInput />
            </Form>
        </>
    );
};