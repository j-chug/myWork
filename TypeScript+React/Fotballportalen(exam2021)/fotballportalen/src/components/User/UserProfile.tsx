import { useParams } from "react-router";
import { FC, useEffect, useState } from "react";
import { IUser } from "../../interfaces/IUser";
import axios from "axios";
import { Container, Form, Row, Col, Button, Image } from "react-bootstrap";

const UserProfile: FC = () => {

    const { Username } = useParams();

    const [ user, setUser] = useState<IUser>({Username: "", Age: "", MyPlayerImg: ""});

    useEffect( () => {
        axios.get(`https://localhost:5001/User/searchuser/${Username}`)
        .then(response => {
            setUser({
                Username: response.data.username,
                Age: response.data.age,
                MyPlayerImg: response.data.myPlayerImg,
            })
        })        
    }, [])

    const deleteProfile = () => {
        axios.delete(`https://localhost:5001/User/searchuser/${Username}`)
    }

    return (
        <Container>
            <Form className="mt-5">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formPlaintextEmail">
                    <Form.Label>Brukernavn</Form.Label>
                    <Form.Control type="text" disabled placeholder={user.Username} value={user.Username} />
                    </Form.Group>
                    <Form.Group as={Col} className="h-25">
                        <Image fluid  roundedCircle src={`https://localhost:5001/images/${user.MyPlayerImg}`}></Image>
                    </Form.Group> 
                </Row>
                <Row>
                    <Form.Group as={Col} className="d-grid gap-2 pt-3"> 
                        <Button variant="success" size="lg" >Lagre endringer</Button>
                        <Button variant="danger" size="lg" onClick={deleteProfile}>Slett profil</Button>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
        
    )

}

export default UserProfile;