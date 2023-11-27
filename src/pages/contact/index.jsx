import { Form, Button } from "reactstrap";
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import MessageInput from './MessageInput';

export default function Contact() {
    return (
        <>
            <h3 className="m-4 fw-bold">Contact Me</h3>
            <br />
            <Form>
                <NameInput />
                <br />
                <EmailInput />
                <br />
                <MessageInput />
                <br />
                <Button
                    outline
                    color="dark"
                    disabled
                >
                    Contact disabled; coming soon!
                </Button>
                <br /><br />
            </Form>
        </>
    );
};