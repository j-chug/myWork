import { FC, useState } from "react"
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { TeamProvider } from "../../contexts/TeamContext";
import { IUser } from "../../interfaces/IUser"
import { UserService } from "../../services/UserService";
import { Link } from "react-router-dom";
import TeamSelectList from "../Teams/TeamSelectList";


const NewUserForm: FC = () => {

    const [newUser, setNewUser] = useState<IUser>({Username: "", MyPlayerImg: ""})
    const [newImage, setNewImage] = useState<File>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let { name } = event.target;

        switch( name ){
            case "username":
                let { value } = event.target;
                setNewUser( { ...newUser, Username: value} ); 
            break;
            case "image":
                let { files } = event.target;
                if( files){
                    setNewUser( { ...newUser, MyPlayerImg: files[0].name } );
                    setNewImage( files[0] );
                }   
            break;
        }
    }

    // Lar bruker laste opp brukerprofil m bilde.
    const postNewUser = () => {
        if(newUser !== 0 ){
            UserService.postUser(newUser, newImage as File)
            console.log(newUser);
            console.log(newImage);
        }else {
            alert("Vennligst fyll inn alle felter.")
        }
        
    }

    return(
        <>
            <Container>
            <Form className="mt-5">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGriduName">
                        <Form.Label>Brukernavn</Form.Label>
                        <Form.Control type="text" placeholder="Bruker1337" onChange={handleChange} name="username" />
                    </Form.Group>
                </Row>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Last opp profilbilde</Form.Label>
                    <Form.Control type="file" onChange={handleChange} name="image" />
                </Form.Group>
                <Row>
                    <Form.Group as={Col} className="d-grid gap-2 pt-3">
                        <Link to={"/UserPage"} style={{ textDecoration: 'none' }} className="d-grid gap-2">
                            <Button variant="success" size="lg" onClick={postNewUser}>Lagre ny bruker</Button>
                        </Link> 
                    </Form.Group>
                </Row>
            </Form>
            </Container>
        </>
    )
}
export default NewUserForm;