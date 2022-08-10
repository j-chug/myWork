import { FC, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../contexts/UserContext";
import { IUser } from "../../interfaces/IUser";
import { UserContextType } from "../../types/UserContextType";
import UserItem from "./UserItem";

const UserList: FC = () => {
    
    const { users } = useContext(UserContext) as UserContextType;

    const createUserList = () => {
        return users.map( ( user: IUser, key: number) => {
            return(
                <Col className="mt-4" key={key}>
                    <UserItem
                         id={user.id}  
                    />
                </Col>
                
            ) 
        });
    }
        console.log(users)

    return (
        <section>
            <Container>
                <Row>
                    { createUserList() }
                </Row>
            </Container>
        </section>
    )
}

export default UserList;