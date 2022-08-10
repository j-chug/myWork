import { FC } from "react"
import { Container } from "react-bootstrap";
import LogonForm from "../components/User/LogonForm";

const UserPage: FC = () => {
    return(
        <section>
            <Container>
                <LogonForm></LogonForm>
            </Container>
        </section>
        
    )

}

export default UserPage;