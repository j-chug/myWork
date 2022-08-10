import { FC, useState } from "react"
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../User/Logon.css"
import { IUser } from "../../interfaces/IUser";

const LogonForm: FC = () => {

    // const {getUserByUsername} = useContext(UserContext) as UserContextType;
    const [user, setUser] = useState<IUser>({Username: ""});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredUsername = event.target.value;
        setUser({Username: enteredUsername});
        console.log(user.Username)
      }
    

    return(
        <Container className="mt-5">
            <Form className="login" >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Brukernavn</Form.Label>
                    <Form.Control type="text" placeholder="Bruker1337" onChange={handleChange}/>
                </Form.Group>
                <Link to={`/UserProfile/${user.Username}`} style={{ textDecoration: 'none' }} className="d-grid gap-2 mt-3">
                    <Button variant="success" type="submit">
                        Logg inn
                    </Button>
                </Link>
                <Link to={"/NewUserForm"} style={{ textDecoration: 'none' }} className="d-grid gap-2 mt-3">
                    <Button variant="primary" type="submit">
                        Ny bruker
                    </Button>
                </Link>
            </Form>
        </Container>
    );
}

export default LogonForm;